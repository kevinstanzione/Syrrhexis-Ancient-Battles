from style import *
import math
ARM, BAR = 3.5 * IN, 10.0
W, H = 300, 140
s = SVG(W, H, 'The Turn Template', [
    'The Turn Template is two 3.5” arms joined at 135°, each 10 mm wide, with a tick every inch along the inner edges. It is used for',
    'Closed Order turns (see Turning) and is 3D-printable from the STL in the trays folder.'])
s.panel(0, 0, W, H)
px, py = 175, 45
uA, nA = (1.0, 0.0), (0.0, -1.0)
a = math.radians(135); uB = (math.cos(a), math.sin(a)); nB = (-uB[1], uB[0])
def P(*pts): return ' '.join(f'{px+x:.1f},{py+y:.1f}' for x, y in pts)
def arm(u, n): return [(0, 0), (ARM*u[0], ARM*u[1]), (ARM*u[0]+BAR*n[0], ARM*u[1]+BAR*n[1]), (BAR*n[0], BAR*n[1])]
fill, edge = '#d9c9a3', '#7a6440'
for u, n in ((uA, nA), (uB, nB)):
    s.add(f'<polygon points="{P(*arm(u, n))}" fill="{fill}" stroke="{edge}" stroke-width="0.9"/>')
s.add(f'<polygon points="{P((0,0),(BAR*nA[0],BAR*nA[1]),(BAR*nB[0],BAR*nB[1]))}" fill="{fill}" stroke="{edge}" stroke-width="0.9"/>')
for u, n in ((uA, nA), (uB, nB)):
    for i in range(1, 4):
        x, y = i*IN*u[0], i*IN*u[1]
        s.add(f'<line x1="{px+x:.1f}" y1="{py+y:.1f}" x2="{px+x+4*n[0]:.1f}" y2="{py+y+4*n[1]:.1f}" stroke="{edge}" stroke-width="0.8"/>')
        s.text(px + x + 7*n[0], py + y + 7*n[1] + 2, f'{i}"', 4.5, edge)
# dimensions
s.text(px + ARM/2, py - BAR - 6, '3.5” (89 mm)', 6, C['ink'], bold=True)
mx, my = px + ARM/2*uB[0] + 26*nB[0], py + ARM/2*uB[1] + 26*nB[1]
s.text(mx, my, '3.5” (89 mm)', 6, C['ink'], bold=True, rot=-45)
r = 22
s.add(f'<path d="M{px+r:.1f},{py:.1f} A{r},{r} 0 0 1 {px+r*uB[0]:.1f},{py+r*uB[1]:.1f}" fill="none" stroke="{C["red"]}" stroke-width="0.9"/>')
s.text(px + 4, py + 20, '135°', 6.5, C['red'], bold=True)
s.text(px + ARM + 4, py - BAR/2 + 2, '10 mm', 5, C['line'], 'start', italic=True)
s.text(px + 20, py + 40, 'inner edges: these touch the tray', 5.5, C['line'], 'start', italic=True)
s.scale(8, H - 10)
print(s.save('turn_template.svg'))
