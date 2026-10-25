from style import *
PW, PH, G = 210, 230, 6
s = SVG(2 * PW + G, PH, 'Pile In with Open Order Units', [
    'Open Order models pile in and Closed Order trays stay put. Each model moves up to twice its Move to get into base contact,',
    'and against a Closed Order unit it may only touch one side of it. Left: Open Order attackers pile in along the Destination',
    'edge they charged, after the Leader’s charge move. Right: the attacker charged the Focus of the Charge (marked with a dot), which stays put; the rest of the defending unit, which started in Cohesion around it, piles in along the attacker’s front edge. A model with no room gets as close as it can. Faded bases are start positions.'])
# left: open attacker (red) vs closed defender (blue)
s.panel(0, 0, PW, PH, 'Open Order attacker')
cx = PW / 2; s.tray(cx, 60, 3, 5, 180, 'blue', name=None)
edge = 60 + 33
starts = [(cx - 8, edge + 10), (cx - 50, 160), (cx - 26, 190), (cx + 14, 195), (cx + 40, 165), (cx + 66, 185)]
ends = [(cx - 8, edge + 10), (cx - 52, edge + 10), (cx - 30, edge + 10), (cx + 14, edge + 10), (cx + 36, edge + 10), (cx + 62, edge + 16)]
for i, ((sx, sy), (ex, ey)) in enumerate(zip(starts, ends)):
    if i:
        s.model(sx, sy, 'red', ang=0, ghost=True); s.arrow(sx, sy - 11, ex, ey + 12, C['red'], w=0.8)
    s.model(ex, ey, 'red', ang=0)
s.text(cx, 18, 'Defender (Closed Order)', 6, C['blue'], bold=True)
s.text(cx - 8, edge + 28, 'Leader', 5, C['red'], italic=True)
# right: closed attacker (red) vs open defender (blue)
x0 = PW + G; cx = x0 + PW / 2
s.panel(x0, 0, PW, PH, 'Open Order defender')
s.tray(cx, 190, 2, 4, 0, 'red')
front = 190 - 23
starts = [(cx + 8, front - 10), (cx - 16, front - 40), (cx - 40, front - 58), (cx + 32, front - 42), (cx + 56, front - 60), (cx + 8, front - 66)]
ends = [(cx + 8, front - 10), (cx - 22, front - 10), (cx - 42, front - 10), (cx + 28, front - 10), (cx + 48, front - 10), (cx + 8, front - 32)]
for i, ((sx, sy), (ex, ey)) in enumerate(zip(starts, ends)):
    if i:
        s.model(sx, sy, 'blue', ang=180, ghost=True)
        if abs(ey - sy) > 14 or abs(ex - sx) > 14: s.arrow(sx, sy + 8, ex, ey - 9, C['blue'], w=0.8)
    s.model(ex, ey, 'blue', ang=180)
s.text(cx + 8, front + 30, '', 5)
s.text(cx, 18, 'Defender (Open Order)', 6, C['blue'], bold=True)
s.text(cx + 8, front + 30, '', 5)
s.add(f'<circle cx="{cx + 8:.1f}" cy="{front - 9:.1f}" r="2.6" fill="{C["ink"]}"/>')
s.text(cx, PH - 4, 'Attacker (Closed Order)', 6, C['red'], bold=True)
s.scale(8, PH - 12)
print(s.save('pile_in_open.svg'))
