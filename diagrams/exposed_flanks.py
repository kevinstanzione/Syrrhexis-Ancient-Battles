from style import *
W, H = 300, 215
s = SVG(W, H, 'Exposed Flanks', [
    'A Closed Order unit charged in a flank gains 1 Break Token, and charged in the rear gains 2, on top of any from Terrify. It also',
    'loses its Charge Action Token, and it gets no Collision bonus Hits while it is engaged on a flank or rear side.'])
s.panel(0, 0, W, H)
cx, cy = 150, 105
s.tray(cx, cy, 3, 5, 0, 'blue', name=None)
s.tray(cx - 53 - 23, cy, 2, 3, 90, 'red')
s.text(cx - 76, cy - 40, 'Flank charge', 6, C['red'], bold=True)
s.tray(cx, cy + 33 + 23, 2, 4, 0, 'red')
s.text(cx, cy + 33 + 46 + 10, 'Rear charge', 6, C['red'], bold=True)
def tok(x, y):
    s.add(f'<circle cx="{x}" cy="{y}" r="6" fill="{C["ink"]}"/>'); s.text(x, y + 2, 'B', 5.5, '#fff', bold=True)
tok(cx - 40, cy - 48); s.text(cx - 30, cy - 46, '+1 Break Token (flank)', 5.5, C['ink'], 'start')
tok(cx - 40, cy - 64); tok(cx - 26, cy - 64); s.text(cx - 16, cy - 62, '+2 Break Tokens (rear)', 5.5, C['ink'], 'start')
s.text(cx + 62, cy + 4, 'No Collision Hits', 5.5, C['blue'], 'start', bold=True)
s.text(cx + 62, cy + 11, 'while engaged on', 5.5, C['blue'], 'start', italic=True)
s.text(cx + 62, cy + 18, 'a flank or the rear', 5.5, C['blue'], 'start', italic=True)
s.text(cx, cy - 75, 'Defender', 6, C['blue'], bold=True)
s.scale(8, H - 12)
print(s.save('exposed_flanks.svg'))
