"""Play tokens: Action, Order, Pass, Break, Furor and Pardon tokens.

Each family has its own shape and finish, so the tokens still read at a glance in a single-colour print
and never get mixed up with the clay Penalty tablets or the Initiative medallion:

- Action tokens (Run, Charge, Hold, Flee): struck metal coins, 30 mm, a plain raised rim, an icon and the word
  in relief.
- Order tokens (1 to 12) and Pass tokens: octagonal bone tesserae, 24 mm across the flats, the number or PASS
  cut into the face inside a ring. The back is plain, so face-down Order and Pass tokens all look alike.
  6 and 9 are underlined.
- Break tokens: broken pottery shards with a jagged edge, BREAK stamped into the face.
- Furor tokens (European Barbarians): a small oval Celtic shield with a spine and boss in relief and FUROR below.
  The back is cut with SPENT / -1 TRN, for the flipped token.
- Pardon tokens (Qin China): a bamboo slip with two binding grooves and PARDON cut down its length.

Suggested colours: Action coins bronze or brass; Order and Pass tokens bone or ivory (a different colour for
each player's set); Break shards black, letters filled terracotta or bone; Furor bronze; Pardon bamboo tan
with the letters in a dark ink wash.

To regenerate: pip install trimesh manifold3d matplotlib shapely, then python tokens/make_play_tokens.py
(--preview also writes play_tokens_preview.png). Lettering is Cinzel Bold from tools/fonts.
"""
import math, os, random, sys
from manifold3d import CrossSection, Manifold, FillRule
from matplotlib.textpath import TextPath
from matplotlib.font_manager import FontProperties
from shapely.geometry import LineString, Polygon, Point
from shapely.ops import unary_union
from shapely import affinity
import trimesh

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, "stl")
FONT = FontProperties(fname=os.path.join(HERE, "..", "tools", "fonts", "Cinzel-700.ttf"))
ORDER_MAX = 12      # Order tokens 1..ORDER_MAX


# ---------- helpers ----------
def text(s, height, maxw=None, cx=0.0, cy=0.0):
    """Straight text centered on (cx, cy): `height` is the height of the whole string, shrunk to fit maxw."""
    p = TextPath((0, 0), s, size=10, prop=FONT)
    cs = CrossSection([[tuple(pt) for pt in poly] for poly in p.to_polygons() if len(poly) > 2], FillRule.EvenOdd)
    x0, y0, x1, y1 = cs.bounds()
    k = height / (y1 - y0)
    if maxw and (x1 - x0) * k > maxw:
        k = maxw / (x1 - x0)
    return cs.translate([-(x0 + x1) / 2, -(y0 + y1) / 2]).scale([k, k]).translate([cx, cy])

def cs(geom):
    """shapely (Multi)Polygon -> CrossSection."""
    polys = [geom] if geom.geom_type == "Polygon" else [g for g in geom.geoms if g.geom_type == "Polygon"]
    rings = []
    for g in polys:
        rings.append(list(g.exterior.coords)[:-1])
        rings += [list(i.coords)[:-1] for i in g.interiors]
    return CrossSection(rings, FillRule.EvenOdd)

def shp(c):
    """CrossSection -> shapely, for keep-clear areas."""
    return unary_union([Polygon(r).buffer(0) for r in c.to_polygons() if len(r) > 2])

def ellipse(rx, ry, cx=0.0, cy=0.0, n=160):
    return CrossSection([[(cx + rx * math.cos(2 * math.pi * i / n), cy + ry * math.sin(2 * math.pi * i / n)) for i in range(n)]], FillRule.EvenOdd)

def cut_top(body, c, depth, top):
    return body - Manifold.extrude(c, depth + 0.01).translate([0, 0, top - depth])

def cut_bottom(body, c, depth):
    """Cut into the bed side. Mirrored, so it reads the right way round once the token is flipped over."""
    return body - Manifold.extrude(c.scale([-1, 1]), depth + 0.01).translate([0, 0, -0.01])

def save(body, name):
    m = body.to_mesh()
    mesh = trimesh.Trimesh(vertices=m.vert_properties[:, :3], faces=m.tri_verts, process=False)
    assert mesh.is_watertight, name
    path = os.path.join(OUT, name + ".stl")
    mesh.export(path)
    print(path, mesh.bounds.round(1).tolist())
    return mesh


# ---------- Action tokens: struck coins ----------
COIN_R, COIN_BASE, COIN_RELIEF = 15.0, 2.4, 0.8

def chevrons(up, cy):
    s = 1 if up else -1
    lines = [LineString([(-4.4, y - s * 2.2), (0, y + s * 2.2), (4.4, y - s * 2.2)]) for y in (cy + 2.6, cy - 2.0)]
    return unary_union([l.buffer(0.8, cap_style=2, join_style=2) for l in lines])

def spearhead(cy):
    leaf = Polygon([(0, cy + 6.6), (1.3, cy + 4.4), (2.5, cy + 1.6), (2.2, cy + 0.2), (0.9, cy - 1.2),
                    (-0.9, cy - 1.2), (-2.2, cy + 0.2), (-2.5, cy + 1.6), (-1.3, cy + 4.4)])
    socket = Polygon([(-0.9, cy - 1.0), (0.9, cy - 1.0), (0.7, cy - 5.4), (-0.7, cy - 5.4)])
    return unary_union([leaf, socket]).buffer(0.15)

def shield(cy):
    return unary_union([Point(0, cy).buffer(5.3).difference(Point(0, cy).buffer(4.1)), Point(0, cy).buffer(1.9)])

ICONS = {"Run": lambda cy: chevrons(True, cy), "Charge": spearhead, "Hold": shield, "Flee": lambda cy: chevrons(False, cy)}

def action_coin(word):
    disc = Manifold.extrude(CrossSection.circle(COIN_R, 180), COIN_BASE)
    rim = CrossSection.circle(COIN_R, 180) - CrossSection.circle(COIN_R - 1.2, 180)
    relief = rim + cs(ICONS[word](3.2)) + text(word.upper(), 3.2, maxw=16.5, cy=-8.0)
    return disc + Manifold.extrude(relief, COIN_RELIEF).translate([0, 0, COIN_BASE])


# ---------- Order and Pass tokens: octagonal bone tesserae ----------
TESS_FLATS, TESS_T, TESS_CUT = 24.0, 3.0, 0.8

def octagon():
    r = TESS_FLATS / 2 / math.cos(math.pi / 8)
    poly = Polygon([(r * math.cos(math.pi / 8 + i * math.pi / 4), r * math.sin(math.pi / 8 + i * math.pi / 4)) for i in range(8)])
    return poly.buffer(-1.0).buffer(1.0, resolution=8)

def tessera(face):
    body = Manifold.extrude(cs(octagon()), TESS_T)
    ring = CrossSection.circle(10.3, 160) - CrossSection.circle(9.7, 160)
    return cut_top(body, ring + face, TESS_CUT, TESS_T)

def order_token(n):
    face = text(str(n), 10.5, maxw=14.5, cy=0.9)
    if n in (6, 9):
        face = face + CrossSection.square([5.0, 0.9]).translate([-2.5, -6.1])
    return tessera(face)

def pass_token():
    return tessera(text("PASS", 4.6, maxw=14.0))


# ---------- Break tokens: pottery shards ----------
CLAY_T, CLAY_CUT, CRACK_D, CRACK_W = 3.0, 0.7, 0.45, 0.4

def jagged(a, b, rnd, parts=7, amp=0.8):
    pts = []
    for i in range(parts):
        t = i / parts
        x, y = a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t
        if i:
            nx, ny = -(b[1] - a[1]), b[0] - a[0]
            L = math.hypot(nx, ny)
            off = rnd.uniform(-amp, amp)
            x, y = x + nx / L * off, y + ny / L * off
        pts.append((x, y))
    return pts

def shard_outline(seed):
    rnd = random.Random(seed)
    arc = [(12.5 * math.cos(t), 12.5 * math.sin(t) - 3.2) for t in (math.radians(a) for a in range(150, 29, -6))]   # the pot's rim
    right, left = arc[-1], arc[0]
    low_r, low_l = (7.0, -8.5), (-5.5, -10.0)
    pts = arc + jagged(right, low_r, rnd, 5)[1:] + jagged(low_r, low_l, rnd, 5) + jagged(low_l, left, rnd, 5)
    return Polygon(pts).buffer(0.25, resolution=4).buffer(-0.25, resolution=4)

def shard_cracks(edge, clear, rnd):
    lines = []
    for _ in range(2):
        x, y = rnd.uniform(-4, 5), -11.0
        h = math.pi / 2 + rnd.uniform(-0.5, 0.5)
        pts = [(x, y)]
        for _ in range(rnd.randint(5, 7)):
            h += rnd.uniform(-0.5, 0.5)
            x += 1.3 * math.cos(h); y += 1.3 * math.sin(h)
            pts.append((x, y))
        lines.append(LineString(pts))
    g = unary_union([l.buffer(CRACK_W / 2, cap_style=1) for l in lines]).intersection(edge.buffer(-0.6)).difference(clear)
    return g if not g.is_empty else None

def break_token(seed=7):
    rnd = random.Random(seed)
    edge = shard_outline(seed)
    body = Manifold.extrude(cs(edge), CLAY_T)
    word = text("BREAK", 3.8, maxw=15.0, cx=0.3, cy=2.6)
    body = cut_top(body, word, CLAY_CUT, CLAY_T)
    c = shard_cracks(edge, shp(word).buffer(1.0), rnd)
    if c is not None:
        body = cut_top(body, cs(c), CRACK_D, CLAY_T)
    return body


# ---------- Furor token: Celtic shield ----------
FUR_RX, FUR_RY, FUR_BASE, FUR_RELIEF = 11.0, 15.0, 2.4, 0.8

def furor_token():
    body = Manifold.extrude(ellipse(FUR_RX, FUR_RY), FUR_BASE)
    rim = ellipse(FUR_RX, FUR_RY) - ellipse(FUR_RX - 1.2, FUR_RY - 1.2)
    boss = ellipse(2.4, 3.8, cy=3.6)
    spine = CrossSection.square([1.2, 6.8]).translate([-0.6, 7.2]) + CrossSection.square([1.2, 3.4]).translate([-0.6, -3.4])
    relief = rim + boss + spine + text("FUROR", 3.0, maxw=12.5, cy=-8.2)
    body = body + Manifold.extrude(relief, FUR_RELIEF).translate([0, 0, FUR_BASE])
    back = text("SPENT", 3.0, maxw=13.0, cy=3.0) + text("-1 TRN", 3.6, maxw=14.0, cy=-3.6)
    return cut_bottom(body, back, 0.6)


# ---------- Pardon token: bamboo slip ----------
SLIP_W, SLIP_L, SLIP_T, SLIP_CUT = 11.0, 36.0, 3.0, 0.7

def pardon_token():
    slip = Polygon([(-SLIP_W / 2, -SLIP_L / 2), (SLIP_W / 2, -SLIP_L / 2), (SLIP_W / 2, SLIP_L / 2), (-SLIP_W / 2, SLIP_L / 2)])
    slip = slip.buffer(-1.5).buffer(1.5, resolution=8)
    body = Manifold.extrude(cs(slip), SLIP_T)
    cords = CrossSection()
    for y in (-14.6, 14.6):
        cords = cords + CrossSection.square([SLIP_W + 2, 0.8]).translate([-SLIP_W / 2 - 1, y - 0.4])
    word = text("PARDON", 5.0, maxw=23.0).rotate(-90)
    return cut_top(body, cords + word, SLIP_CUT, SLIP_T)


# ---------- preview ----------
def preview(meshes, path):
    import matplotlib
    matplotlib.use("Agg")
    import matplotlib.pyplot as plt
    from matplotlib.collections import PolyCollection
    import numpy as np
    cols = 6
    rows = math.ceil(len(meshes) / cols)
    fig, axes = plt.subplots(rows, cols, figsize=(cols * 2.2, rows * 2.4))
    for ax in axes.flat:
        ax.axis("off")
    for ax, (label, mesh) in zip(axes.flat, meshes):
        v, f = mesh.vertices, mesh.faces
        n = mesh.face_normals
        keep = n[:, 2] > 0.5                        # faces seen from above
        z = v[f].mean(axis=1)[:, 2]
        order = np.argsort(z[keep])
        tris = v[f[keep]][order][:, :, :2]
        zz = z[keep][order]
        shade = (zz - zz.min()) / max(1e-6, zz.max() - zz.min())
        ax.add_collection(PolyCollection(tris, facecolors=plt.cm.copper(0.25 + 0.7 * shade), edgecolors="none"))
        ax.set_xlim(-19, 19); ax.set_ylim(-19, 19); ax.set_aspect("equal")
        ax.set_title(label, fontsize=8)
    fig.tight_layout()
    fig.savefig(path, dpi=140)

def flipped(mesh):
    m = mesh.copy()
    m.apply_transform(trimesh.transformations.rotation_matrix(math.pi, [0, 1, 0]))
    return m

def main():
    os.makedirs(OUT, exist_ok=True)
    shown = []
    for w in ("Run", "Charge", "Hold", "Flee"):
        shown.append((f"Action: {w}", save(action_coin(w), f"Action_{w}")))
    for n in range(1, ORDER_MAX + 1):
        m = save(order_token(n), f"Order_{n:02d}")
        if n in (1, 6, 9, 12):
            shown.append((f"Order {n}", m))
    shown.append(("Pass", save(pass_token(), "Pass_Token")))
    shown.append(("Break", save(break_token(), "Break_Token")))
    fur = save(furor_token(), "Furor_Token")
    shown += [("Furor (face up)", fur), ("Furor (flipped)", flipped(fur))]
    pardon = save(pardon_token(), "Pardon_Token")
    shown.append(("Pardon", pardon))
    if "--preview" in sys.argv:
        preview(shown, os.path.join(HERE, "play_tokens_preview.png"))

if __name__ == "__main__":
    main()
