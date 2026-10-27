from style import *
PW, PH, G = 200, 170, 6
s = SVG(2 * PW + G, PH, 'The Musician’s Special Move', [
    'At the end of its Movement Step, a unit with a Musician that has no Action Token and is not Locked in Combat may make a Special',
    'Move. A Closed Order unit shifts 1” straight forward, back, left or right without changing facing, or turns once. An Open Order',
    'unit moves 1” by the quickest route toward or away from the enemy side of the board. It may not begin or end within 1” of an enemy.'])
s.panel(0, 0, PW, PH, 'Closed Order: shift 1” or turn once')
cx, cy = 100, 98
s.tray(cx, cy - IN, 2, 4, 0, 'blue', outline=True)
s.tray(cx, cy, 2, 4, 0, 'blue')
for dx, dy, lab in [(0, -1, 'forward'), (0, 1, 'back'), (-1, 0, 'left'), (1, 0, 'right')]:
    x2, y2 = cx + dx * (46 + IN), cy + dy * (26 + IN)
    s.arrow(cx + dx * 46, cy + dy * 26, x2, y2, C['blue'], w=1)
    s.text(x2 + dx * 10, y2 + dy * 8 + (2 if dy == 0 else 0), lab, 5.5, C['blue'], italic=True)
s.text(cx + 58, cy - 34, 'each arrow 1”', 5, C['ink'], 'start', italic=True)
s.scale(8, PH - 10)
ox = PW + G
s.panel(ox, 0, PW, PH, 'Open Order: 1” toward or away')
s.text(ox + PW / 2, 26, 'enemy side of the board', 5.5, C['red'], italic=True)
s.add(f'<line x1="{ox+10}" y1="30" x2="{ox+PW-10}" y2="30" stroke="{C["red"]}" stroke-width="1.6"/>')
pts = [(-30, 0), (-10, -6), (10, 2), (30, -4), (0, 20), (20, 22)]
for px, py in pts:
    s.model(ox + 100 + px, 100 + py, 'blue', ghost=True)
    s.model(ox + 100 + px, 100 + py - IN, 'blue', ang=0)
s.arrow(ox + 165, 110, ox + 165, 110 - IN, C['blue'], w=1)
s.text(ox + 172, 100, '1”', 6, C['blue'], 'start', bold=True)
print(s.save('musician.svg'))
