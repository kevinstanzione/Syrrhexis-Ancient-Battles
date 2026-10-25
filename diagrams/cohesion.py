from style import *
PW, PH, G = 190, 170, 6
s = SVG(2 * PW + G, PH, 'Open Order Cohesion', [
    'An Open Order unit must end its activation in 1” Cohesion: every model within 1” of another model in the unit, in a chain',
    'or a cluster. Each dashed halo reaches ½” beyond its base, so models whose halos touch are within 1” of each other. On the right,', 'one model’s halo touches no other, so the unit is out of Cohesion.'])
def dim(x1, y1, x2, y2, label):
    s.add(f'<line x1="{x1:.1f}" y1="{y1:.1f}" x2="{x2:.1f}" y2="{y2:.1f}" stroke="{C["ink"]}" stroke-width="0.7"/>')
    s.text((x1 + x2) / 2, (y1 + y2) / 2 - 3, label, 5.5, C['ink'], bold=True)
chain = [(30, 70), (62, 84), (92, 66), (122, 88), (150, 72), (160, 104)]
for k in range(2):
    x0 = k * (PW + G)
    s.panel(x0, 0, PW, PH, 'In Cohesion' if k == 0 else 'Out of Cohesion')
    pts = [(x0 + x, y) for x, y in chain]
    if k == 1: pts[-1] = (x0 + 150, 142)
    for x, y in pts:
        h = 20 + IN
        s.add(f'<rect x="{x-h/2:.1f}" y="{y-h/2:.1f}" width="{h:.1f}" height="{h:.1f}" rx="12.7" fill="{C["blue"]}" fill-opacity="0.07" stroke="{C["blue"]}" stroke-width="0.5" stroke-dasharray="2 2"/>')
    for i, (x, y) in enumerate(pts):
        stray = k == 1 and i == len(pts) - 1
        s.model(x, y, 'blue', ang=0, dashed=stray)
    if k == 1:
        bx, by = pts[-1]
        s.text(bx - 31, by + 4, 'stray model', 5.5, C['red'], 'end', italic=True)
s.scale(8, PH - 12)
print(s.save('cohesion.svg'))
