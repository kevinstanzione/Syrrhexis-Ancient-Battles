from style import *
from tokens import *
W, H = 330, 180
s = SVG(W, H, 'Order Tokens and Pass Tokens', [
    'In the Orders Phase each player takes one numbered Order Token per Active Unit and places them face-down on their units,',
    'in Initiative order, hiding which unit will activate first. A player with fewer Active Units than the player with the most takes',
    'one Pass Token per unit of difference. Pass Tokens sit face-down in view of all players and are flipped face-up as they are used.'])
s.panel(0, 0, W, H)
# panel 1: order tokens
s.panel(6, 6, 100, H - 12, 'Order Tokens')
for i, (dx, dy) in enumerate([(0, -10), (-11, 7), (11, 7)]):
    order_token(s, 50 + dx*1.2, 45 + dy*1.2, str(i + 1), r=10)
s.text(50, 77, 'face-up: activation order', 5, C['line'], italic=True)
flip(s, 50, 84, 100)
for dx, dy in [(0, -10), (-11, 7), (11, 7)]:
    order_token(s, 50 + dx*1.2, 128 + dy*1.2, r=10)
s.text(50, 160, 'placed face-down on units', 5, C['line'], italic=True)
# panel 2: pass tokens
s.panel(112, 6, 90, H - 12, 'Pass Tokens')
pass_token(s, 157, 45, face=False, r=11)
s.text(157, 76, 'face-down: unused', 5, C['line'], italic=True)
flip(s, 157, 82, 101)
pass_token(s, 157, 124, face=True, r=11)
s.text(157, 154, 'flipped when used', 5, C['line'], italic=True)
# panel 3: example
s.panel(208, 6, W - 214, H - 12, 'Example')
s.text(214, 30, 'Blue: 6 Active Units', 5.8, C['blue'], 'start', bold=True)
for i in range(6):
    order_token(s, 222 + i * 17, 45, str(i + 1), r=7)
s.text(214, 72, 'Red: 3 Active Units', 5.8, C['red'], 'start', bold=True)
for i in range(3):
    order_token(s, 222 + i * 17, 87, str(i + 1), r=7)
s.text(214, 113, '6 − 3 = 3 Pass Tokens for Red', 5.5, C['red'], 'start', italic=True)
for i in range(3):
    pass_token(s, 222 + i * 17, 128, face=False, r=7)
print(s.save('order_tokens.svg'))
