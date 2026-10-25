from style import *
W, H = 300, 160
s = SVG(W, H, 'Turning with the Turn Template', [
    'The Turn Template is two 3.5” arms meeting at 135°. Put its corner at a front corner of the tray, with the front edge flush',
    'against one arm, then turn the unit backwards around that corner. After a full 45° turn, the unit’s flank is flush with the',
    'other arm; it may stop sooner for a smaller turn. Each turn costs 1” of Move, plus X” for Unwieldy (X). A unit may keep',
    'turning the same way for 1” per turn, but must move forward at least 1” before turning the other way.'])
s.panel(0, 0, W, H)
w, d = 4 * 20 + 2 * B, 2 * 20 + 2 * B
P = (110, 40)   # pivot: front-left corner of the tray
ARM, BAR = 3.5 * IN, 10
def centre(ang):
    a = math.radians(ang); lx, ly = w / 2, d / 2
    return (P[0] + lx * math.cos(a) - ly * math.sin(a), P[1] + lx * math.sin(a) + ly * math.cos(a))
def bracket(px, py):
    uA, nA = (1, 0), (0, -1)
    a = math.radians(135); uB = (math.cos(a), math.sin(a)); nB = (-0.7071, -0.7071)
    def arm(u, n): return [(px, py), (px + ARM*u[0], py + ARM*u[1]), (px + ARM*u[0] + BAR*n[0], py + ARM*u[1] + BAR*n[1]), (px + BAR*n[0], py + BAR*n[1])]
    poly = [arm(uB, nB)[1], arm(uB, nB)[2], (px + BAR*nB[0], py + BAR*nB[1]), (px, py - BAR), arm(uA, nA)[2], arm(uA, nA)[1], (px, py)]
    s.add(f'<polygon points="{" ".join(f"{x:.1f},{y:.1f}" for x, y in poly)}" fill="{C["gold"]}" stroke="{C["line"]}" stroke-width="0.9"/>')
    for u, n in ((uA, nA), (uB, nB)):
        for i in (1, 2, 3):
            x, y = px + i*IN*u[0], py + i*IN*u[1]
            s.add(f'<line x1="{x:.1f}" y1="{y:.1f}" x2="{x + 4*n[0]:.1f}" y2="{y + 4*n[1]:.1f}" stroke="{C["line"]}" stroke-width="0.7"/>')
bracket(*P)
s.text(P[0] + ARM - 2, P[1] - 13, 'Turn Template', 5.5, C['ink'], 'end', bold=True)
s.tray(*centre(0), 2, 4, 0, 'red', outline=True)
s.tray(*centre(45), 2, 4, 45, 'red')
s.add(f'<circle cx="{P[0]}" cy="{P[1]}" r="2.2" fill="{C["ink"]}"/>')
s.arc_arrow(P[0], P[1], w + 8, 2, 41)
s.text(P[0] + w + 16, P[1] + 34, '1” of Move', 6, C['red'], 'start', bold=True)
s.text(P[0] + w + 16, P[1] + 42, '(+X” Unwieldy)', 5.5, C['red'], 'start', italic=True)
s.text(P[0] + w - 14, P[1] + 22, 'Start', 5.5, C['red'], italic=True)
s.text(P[0] - 22, P[1] + 100, 'After a full 45° turn:', 6, C['red'], 'end', bold=True)
s.text(P[0] - 22, P[1] + 108, 'flank flush with the arm', 5.5, C['red'], 'end', italic=True)
s.text(P[0] - 6, P[1] + 4, 'corner', 5.5, C['ink'], 'end', italic=True)
s.scale(W - 60, H - 12)
print(s.save('turning.svg'))
