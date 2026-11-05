from style import *
W, H = 340, 230
s = SVG(W, H, 'Line of Fire and Cover', [
    'The archers trace a line of fire from the centre of their tray to the centre of each target’s tray. The line to',
    'Target A crosses a Phocian Wall, which gives Cover: the archers shoot at -2 Accuracy. The line to Target B crosses Dense',
    'Brush, which blocks Line of Sight, so the archers cannot shoot Target B at all, even though some of its models stick out',
    'past the brush. Only the line matters, not how much of the target the archers can see.'])
s.panel(0, 0, W, H)
# targets
ax, ay = 95, 45          # Target A
bx, by = 245, 45         # Target B
s.tray(ax, ay, 2, 4, 180, 'blue', name=None)
s.text(ax, 14, 'Target A', 6, C['blue'], bold=True)
s.tray(bx, by, 2, 4, 180, 'blue', name=None)
s.text(bx, 14, 'Target B', 6, C['blue'], bold=True)
# archers
cx, cy = 170, 185
s.tray(cx, cy, 2, 4, 0, 'red', name=None)
s.text(cx, H - 8, 'Archers', 6, C['red'], bold=True)
fx, fy = cx, cy                   # centre of the tray (Closed Order line of fire)
# Phocian Wall across the line to A
def lerp(p, q, t): return (p[0] + (q[0] - p[0]) * t, p[1] + (q[1] - p[1]) * t)
wa = lerp((fx, fy), (ax, ay), 0.55)
s.add(f'<rect x="{wa[0]-34}" y="{wa[1]-3}" width="68" height="6" fill="#bdb4a2" stroke="{C["line"]}" stroke-width="0.8"/>')
s.text(wa[0] - 38, wa[1] + 2, 'Phocian Wall: Cover', 5.5, C['line'], 'end', italic=True)
# Dense Brush across the line to B
wb = lerp((fx, fy), (bx, by), 0.55)
s.add(f'<rect x="{wb[0]-22}" y="{wb[1]-12}" width="44" height="24" rx="8" fill="{C["green"]}" fill-opacity="0.55" stroke="{C["green"]}" stroke-width="0.9"/>')
s.text(wb[0] + 26, wb[1] + 2, 'Dense Brush: blocks', 5.5, C['green'], 'start', italic=True)
# lines of fire
s.add(f'<line x1="{fx}" y1="{fy}" x2="{ax}" y2="{ay}" stroke="{C["ink"]}" stroke-width="0.8"/>')
s.add(f'<line x1="{fx}" y1="{fy}" x2="{bx}" y2="{by}" stroke="{C["line"]}" stroke-width="0.8" stroke-dasharray="2 2"/>')
for (x, y) in [(fx, fy), (ax, ay), (bx, by)]:
    s.add(f'<circle cx="{x}" cy="{y}" r="1.8" fill="{C["ink"]}"/>')
s.text(ax + 5, ay + 32, 'Cover: -2 Accuracy', 5.5, C['ink'], 'end', bold=True)
s.text(bx - 5, by + 32, 'Blocked: cannot shoot', 5.5, C['line'], 'start', bold=True)
s.scale(W - 60, H - 12)
print(s.save('los_cover.svg'))
