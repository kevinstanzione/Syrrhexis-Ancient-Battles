"""Initiative token: the marker for the player who won the most recent Initiative roll.

It passes to the winner each round, since the next round's Start of the Round, Reserves and Orders Phases
(and Weather cards) go by that roll. It is a larger struck medallion, so it is never confused with the
metal-coin Action tokens or the clay-tablet Penalty tokens: 36 mm across, a beaded rim, a raised
eight-pointed sun-star in the center and INITIATIVE in relief along the bottom of the rim.

Suggested colour: brass or gold filament, or bronze paint with a dark wash to pick out the relief.
"""
import math, os
from manifold3d import CrossSection, Manifold, FillRule
from matplotlib.textpath import TextPath
from matplotlib.font_manager import FontProperties
import trimesh

HERE = os.path.dirname(os.path.abspath(__file__))
FONT = FontProperties(fname=os.path.join(HERE, "..", "tools", "fonts", "Cinzel-700.ttf"))
D = 36.0          # diameter
BASE = 2.6        # disc thickness
RELIEF = 0.8      # height of the raised design
R = D / 2

def circle(r, n=180):
    return CrossSection.circle(r, n)

def glyph(ch, height):
    p = TextPath((0, 0), ch, size=10, prop=FONT)
    polys = [[tuple(pt) for pt in poly] for poly in p.to_polygons() if len(poly) > 2]
    cs = CrossSection(polys, FillRule.NonZero)   # NonZero: overlapping font contours must not cut holes
    k = height / 10 * 1.38   # Cinzel cap height is about 0.72 of the font size
    x0, y0, x1, y1 = cs.bounds()
    return cs.translate([-(x0 + x1) / 2, 0]).scale([k, k]), (x1 - x0) * k

def arched(word, radius, height, spacing=0.6):
    """Letters set along the bottom of a circle, reading left to right, tops toward the center.
    Letters are spaced along the circle through their tops (the tightest point), so they never touch."""
    glyphs = [glyph(c, height) for c in word]
    r_top = radius - height / 2
    total = sum(w for _, w in glyphs) + spacing * (len(word) - 1)
    a = math.pi * 1.5 - total / 2 / r_top
    out = CrossSection()
    for g, w in glyphs:
        a += w / 2 / r_top
        g2 = g.translate([0, -height / 2]).rotate(math.degrees(a) + 90).translate(
            [radius * math.cos(a), radius * math.sin(a)])
        out = out + g2
        a += (w / 2 + spacing) / r_top
    return out

def star(points, r_out, r_in, cy):
    pts = []
    for i in range(points * 2):
        r = r_out if i % 2 == 0 else r_in
        t = math.pi / 2 + i * math.pi / points
        pts.append((r * math.cos(t), r * math.sin(t) + cy))
    return CrossSection([pts], FillRule.EvenOdd)

def main():
    disc = Manifold.extrude(circle(R), BASE)
    rim = circle(R) - circle(R - 1.1)
    beads = CrossSection()
    for i in range(48):
        t = 2 * math.pi * i / 48
        beads = beads + CrossSection.circle(0.45, 16).translate([(R - 1.9) * math.cos(t), (R - 1.9) * math.sin(t)])
    sun = star(8, 8.2, 3.6, 2.6) + circle(2.6, 64).translate([0, 2.6])
    sun = sun - circle(1.4, 48).translate([0, 2.6])          # a sunken center, like a struck boss
    words = arched("INITIATIVE", R - 4.6, 3.0)
    relief = rim + beads + sun + words
    body = disc + Manifold.extrude(relief, RELIEF).translate([0, 0, BASE])
    m = body.to_mesh()
    mesh = trimesh.Trimesh(vertices=m.vert_properties[:, :3], faces=m.tri_verts, process=False)
    assert mesh.is_watertight
    os.makedirs(os.path.join(HERE, "stl"), exist_ok=True)
    out = os.path.join(HERE, "stl", "Initiative_Token.stl")
    mesh.export(out)
    print(out, mesh.bounds.round(1).tolist())
    return relief

if __name__ == "__main__":
    main()
