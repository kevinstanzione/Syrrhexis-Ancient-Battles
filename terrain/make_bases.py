"""Generate printable bases for small Command-card terrain features (Syrrhēxis).

Each base is a flat plate cut exactly to the footprint on its card, with a chamfered top edge,
for gluing a model (e.g. a Meshy print) on top. Large terrain and Major Terrain use felt and
get no base. Run from the repo root:  python3 terrain/make_bases.py
"""
import os
import numpy as np
import trimesh

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, "stl")
IN = 25.4

THICK = 3.0      # plate thickness (mm)
CHAMFER = 1.2    # top-edge chamfer, inside the footprint (mm)

# (file name, card, width mm, depth mm, shape, how many to print, note)
BASES = [
    ("Monument_2x2in", "Monument", 2 * IN, 2 * IN, "rect", 1, "2” x 2” impassable feature"),
    ("Watchtower_3x3in", "Watchtower", 3 * IN, 3 * IN, "rect", 1, "3” x 3” impassable feature"),
    ("Wall_8x0.5in", "Field Wall / Phocian Wall / Muriq-Tidnim", 8 * IN, 0.5 * IN, "rect", 1, "full 8” length; needs a 205 mm print bed"),
    ("Wall_4x0.5in_half", "Field Wall / Phocian Wall / Muriq-Tidnim", 4 * IN, 0.5 * IN, "rect", 2, "print 2 and butt them together for a shorter bed"),
    ("Wagon_40x60mm", "Rolling Wagons", 40, 60, "rect", 3, "one per wagon marker"),
    ("Pig_25mm", "Flaming Pigs", 25, 25, "round", 2, "one per pig marker"),
]


def plate(w, d, shape):
    """Flat plate w x d with a chamfered top edge; the footprint is exactly w x d."""
    c = min(CHAMFER, w / 4, d / 4)
    if shape == "round":
        t = np.linspace(0, 2 * np.pi, 96, endpoint=False)
        ring = lambda r, z: np.c_[r * np.cos(t), r * np.sin(t), np.full_like(t, z)]
        pts = np.vstack([ring(w / 2, 0), ring(w / 2, THICK - c), ring(w / 2 - c, THICK)])
    else:
        rect = lambda a, b, z: np.array([[-a, -b, z], [a, -b, z], [a, b, z], [-a, b, z]])
        pts = np.vstack([rect(w / 2, d / 2, 0), rect(w / 2, d / 2, THICK - c), rect(w / 2 - c, d / 2 - c, THICK)])
    m = trimesh.convex.convex_hull(pts)
    m.apply_translation([0, 0, 0])
    return m


def main():
    os.makedirs(OUT, exist_ok=True)
    rows = []
    for fname, card, w, d, shape, n, note in BASES:
        m = plate(w, d, shape)
        assert m.is_watertight
        path = os.path.join(OUT, fname + ".stl")
        m.export(path)
        ex = m.bounding_box.extents
        rows.append(f"| [{fname}.stl](stl/{fname}.stl) | {card} | {ex[0]:.1f} x {ex[1]:.1f} x {ex[2]:.1f} | {n} | {note} |")
        print(fname, f"{ex[0]:.1f}x{ex[1]:.1f}x{ex[2]:.1f}")
    readme = f"""# Terrain bases

Printable bases for the small terrain features placed by Command cards. Each is cut to the exact footprint on its card, {THICK:g} mm thick with a {CHAMFER:g} mm chamfered top edge, so a model can be glued on top and the piece still measures true. Large terrain (Dense Brush, Crumbled Ruins, Flooded Field and so on) and Major Terrain use felt, so they have no bases.

Regenerate with `python3 terrain/make_bases.py` (needs `trimesh`).

| File | Card | Size (mm) | Print | Notes |
|---|---|---|---|---|
""" + "\n".join(rows) + """

Tips:
- Print flat, chamfer up. No supports needed.
- Glue the model (for example a Meshy print scaled to fit) on top; texture or flock the exposed top surface.
- A model may overhang the base slightly, but the base is what counts on the table: measure from its edge.
"""
    open(os.path.join(HERE, "README.md"), "w", encoding="utf-8").write(readme)


if __name__ == "__main__":
    main()
