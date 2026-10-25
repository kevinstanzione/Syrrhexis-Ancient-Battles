"""Turn Template: two 3.5-inch arms meeting at 135 degrees, with inch ticks along the inner edges.

Put the template's corner at a front corner of a tray, with the tray's front edge flush against one arm.
The tray turns backwards around that corner; after a full 45-degree turn its flank is flush with the other arm.
"""
import math, os
from manifold3d import CrossSection, Manifold
import trimesh

IN = 25.4
ARM = 3.5 * IN      # length of each arm's inner (reference) edge
BAR = 10.0          # arm width
T = 2.5             # thickness
TICK_W, TICK_L, TICK_D = 0.8, 4.0, 0.8

def prism(poly, h, z=0.0):
    cs = CrossSection([poly])
    if cs.area() == 0: cs = CrossSection([poly[::-1]])
    return Manifold.extrude(cs, h).translate([0, 0, z])

def main():
    a = math.radians(135)
    uA, nA = (1.0, 0.0), (0.0, -1.0)                       # arm A along +X; the tray sits on the +Y side
    uB = (math.cos(a), math.sin(a)); nB = (-uB[1], uB[0])  # arm B at 135 degrees; nB points away from the tray
    def arm(u, n):
        return [(0, 0), (ARM * u[0], ARM * u[1]), (ARM * u[0] + BAR * n[0], ARM * u[1] + BAR * n[1]), (BAR * n[0], BAR * n[1])]
    body = prism(arm(uA, nA), T) + prism(arm(uB, nB), T) + prism([(0, 0), (BAR * nA[0], BAR * nA[1]), (BAR * nB[0], BAR * nB[1])], T)
    for u, n in ((uA, nA), (uB, nB)):
        for i in (1, 2, 3):
            cx, cy = i * IN * u[0], i * IN * u[1]; hw = TICK_W / 2
            p = [(cx - hw * u[0], cy - hw * u[1]), (cx + hw * u[0], cy + hw * u[1]),
                 (cx + hw * u[0] + TICK_L * n[0], cy + hw * u[1] + TICK_L * n[1]), (cx - hw * u[0] + TICK_L * n[0], cy - hw * u[1] + TICK_L * n[1])]
            body = body - prism(p, TICK_D + 0.01, T - TICK_D)
    m = body.to_mesh()
    mesh = trimesh.Trimesh(vertices=m.vert_properties[:, :3], faces=m.tri_verts)
    assert mesh.is_watertight
    out = os.path.join(os.path.dirname(os.path.abspath(__file__)), "stl", "Turn_Template_135deg_3.5in.stl")
    mesh.export(out); print(out, mesh.bounds.round(1).tolist())

main()
