from style import *
PW, PH, G = 150, 230, 6
s = SVG(3 * PW + 2 * G, PH, 'Pile In: Closed Order versus Closed Order', [
    'The attacker charged into the defender’s front arc and touched its front edge at an angle. Step 1: the attacker rotates until its',
    'front is flush with that edge. Step 2: it slides until it is centred. If the attacker cannot get flush, for example because another',
    'enemy unit is in the way, the defender rotates and slides to meet it instead (steps 3 and 4), unless it is touching another enemy.'])
aw, ad = 4 * 20 + 2 * B, 2 * 20 + 2 * B
def corners(cx, cy, ang):
    a = math.radians(ang); out = []
    for lx, ly in [(-aw/2, -ad/2), (aw/2, -ad/2), (aw/2, ad/2), (-aw/2, ad/2)]:
        out.append((cx + lx*math.cos(a) - ly*math.sin(a), cy + lx*math.sin(a) + ly*math.cos(a)))
    return out
front = 140
titles = ['After the Charge', 'Step 1: Rotate flush', 'Step 2: Slide to centre']
for k, t in enumerate(titles):
    x0 = k * (PW + G); dcx = x0 + PW / 2
    s.panel(x0, 0, PW, PH, t)
    s.tray(dcx, front + 33, 3, 5, 0, 'blue', name='Defender')
    # angled position: corner touching the front edge right of centre
    ang = 180 + 20
    cs = corners(0, 0, ang); low = max(cs, key=lambda p: p[1])
    touch_x = dcx + 22
    p1 = (touch_x - low[0], front - low[1])
    p2 = (touch_x - (-aw / 2) * math.cos(math.radians(180)) + 0, front - ad / 2)  # rotated about the touching corner
    p2 = (touch_x - aw / 2, front - ad / 2) if low[0] > 0 else (touch_x + aw / 2, front - ad / 2)
    p3 = (dcx, front - ad / 2)
    if k == 0:
        s.tray(*p1, 2, 4, ang, 'red')
        s.text(p1[0] - 30, p1[1] - 40, 'Attacker', 6, C['red'], bold=True)
        s.add(f'<circle cx="{touch_x:.1f}" cy="{front}" r="2.2" fill="{C["ink"]}"/>')
        s.text(touch_x + 6, front + 9, 'first contact', 5.5, C['ink'], 'start', italic=True)
    elif k == 1:
        s.tray(*p1, 2, 4, ang, 'red', ghost=True)
        s.tray(*p2, 2, 4, 180, 'red')
        s.arc_arrow(touch_x, front, 94, 201, 183)
    else:
        s.tray(*p2, 2, 4, 180, 'red', ghost=True)
        s.tray(*p3, 2, 4, 180, 'red')
        s.arrow(p2[0], p2[1] - 32, p3[0] + 4 * (1 if p3[0] > p2[0] else -1), p2[1] - 32, C['red'])
s.scale(2 * (PW + G) + PW - 60, 36)
print(s.save('pile_in.svg'))
