from style import *
PW, PH, G = 210, 200, 6
s = SVG(2 * PW + G, PH, 'Measuring Distances', [
    'Distances are measured between the closest points of two units: the edge of a Closed Order unit’s tray, and the base of',
    'whichever Open Order model is closest. A unit is within a distance if any part of it is, and wholly within only if every part is.'])
def dim(x1, y1, x2, y2, label):
    s.add(f'<line x1="{x1:.1f}" y1="{y1:.1f}" x2="{x2:.1f}" y2="{y2:.1f}" stroke="{C["ink"]}" stroke-width="0.8"/>')
    a = math.atan2(y2 - y1, x2 - x1); nx, ny = -math.sin(a) * 3, math.cos(a) * 3
    for x, y in ((x1, y1), (x2, y2)):
        s.add(f'<line x1="{x-nx:.1f}" y1="{y-ny:.1f}" x2="{x+nx:.1f}" y2="{y+ny:.1f}" stroke="{C["ink"]}" stroke-width="0.8"/>')
    s.text((x1 + x2) / 2 + nx * 2.5, (y1 + y2) / 2 + ny * 2.5 + 2, label, 6, C['ink'], bold=True)
# panel A
s.panel(0, 0, PW, PH, 'Between units')
s.tray(62, 120, 2, 4, 0, 'red', name='Closed Order: tray edge')
mods = [(150, 60), (172, 78), (150, 98), (178, 112), (158, 132)]
for x, y in mods: s.model(x, y, 'blue', ang=-90 if (x, y) == (150, 98) else None, face=(62, 120))
s.text(165, 155, 'Open Order:', 5.5, C['blue'], italic=True); s.text(165, 162, 'closest base', 5.5, C['blue'], italic=True)
# closest point: tray right edge x=62+46=108 ; closest model (150,98): its left edge ~ x 140
tx = 62 + 43; mx = 150 - 10
dim(tx, 98, mx, 98, f'{(mx - tx) / IN:.1f}”')
# panel B
x0 = PW + G
s.panel(x0, 0, PW, PH, 'Within and wholly within')
zy = 120
s.add(f'<rect x="{x0}" y="{zy}" width="{PW}" height="{PH - zy}" fill="{C["gold"]}" fill-opacity="0.8"/>')
s.add(f'<line x1="{x0}" y1="{zy}" x2="{x0 + PW}" y2="{zy}" stroke="{C["line"]}" stroke-width="1" stroke-dasharray="4 2"/>')
s.text(x0 + PW - 6, PH - 6, 'Deployment zone', 6, C['line'], 'end', italic=True)
s.tray(x0 + 45, 155, 2, 3, 0, 'red', name=None); s.text(x0 + 45, 188, 'Wholly within', 5.5, C['red'], bold=True)
s.tray(x0 + 115, zy + 2, 2, 3, 0, 'red'); s.text(x0 + 115, zy + 34, 'Within', 5.5, C['red'], bold=True)
s.tray(x0 + 170, 70, 2, 2, 0, 'red'); s.text(x0 + 170, 102, 'Not within', 5.5, C['red'], bold=True)
s.scale(8, PH - 12)
print(s.save('measuring.svg'))
