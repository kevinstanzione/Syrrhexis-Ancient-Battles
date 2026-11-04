from board import *
from tokens import *
k = 0.36
PW, PH, G = 230, 215, 6
s = SVG(2 * PW + G, PH, 'Feign Charge and Feign Retreat', [
    'Both are declared instead of a Charge, before measuring, and need the target within the unit’s Move. The unit makes contact, the enemy',
    'loses Army Morale equal to its Unit Strength and gains any Break Tokens for Terrify or size, then the unit turns about and moves up to its',
    'full Move away in any direction, ending with a Run Token. Feign Retreat adds one step: the enemy takes a Fear Test and, if goaded,',
    'turns toward the attacker and moves its full Move after it.'])
def mm(v): return v * k
def cav(x, y, ang=0, ghost=False):
    mini_tray(s, x, y, 1, 4, ang, 'red', ghost=ghost, k=k, bw=25, bd=50)
by = 52; contact = by + mm(66) / 2 + mm(56) / 2
for p, title in enumerate(['Feign Charge (Move 8)', 'Feign Retreat (Move 8)']):
    ox = p * (PW + G); cx = ox + PW / 2
    s.panel(ox, 0, PW, PH, title)
    start = contact + mm(7 * IN)
    if p == 0:
        mini_tray(s, cx, by, 3, 5, 180, 'blue', k=k)
        cav(cx, start, ghost=True); cav(cx, contact, ghost=True)
        s.arrow(cx - 34, start, cx - 34, contact + 6, C['red'], dashed=True)
        s.text(cx - 38, (start + contact) / 2, '1. contact', 5.2, C['red'], 'end', italic=True)
        s.text(cx + 28, contact - 2, '2. enemy loses Army Morale,', 5, C['ink'], 'start', italic=True)
        s.text(cx + 28, contact + 4, '   gains Break Tokens', 5, C['ink'], 'start', italic=True)
        end = contact + (mm(8 * IN) ** 2 - 30 ** 2) ** 0.5
        cav(cx + 30, end, 180)
        s.arrow(cx + 4, contact + 12, cx + 26, end - 8, C['red'])
        s.text(cx + 56, end + 2, '3. turn about,', 5.2, C['red'], 'start', italic=True)
        s.text(cx + 56, end + 8, 'full Move (8”)', 5.2, C['red'], 'start', italic=True)
        round_token(s, cx + 30, end + 18, 'Run', 7)
    else:
        bstart = by
        mini_tray(s, cx, bstart, 3, 5, 180, 'blue', k=k, ghost=True)
        goad = bstart + mm(5 * IN)
        mini_tray(s, cx, goad, 3, 5, 180, 'blue', k=k)
        s.arrow(cx + 52, bstart, cx + 52, goad - 2, C['blue'])
        s.text(cx + 56, bstart + 10, '4. Fear Test failed:', 5.2, C['blue'], 'start', bold=True)
        s.text(cx + 56, bstart + 16, 'goaded, full Move', 5.2, C['blue'], 'start', italic=True)
        s.text(cx + 56, bstart + 22, '(5”) after it', 5.2, C['blue'], 'start', italic=True)
        round_token(s, cx - 48, goad, 'Charge', 7)
        cav(cx, contact, ghost=True)
        s.text(cx - 40, contact + 2, '1. contact,', 5.2, C['red'], 'end', italic=True)
        s.text(cx - 40, contact + 8, '2. Army Morale lost,', 5.2, C['red'], 'end', italic=True)
        s.text(cx - 40, contact + 14, 'Break Tokens', 5.2, C['red'], 'end', italic=True)
        end = contact + mm(8 * IN)
        cav(cx, end, 180)
        s.arrow(cx + 40, contact + 6, cx + 40, end - 6, C['red'])
        s.text(cx + 44, (contact + end) / 2, '3. turn about, full Move', 5.2, C['red'], 'start', italic=True)
        s.text(cx + 44, (contact + end) / 2 + 6, '(8”)', 5.2, C['red'], 'start', italic=True)
        round_token(s, cx - 40, end, 'Run', 7)
print(s.save('feign.svg'))
