from style import *
W, H = 300, 200
s = SVG(W, H, 'Firing Angle', [
    'A Closed Order unit may only shoot at an enemy unit that is at least partly within its firing arc: the area in front of its',
    'tray between two lines running out at 45° from its front corners. Targets A and C are in the arc; Target B is level with the',
    'unit’s flank, so the unit must turn to shoot it. Firing Angle never gives Cover: Target C, just 1” away with nothing between',
    'them, has No Cover.'])
s.panel(0, 0, W, H)
cx, cy = 110, 150
w, d = 4 * 20 + 2 * B, 2 * 20 + 2 * B
fy = cy - d / 2
L = 200
pts = [(cx - w / 2, fy), (cx - w / 2 - L, fy - L), (cx + w / 2 + L, fy - L), (cx + w / 2, fy)]
s.add(f'<clipPath id="pan"><rect x="0" y="0" width="{W}" height="{H}"/></clipPath>')
s.add(f'<polygon clip-path="url(#pan)" points="{" ".join(f"{x:.1f},{y:.1f}" for x, y in pts)}" fill="{C["blue"]}" fill-opacity="0.10" stroke="{C["blue"]}" stroke-width="0.7" stroke-dasharray="3 2"/>')
s.tray(cx, cy, 2, 4, 0, 'blue', name='Archers')
s.text(30, 112, 'firing arc', 5.5, C['blue'], italic=True, rot=-45)
s.tray(200, 45, 2, 3, 200, 'red'); s.text(262, 35, 'Target A', 6, C['red'], bold=True); s.text(262, 42, 'in the arc', 5.5, C['red'], italic=True)
s.tray(cx - 8, fy - IN - 23, 2, 4, 180, 'red'); s.text(cx - 8, fy - IN - 58, 'Target C', 6, C['red'], bold=True); s.text(cx - 8, fy - IN - 51, '1” away: No Cover', 5.5, C['red'], italic=True)
s.tray(258, 150, 2, 2, 270, 'red'); s.text(258, 112, 'Target B', 6, C['red'], bold=True); s.text(258, 119, 'outside the arc', 5.5, C['red'], italic=True)
s.add(f'<rect x="0.4" y="0.4" width="{W-0.8}" height="{H-0.8}" fill="none" stroke="{C["line"]}" stroke-width="0.8"/>')
s.scale(8, H - 12)
print(s.save('firing_angle.svg'))
