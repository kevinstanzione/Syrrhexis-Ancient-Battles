"""Corner Marker: a small 90-degree L that holds a tray's footprint while it turns About Face.

Set the marker's inside corner against one corner of the tray, lift the tray, rotate it 180 degrees,
and set it back down with the opposite corner in the marker. A rectangle turned 180 degrees about its
center lands on the same footprint, so one marker is enough.
"""
import os
from manifold3d import CrossSection, Manifold
import trimesh

ARM = 30.0   # length of each arm's inner (reference) edge, mm
BAR = 8.0    # arm width
T = 2.5      # thickness (the trays are 3.4 mm tall, so the marker sits below the tray rim)

def main():
    # Inner edges run along +X and +Y from the origin; the tray sits in the +X/+Y quadrant.
    poly = [(-BAR, -BAR), (ARM, -BAR), (ARM, 0), (0, 0), (0, ARM), (-BAR, ARM)]
    m = Manifold.extrude(CrossSection([poly]), T).to_mesh()
    mesh = trimesh.Trimesh(vertices=m.vert_properties[:, :3], faces=m.tri_verts)
    assert mesh.is_watertight
    out = os.path.join(os.path.dirname(os.path.abspath(__file__)), "stl", "Corner_Marker_90deg.stl")
    mesh.export(out); print(out, mesh.bounds.round(1).tolist())

main()
