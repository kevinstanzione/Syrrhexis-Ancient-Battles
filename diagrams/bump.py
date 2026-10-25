from style import *
PW, PH, G = 200, 270, 6
s = SVG(2 * PW + G, PH, 'The Path and Bumping', [
    'Before: the shaded band is the path, the area the attacking tray sweeps as it moves directly forward. One enemy',
    'Open Order unit is in it, and the attacker (Unit Strength 8) has at least its Unit Strength (6), so it is Bumped.',
    'After: the skirmishers only clear the attacker’s final position. They step back into the ground the attacker',
    'crossed, keeping Cohesion, and the Charge succeeds.'])
for k, title in enumerate(['Before', 'After']):
    x0 = k * (PW + G); cx = x0 + PW / 2
    s.panel(x0, 0, PW, PH, title)
    by = 52; bfront = by + 33
    s.tray(cx, by, 3, 5, 180, 'blue', name=None)
    s.text(cx, 14, 'Defender', 6, C['blue'], bold=True)
    ry = 232; rfront = ry - 23
    old = [(cx - 55 + i * 22, 150 + (6 if i % 2 else -4)) for i in range(6)]
    if title == 'Before':
        s.add(f'<rect x="{cx-43}" y="{bfront}" width="86" height="{rfront-bfront}" fill="{C["red"]}" fill-opacity="0.12" stroke="{C["red"]}" stroke-width="0.7" stroke-dasharray="3 2"/>')
        s.text(cx + 34, bfront + 12, 'path', 6, C['red'], italic=True)
        s.tray(cx, ry, 2, 4, 0, 'red')
        s.text(cx, PH - 6, 'Attacker charges', 6, C['red'], bold=True)
        for x, y in old: s.model(x, y, 'blue', ang=180)
        s.text(cx + 78, 133, 'Skirmishers', 5.5, C['blue'], 'end', italic=True)
    else:
        s.tray(cx, ry, 2, 4, 0, 'red', ghost=True)
        s.tray(cx, bfront + 23, 2, 4, 0, 'red')
        new = [(cx - 55, 172), (cx - 33, 182), (cx - 11, 176), (cx + 11, 182), (cx + 33, 176), (cx + 55, 172)]
        for (x, y), (nx, ny) in zip(old, new):
            s.model(x, y, 'blue', ang=180, ghost=True)
            if abs(ny - y) > 6: s.arrow(x, y + 9, nx, ny - 10, C['blue'], w=0.8)
            s.model(nx, ny, 'blue', ang=180)
        s.text(cx, PH - 6, 'Charge succeeds', 6, C['red'], bold=True)
s.scale(3, 240)
print(s.save('bump.svg'))
