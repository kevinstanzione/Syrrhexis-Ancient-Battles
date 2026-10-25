from style import *
W, H = 300, 175
s = SVG(W, H, 'Turning with the Turn Template', [
    'Put the template’s point at a front corner of the tray, one arm along the front edge, and turn the unit backwards',
    'around that corner. A turn may be any angle up to 45° (notches mark 15° and 30°) and costs 1” of Move, plus X”',
    'for Unwieldy (X). A unit may keep turning the same way for 1” per turn, but must move forward at least 1” before',
    'turning the other way.'])
s.panel(0, 0, W, H)
w, d = 4 * 20 + 2 * B, 2 * 20 + 2 * B
P = (95, 45)  # pivot: front-left corner
def centre(ang):
    a = math.radians(ang); lx, ly = w / 2, d / 2
    return (P[0] + lx * math.cos(a) - ly * math.sin(a), P[1] + lx * math.sin(a) + ly * math.cos(a))
# template wedge
R = 3.5 * IN
pts = [P] + [(P[0] + R * math.cos(math.radians(a)), P[1] + R * math.sin(math.radians(a))) for a in [i * 0.5 for i in range(91)]]
s.add(f'<polygon points="{" ".join(f"{x:.1f},{y:.1f}" for x, y in pts)}" fill="{C["gold"]}" fill-opacity="0.75" stroke="{C["line"]}" stroke-width="0.9"/>')
for a in (15, 30):
    x1, y1 = P[0] + (R - 4) * math.cos(math.radians(a)), P[1] + (R - 4) * math.sin(math.radians(a))
    x2, y2 = P[0] + R * math.cos(math.radians(a)), P[1] + R * math.sin(math.radians(a))
    s.add(f'<line x1="{x1:.1f}" y1="{y1:.1f}" x2="{x2:.1f}" y2="{y2:.1f}" stroke="{C["line"]}" stroke-width="0.9"/>')
    s.text(P[0] + (R - 11) * math.cos(math.radians(a)), P[1] + (R - 11) * math.sin(math.radians(a)) + 2, f'{a}°', 5, C['line'])
s.text(P[0] + (R + 2) * math.cos(math.radians(45)) - 6, P[1] + (R + 2) * math.sin(math.radians(45)) + 7, '45°', 5, C['line'])
s.tray(*centre(0), 2, 4, 0, 'red', outline=True)
s.tray(*centre(45), 2, 4, 45, 'red')
s.add(f'<circle cx="{P[0]}" cy="{P[1]}" r="2.2" fill="{C["ink"]}"/>')
s.text(P[0] - 4, P[1] - 4, 'pivot corner', 5.5, C['ink'], 'end', italic=True)
s.arc_arrow(P[0], P[1], w + 10, -3, 40)
s.text(P[0] + w + 22, P[1] + 20, '1” of Move', 6, C['red'], 'start', bold=True)
s.text(P[0] + w + 22, P[1] + 28, '(+X” Unwieldy)', 5.5, C['red'], 'start', italic=True)
s.text(P[0] + w / 2, P[1] - 5, 'Start (front edge)', 5.5, C['red'], italic=True)
s.text(P[0] - 30, P[1] + 80, 'After a 45° turn', 6, C['red'], 'end', bold=True)
s.scale(8, H - 12)
print(s.save('turning.svg'))
