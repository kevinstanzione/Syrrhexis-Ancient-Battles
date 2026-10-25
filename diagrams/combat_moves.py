from style import *
PW, PH, G = 136, 250, 6
s = SVG(3 * PW + 2 * G, PH, 'Combat Moves', [
    'Red won the Melee. Each move is up to 2”. Faded trays show starting positions; dashed outlines show optional moves.',
    'Push: the enemy is driven back and you may follow up. Withdraw: you pull out. Pull: you step back and draw the enemy after you.'])
D = 2 * IN; td = 2 * 20 + 2 * B
for k, (title) in enumerate(['Push', 'Withdraw', 'Pull']):
    x0 = k * (PW + G); cx = x0 + PW / 2; contact = 140
    s.panel(x0, 0, PW, PH, title)
    ry, by = contact + td / 2, contact - td / 2
    if title == 'Push':
        s.tray(cx, by, 2, 4, 180, 'blue', ghost=True)
        s.tray(cx, by - D, 2, 4, 180, 'blue')
        s.arrow(cx + 50, by, cx + 50, by - D + 4, C['blue'], label='2”', loff=(7, 0))
        s.tray(cx, ry - D, 2, 4, 0, 'red', outline=True)
        s.tray(cx, ry, 2, 4, 0, 'red')
        s.arrow(cx - 50, ry, cx - 50, ry - D + 4, C['red'], dashed=True)
        s.text(cx - 54, ry - D / 2, 'up to 2”', 5.5, C['red'], rot=-90)
        s.text(cx, 22, 'Red may follow up', 5.5, C['red'], italic=True)
    elif title == 'Withdraw':
        s.tray(cx, by, 2, 4, 180, 'blue')
        s.tray(cx, ry, 2, 4, 0, 'red', ghost=True)
        s.tray(cx, ry + D, 2, 4, 0, 'red')
        s.arrow(cx + 50, ry, cx + 50, ry + D - 4, C['red'], label='2”', loff=(7, 0))
        s.text(cx, 22, 'Blue does not move', 5.5, C['blue'], italic=True)
    else:
        s.tray(cx, by, 2, 4, 180, 'blue', ghost=True)
        s.tray(cx, ry, 2, 4, 0, 'red', ghost=True)
        s.tray(cx, ry + D, 2, 4, 0, 'red')
        s.tray(cx, ry + D - td, 2, 4, 180, 'blue')
        s.arrow(cx + 50, ry, cx + 50, ry + D - 4, C['red'], label='2”', loff=(7, 0))
        s.arrow(cx - 50, by, cx - 50, by + D - 4, C['blue'])
        s.text(cx - 54, by + D / 2, 'follows', 5.5, C['blue'], rot=-90)
        s.text(cx, 22, 'Needs higher Training', 5.5, C['red'], italic=True)
s.scale(x0 + 8, PH - 20) if False else s.scale(8, PH - 14)
print(s.save('combat_moves.svg'))
