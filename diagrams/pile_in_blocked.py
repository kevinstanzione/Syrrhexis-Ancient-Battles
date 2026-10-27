from style import *
PW, PH, G = 230, 190, 6
dw, dd = 5 * 20 + 2 * B, 2 * 20 + 2 * B     # defender and its friend: 2 ranks of 5
aw, ad = 3 * 20 + 2 * B, 2 * 20 + 2 * B     # attacker: 2 ranks of 3
fw = 3 * 20 + 2 * B                         # friendly unit: 2 ranks of 3

def scenario(name, title, caption, second_red):
    s = SVG(3 * PW + 2 * G, PH, title, caption)
    front = 92                              # defender's front edge (it faces down the page)
    dx0 = 115                               # defender centre at the start
    fr = 100                                # friendly unit's right edge
    fx = fr - fw / 2                        # friendly blue unit, lower left, its top on the defender's front line
    ax_land = 150                           # where the attacker first lands
    ax_slide = fr + aw / 2                  # attacker slides left until it touches the friend
    stop = None
    if second_red:
        r2x = 198                           # second red unit right of the defender
        stop = r2x - 23 - dw / 2            # defender can only slide until it touches it
    dx_end = ax_slide if stop is None else min(ax_slide, stop)
    panels = ['After the Charge', 'Steps 1–2: Rotate, then slide', 'Steps 3–4: Defender slides']
    for k, t in enumerate(panels):
        ox = k * (PW + G)
        s.panel(ox, 0, PW, PH, t)
        dxc = dx0 if k < 2 else dx_end
        if k == 2 and dxc != dx0:
            s.tray(ox + dx0, front - dd / 2, 2, 5, 180, 'blue', ghost=True)
        s.tray(ox + dxc, front - dd / 2, 2, 5, 180, 'blue')
        s.text(ox + dxc, front - dd - 6, 'Defender', 6, C['blue'], bold=True)
        s.tray(ox + fx, front + dd / 2, 2, 3, 180, 'blue')
        s.text(ox + fx, front + dd + 9, 'friendly unit', 5.5, C['blue'], italic=True)
        if second_red:
            s.tray(ox + r2x, front - dd / 2, 2, 2, 0, 'red')
            s.text(ox + r2x, front - dd - 18, 'second red unit', 5.5, C['red'], italic=True)
        if k == 0:
            # attacker touching the defender's front at an angle
            s.tray(ox + ax_land + 6, front + ad / 2 + 8, 2, 3, -18, 'red')
            s.arrow(ox + ax_land + 40, front + 82, ox + ax_land + 20, front + 56, C['red'])
            s.text(ox + ax_land + 30, front + 92, 'charge', 5.5, C['red'], italic=True)
        elif k == 1:
            s.tray(ox + ax_land + 6, front + ad / 2 + 8, 2, 3, -18, 'red', ghost=True)
            s.tray(ox + ax_land, front + ad / 2, 2, 3, 0, 'red', ghost=True)
            s.tray(ox + ax_slide, front + ad / 2, 2, 3, 0, 'red')
            s.arrow(ox + ax_land + 2, front + ad + 10, ox + ax_slide - 2, front + ad + 10, C['red'], label=None)
            s.text(ox + (ax_land + ax_slide) / 2, front + ad + 22, 'slide stopped by the friendly unit', 5.5, C['red'], italic=True)
        else:
            s.tray(ox + ax_slide, front + ad / 2, 2, 3, 0, 'red')
            if dxc != dx0:
                s.arrow(ox + dx0, front - dd - 16, ox + dxc, front - dd - 16, C['blue'])
    s.scale(8, PH - 10)
    print(s.save(name + '.svg'))

scenario('pile_in_blocked', 'Pile In: Attacker Blocked', [
    'The red attacker charged into the defender’s front arc and touched its front corner. It rotates flush (step 1), then slides',
    'toward the centre of the defender’s front (step 2), but the defender’s friendly unit stops it partway. The attacker cannot',
    'get centred, so the defender, which is not touching any other enemy unit, slides to centre itself on the attacker (step 4).'], False)
scenario('pile_in_blocked_twice', 'Pile In: Both Units Blocked', [
    'The same charge, but a second red unit stands beside the defender. The attacker is blocked by the defender’s friendly unit as',
    'before, and the defender can only slide until it touches the second red unit. The two units are flush but not centred. That does',
    'not stop the Melee or cost either side anything; the Pile In simply ends there.'], True)
