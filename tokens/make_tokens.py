"""Penalty tokens: Accuracy, Strength and Training, in -1 and -2 values, styled as small fired-clay tablets.

The Action tokens look like metal coins; these look like clay, so the two families are easy to tell apart.
Each kind keeps its own shape (Accuracy round, Strength square, Training hexagon) so a single-colour
print still reads at a glance. The edge is slightly uneven like hand-pinched clay, the label and value are
stamped into the face like a seal, and shallow cracks run in from the edge, stopping short of the lettering.

Suggested colours (filament or paint): Accuracy ochre #C49A5E, Strength terracotta #A4502F,
Training dark umber #5E4632, with a dark wash (or a light slip on the umber) in the stamped letters.
"""
import math, os, random
from manifold3d import CrossSection, Manifold, FillRule
from matplotlib.textpath import TextPath
from matplotlib.font_manager import FontProperties
from shapely.geometry import LineString, Polygon, box
from shapely.ops import unary_union
import trimesh

HERE = os.path.dirname(os.path.abspath(__file__))
FONT = FontProperties(fname=os.path.join(HERE, "..", "tools", "fonts", "Cinzel-700.ttf"))
SIZE = 25.0        # outer size in mm (diameter, square side x 0.9, hexagon across corners)
T = 3.0            # tablet thickness
STAMP = 0.7        # depth of the stamped lettering
CRACK_D, CRACK_W = 0.45, 0.4   # crack depth and width

def outline(kind, seed):
    """Base shape with a gently wavy edge, like clay pressed by hand."""
    rnd = random.Random(seed)
    waves = [(rnd.uniform(0.08, 0.2), k, rnd.uniform(0, 2 * math.pi)) for k in (2, 3, 5)]
    if kind == "circle":
        base = [(SIZE / 2 * math.cos(t), SIZE / 2 * math.sin(t)) for t in (2 * math.pi * i / 160 for i in range(160))]
    else:
        if kind == "square":
            h = SIZE * 0.9 / 2
            corners = [(-h, -h), (h, -h), (h, h), (-h, h)]
        else:
            r = SIZE / 2
            corners = [(r * math.cos(math.pi / 6 + i * math.pi / 3), r * math.sin(math.pi / 6 + i * math.pi / 3)) for i in range(6)]
        poly = Polygon(corners).buffer(-1.2).buffer(1.2, resolution=8)   # softened corners
        base = list(poly.exterior.coords)[:-1]
    out = []
    for x, y in base:
        a = math.atan2(y, x); r = math.hypot(x, y)
        d = sum(amp * math.sin(k * a + ph) for amp, k, ph in waves)
        out.append(((r + d) * math.cos(a), (r + d) * math.sin(a)))
    return out

def text(s, height, cy):
    p = TextPath((0, 0), s, size=10, prop=FONT)
    cs = CrossSection([[tuple(pt) for pt in poly] for poly in p.to_polygons() if len(poly) > 2], FillRule.EvenOdd)
    x0, y0, x1, y1 = cs.bounds()
    k = height / (y1 - y0)
    return cs.translate([-(x0 + x1) / 2, -(y0 + y1) / 2]).scale([k, k]).translate([0, cy])

def cracks(shape, keep_clear, seed):
    """A few branching cracks that start at the edge and wander inward, clipped away from the lettering."""
    rnd = random.Random(seed)
    edge = Polygon(shape)
    lines = []
    for _ in range(rnd.randint(6, 8)):
        a = rnd.uniform(0, 2 * math.pi); r = SIZE / 2 + 1
        x, y = r * math.cos(a), r * math.sin(a)
        heading = a + math.pi + rnd.uniform(-0.5, 0.5)
        pts = [(x, y)]
        for step in range(rnd.randint(6, 11)):
            heading += rnd.uniform(-0.6, 0.6)
            x += 1.3 * math.cos(heading); y += 1.3 * math.sin(heading)
            pts.append((x, y))
            if rnd.random() < 0.25:   # a short branch
                bh = heading + rnd.choice((-1, 1)) * rnd.uniform(0.6, 1.1)
                lines.append(LineString([(x, y), (x + 2.2 * math.cos(bh), y + 2.2 * math.sin(bh)),
                                         (x + 3.6 * math.cos(bh + 0.3), y + 3.6 * math.sin(bh + 0.3))]))
        lines.append(LineString(pts))
    geom = unary_union([l.buffer(CRACK_W / 2, cap_style=1, join_style=1) for l in lines])
    geom = geom.intersection(edge.buffer(-0.6)).difference(keep_clear)
    polys = [geom] if geom.geom_type == "Polygon" else [g for g in getattr(geom, "geoms", []) if g.geom_type == "Polygon"]
    rings = []
    for g in polys:
        if g.area < 0.3: continue
        rings.append(list(g.exterior.coords)[:-1])
        rings += [list(i.coords)[:-1] for i in g.interiors]
    return CrossSection(rings, FillRule.EvenOdd) if rings else None

def token(kind, label, value, seed):
    shape = outline(kind, seed)
    body = Manifold.extrude(CrossSection([shape], FillRule.EvenOdd), T)
    letters = text(label, 3.4, 4.4) + text(value, 8.5, -3.0)
    body = body - Manifold.extrude(letters, STAMP + 0.01).translate([0, 0, T - STAMP])
    clear = unary_union([Polygon(r) for r in letters.to_polygons() if len(r) > 2]).buffer(1.0)   # keep cracks off the lettering
    c = cracks(shape, clear, seed + 7)
    if c is not None:
        body = body - Manifold.extrude(c, CRACK_D + 0.01).translate([0, 0, T - CRACK_D])
    m = body.to_mesh()
    mesh = trimesh.Trimesh(vertices=m.vert_properties[:, :3], faces=m.tri_verts, process=False)
    assert mesh.is_watertight
    return mesh

def main():
    os.makedirs(os.path.join(HERE, "stl"), exist_ok=True)
    for n, (kind, label, name) in enumerate((("circle", "ACC", "Accuracy"), ("square", "STR", "Strength"), ("hex", "TRN", "Training"))):
        for v in (1, 2):
            out = os.path.join(HERE, "stl", f"{name}_Penalty_-{v}.stl")
            mesh = token(kind, label, f"-{v}", seed=100 * n + v)
            mesh.export(out); print(out, mesh.bounds.round(1).tolist())

main()
