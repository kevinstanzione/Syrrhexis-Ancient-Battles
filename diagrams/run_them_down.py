from board import *
k = 0.36
PW, PH, G = 160, 190, 6
s = SVG(3 * PW + 2 * G, PH, 'Run Them Down', [
    'The first time a unit with Run Them Down charges or is charged, at the end of that Combat Phase it splits up: every model becomes its',
    'own Open Order unit. From then on, each one must declare a Charge against the closest enemy unit it can see at the start of its',
    'activation, or Run toward it if it cannot reach. They cannot Hold, Flee or Rally. Elephants target the closest unit, friend or foe.'])
def mm(v): return v * k
def chariot(x, y, ang=0, ghost=False):
    w, d = mm(40), mm(60)
    op = ' opacity="0.35" stroke-dasharray="2 1.5"' if ghost else ''
    s.add(f'<g transform="translate({x:.1f},{y:.1f}) rotate({ang:.1f})"><rect x="{-w/2:.1f}" y="{-d/2:.1f}" width="{w:.1f}" height="{d:.1f}" rx="1" fill="{C["redl"]}" stroke="{C["red"]}" stroke-width="0.8"{op}/>'
          + ('' if ghost else f'<line x1="{-w/2:.1f}" y1="{-d/2:.1f}" x2="{w/2:.1f}" y2="{-d/2:.1f}" stroke="{C["red"]}" stroke-width="1.6"/>') + '</g>')
titles = ['1. The unit charges', '2. End of Combat Phase: it splits', '3. Each charges the closest enemy']
for p, t in enumerate(titles):
    ox = p * (PW + G); cx = ox + PW / 2
    s.panel(ox, 0, PW, PH, t)
    mini_tray(s, cx, 50, 3, 5, 180, 'blue', k=k)
    if p == 0:
        for i in (-1, 0, 1): chariot(cx + i * mm(42), 50 + mm(33) + mm(30) + 1)
        s.text(cx, 110, 'one Chariot unit (3 models)', 5.2, C['red'], italic=True)
    elif p == 1:
        for i in (-1, 0, 1): chariot(cx + i * mm(58), 50 + mm(33) + mm(30) + 1)
        s.text(cx, 110, 'three separate Open Order units', 5.2, C['red'], italic=True)
    else:
        mini_tray(s, ox + 26, 150, 2, 3, 90, 'blue', k=k)
        mini_tray(s, ox + PW - 26, 140, 2, 3, -90, 'blue', k=k)
        chariot(cx - mm(58), 112, ghost=True); chariot(cx, 112, ghost=True); chariot(cx + mm(58), 112, ghost=True)
        chariot(ox + 26 + mm(23) + mm(30) + 2, 150, -90)
        chariot(ox + PW - 26 - mm(23) - mm(30) - 2, 140, 90)
        chariot(cx, 50 + mm(33) + mm(30) + 1)
        s.arrow(cx - mm(58) - 4, 118, ox + 26 + mm(23) + 14, 150, C['red'], w=0.9)
        s.arrow(cx + mm(58) + 4, 118, ox + PW - 26 - mm(23) - 14, 140, C['red'], w=0.9)
        s.text(cx, 180, 'each picks the closest enemy it can see', 5.2, C['red'], italic=True)
print(s.save('run_them_down.svg'))
