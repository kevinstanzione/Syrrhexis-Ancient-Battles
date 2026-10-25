from style import *
PW, PH, G = 132, 190, 5
s = SVG(4 * PW + 3 * G, PH, 'Who Attacks in Melee', [
    'A Closed Order unit makes 1 attack per model in its front rank, plus 1 per model in the X ranks behind it if it fights with a',
    'Reach (X) weapon. An Open Order unit makes 1 attack per model in base contact with an enemy. Shaded models attack.'])
cases = [('Sword', 1, '5 attacks'), ('Spear, Reach (1)', 2, '10 attacks'), ('Pike, Reach (3)', 4, '20 attacks')]
for k, (t, hl, n) in enumerate(cases):
    x0 = k * (PW + G); cx = x0 + PW / 2
    s.panel(x0, 0, PW, PH, t)
    s.tray(cx, 46, 2, 5, 180, 'blue')
    s.tray(cx, 69 + 43, 4, 5, 0, 'red', hl=hl)
    s.text(cx, PH - 10, n, 7, C['red'], bold=True)
x0 = 3 * (PW + G); cx = x0 + PW / 2
s.panel(x0, 0, PW, PH, 'Open Order')
s.tray(cx, 46, 2, 5, 180, 'blue')
front = 69
for i, x in enumerate([cx - 40, cx - 20, cx + 2, cx + 24]):
    s.model(x, front + 10, 'red', ang=0, hl=True)
for x, y in [(cx - 30, 108), (cx + 4, 112), (cx + 36, 104)]:
    s.model(x, y, 'red', ang=0)
s.text(cx, PH - 10, '4 attacks', 7, C['red'], bold=True)
s.text(cx, 140, 'not in base contact', 5.5, C['red'], italic=True)
print(s.save('reach.svg'))
