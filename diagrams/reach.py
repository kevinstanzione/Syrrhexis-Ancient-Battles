from style import *
PW, PH, G = 132, 190, 5
s = SVG(4 * PW + 3 * G, PH, 'Who Attacks in Melee', [
    'A Closed Order unit makes 1 attack per model in its front rank, plus 1 per model in the X ranks behind it if it fights with a',
    'Reach (X) weapon (shaded models). Collision: each rank that is not attacking adds 1 bonus Hit (marked +1), unless the unit is',
    'engaged on a flank or rear side. An Open Order unit makes 1 attack per model in base contact and gets no Collision bonus.'])
cases = [('Sword', 1, '5 attacks + 3 Hits'), ('Spear, Reach (1)', 2, '10 attacks + 2 Hits'), ('Pike, Reach (2)', 3, '15 attacks + 1 Hit')]
for k, (t, hl, n) in enumerate(cases):
    x0 = k * (PW + G); cx = x0 + PW / 2
    s.panel(x0, 0, PW, PH, t)
    s.tray(cx, 46, 2, 5, 180, 'blue')
    s.tray(cx, 69 + 43, 4, 5, 0, 'red', hl=hl)
    for r in range(hl, 4):
        s.text(cx + 53 + 7, 69 + B + r * 20 + 12, '+1', 6, C['red'], bold=True)
    s.text(cx, PH - 10, n, 6.5, C['red'], bold=True)
x0 = 3 * (PW + G); cx = x0 + PW / 2
s.panel(x0, 0, PW, PH, 'Open Order')
s.tray(cx, 46, 2, 5, 180, 'blue')
front = 69
for i, x in enumerate([cx - 40, cx - 20, cx + 2, cx + 24]):
    s.model(x, front + 10, 'red', ang=0, hl=True)
for x, y in [(cx - 30, 108), (cx + 4, 112), (cx + 36, 104)]:
    s.model(x, y, 'red', ang=0)
s.text(cx, PH - 10, '4 attacks', 6.5, C['red'], bold=True)
s.text(cx, 140, 'not in base contact', 5.5, C['red'], italic=True)
print(s.save('reach.svg'))
