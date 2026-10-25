from style import *
W, H = 300, 200
s = SVG(W, H, 'Firing Angle', [
    'Each model in a Closed Order unit can only draw Line of Sight within a 90° arc out of the front edge of its base. The shaded',
    'arcs show the two end models of the front rank. Target A is inside the unit’s arcs and can be shot. Target B is level with',
    'the unit’s flank and outside every model’s arc, so the unit must turn to shoot at it.'])
s.panel(0, 0, W, H)
cx, cy = 110, 150
w, d = 4 * 20 + 2 * B, 2 * 20 + 2 * B
fy = cy - d / 2 + B  # front of front-rank bases
L = 170
for fx in (cx - w / 2 + B, cx + w / 2 - B):  # outer front corners of the end models
    bx0 = fx if fx < cx else fx - 20; bx1 = bx0 + 20
    pts = [(bx0, fy), (bx0 - L, fy - L), (bx1 + L, fy - L), (bx1, fy)]
    s.add(f'<polygon points="{" ".join(f"{x:.1f},{y:.1f}" for x, y in pts)}" fill="{C["blue"]}" fill-opacity="0.10" stroke="{C["blue"]}" stroke-width="0.6" stroke-dasharray="3 2"/>')
s.add(f'<rect x="0" y="{H}" width="{W}" height="40" fill="#fff"/>')
s.tray(cx, cy, 2, 4, 0, 'blue', name='Archers')
s.text(cx - w / 2 + B + 10, fy - 26, '90°', 5.5, C['blue'], italic=True)
s.tray(190, 50, 2, 3, 200, 'red'); s.text(272, 40, 'Target A', 6, C['red'], bold=True); s.text(272, 47, 'inside the arcs', 5.5, C['red'], italic=True)
s.tray(255, 150, 2, 2, 270, 'red'); s.text(255, 112, 'Target B', 6, C['red'], bold=True); s.text(255, 119, 'outside every arc', 5.5, C['red'], italic=True)
s.add(f'<rect x="0.4" y="0.4" width="{W-0.8}" height="{H-0.8}" fill="none" stroke="{C["line"]}" stroke-width="0.8"/>')
s.scale(8, H - 12)
print(s.save('firing_angle.svg'))
