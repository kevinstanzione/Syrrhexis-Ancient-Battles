"""Turn Template: a 45-degree wedge with 3.5-inch arms, inch ticks, and 15/30-degree reference notches."""
import math, os
import numpy as np
from manifold3d import CrossSection, Manifold
import trimesh

IN = 25.4
ARM = 3.5 * IN      # arm length (mm)
T = 2.5             # thickness
TICK_W, TICK_L, TICK_D = 0.8, 5.0, 0.8   # engraved inch ticks
NOTCH = 2.5         # notch depth at the outer arc

def main():
    # sector polygon: apex at origin, one arm along +X, the other at 45 degrees
    pts = [(0.0, 0.0)] + [(ARM * math.cos(math.radians(a)), ARM * math.sin(math.radians(a))) for a in np.linspace(0, 45, 91)]
    body = Manifold.extrude(CrossSection([pts]), T)
    cuts = []
    # inch ticks along both straight edges, cut into the top face
    for ang in (0, 45):
        for i in (1, 2, 3):
            box = Manifold.cube([TICK_W, TICK_L, TICK_D + 0.01]).translate([-TICK_W / 2, 0 if ang == 0 else -TICK_L, T - TICK_D])
            box = box.translate([i * IN, 0, 0]).rotate([0, 0, ang]) if ang == 0 else box.translate([i * IN, 0, 0]).rotate([0, 0, ang])
            cuts.append(box)
    # V notches on the outer arc at 15 and 30 degrees
    for ang in (15, 30):
        tri = CrossSection([[(ARM - NOTCH, 0.0), (ARM + 1, -1.6), (ARM + 1, 1.6)]])
        cuts.append(Manifold.extrude(tri, T + 0.02).translate([0, 0, -0.01]).rotate([0, 0, ang]))
    for c in cuts:
        body = body - c
    m = body.to_mesh()
    mesh = trimesh.Trimesh(vertices=m.vert_properties[:, :3], faces=m.tri_verts)
    assert mesh.is_watertight
    out = os.path.join(os.path.dirname(os.path.abspath(__file__)), "stl", "Turn_Template_45deg_3.5in.stl")
    mesh.export(out)
    print(out, mesh.bounds.round(1).tolist())

main()
