"""Shared helpers for the token generators: clean lettering and STL export that survives a reload.

Two things make a token STL come out broken in a slicer even when the mesh looked fine in memory:
- Font outlines that overlap or touch at a single point (serifs drawn as separate contours). Filled with
  EvenOdd, the overlaps become slivers; touching corners become pinch points that leave non-manifold edges.
  Lettering is therefore filled NonZero and grown by a hair so touching contours fuse.
- Vertices that differ by less than STL's float32 precision. They collapse into the same point on export,
  leaving triangles with two identical corners. `finish` rounds to float32, merges, drops only those triangles and checks the result
  is still watertight after an STL round trip.
"""
import io
import numpy as np
import trimesh
from manifold3d import CrossSection, FillRule, JoinType
from matplotlib.textpath import TextPath

FUSE = 0.01   # mm added around lettering so contours that touch become one clean outline


def letters(s, font):
    """The outline of a string as a CrossSection at matplotlib's size-10 scale, overlaps and pinches fused."""
    p = TextPath((0, 0), s, size=10, prop=font)
    c = CrossSection([[tuple(pt) for pt in poly] for poly in p.to_polygons() if len(poly) > 2], FillRule.NonZero)
    return c


def fuse(c):
    return c.offset(FUSE, JoinType.Miter)


def finish(body, name="token"):
    """Manifold -> clean trimesh: float32-rounded, merged, no degenerate faces, watertight after reload."""
    m = body.to_mesh()
    v = m.vert_properties[:, :3].astype(np.float32).astype(np.float64)
    mesh = trimesh.Trimesh(vertices=v, faces=m.tri_verts, process=True)
    f = mesh.faces
    mesh.update_faces((f[:, 0] != f[:, 1]) & (f[:, 1] != f[:, 2]) & (f[:, 0] != f[:, 2]))   # only triangles whose corners merged
    mesh.remove_unreferenced_vertices()
    back = trimesh.load(io.BytesIO(mesh.export(file_type="stl")), file_type="stl")
    assert back.is_watertight and back.is_volume, f"{name}: not a clean solid after STL export"
    return mesh
