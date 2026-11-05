from style import *
from tokens import *
W, H = 330, 145
s = SVG(W, H, 'Break Tokens and Break Tests', [
    'Break Tokens come from Terrify, charges into a flank or rear, and other effects. In the Morale Phase, a unit with any Break Tokens',
    'rolls 1d6 + Training, at -1 for each Break Token after the first, and needs 7 or more. If it passes, it removes 1 Break Token,',
    'or all of them if it was not Locked in Combat and took no Damage this round. If it fails, its Action and Break Tokens are replaced with a Flee Token.'])
s.panel(0, 0, W, H)
s.panel(6, 6, 70, H - 12, 'Break Token')
break_token(s, 41, 60, 14)
s.text(41, 92, 'one per effect;', 5, C['line'], italic=True)
s.text(41, 99, 'tokens stack', 5, C['line'], italic=True)
s.panel(82, 6, W - 88, H - 12, 'Example: Training 6, three Break Tokens')
s.tray(140, 82, 2, 4, 0, 'blue')
for i in range(3): break_token(s, 112 + i * 15, 48)
s.text(205, 36, 'Test: 1d6 + 6 - 2 ≥ 7', 6.5, C['ink'], 'start', bold=True)
s.text(205, 46, 'so a roll of 3 or more passes', 5.5, C['line'], 'start', italic=True)
def gone(x, y):
    s.add('<g opacity="0.3">'); break_token(s, x, y, 5); s.add('</g>')
    s.add(f'<path d="M{x-5},{y-5} L{x+5},{y+5} M{x+5},{y-5} L{x-5},{y+5}" stroke="{C["ink"]}" stroke-width="1"/>')
s.text(205, 62, 'Pass, in combat or took Damage:', 5.5, C['green'], 'start', bold=True)
for i in range(2): break_token(s, 212 + i * 13, 74, 5)
gone(238, 74)
s.text(250, 76, 'remove 1 Break Token', 5.2, C['ink'], 'start')
s.text(205, 92, 'Pass, not in combat, no Damage:', 5.5, C['green'], 'start', bold=True)
for i in range(3): gone(212 + i * 13, 104)
s.text(250, 106, 'remove them all', 5.2, C['ink'], 'start')
s.text(205, 124, 'Fail:', 6, C['red'], 'start', bold=True)
s.text(226, 124, 'Action and Break Tokens', 5.2, C['ink'], 'start')
s.text(226, 131, 'are replaced with Flee', 5.2, C['ink'], 'start')
action_token(s, 306, 126, 'Flee', 8)
print(s.save('break_tokens.svg'))
