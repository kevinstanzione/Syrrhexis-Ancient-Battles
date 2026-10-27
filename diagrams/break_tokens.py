from style import *
from tokens import *
W, H = 330, 125
s = SVG(W, H, 'Break Tokens and Break Tests', [
    'Break Tokens come from Terrify, charges into a flank or rear, and other effects. In the Morale Phase, a unit with any Break Tokens',
    'rolls 1d6 + Training, at -1 for each Break Token after the first, and needs 7 or more. If it passes, all its Break Tokens are removed.',
    'If it fails, its Action and Break Tokens are replaced with a Flee Token.'])
s.panel(0, 0, W, H)
s.panel(6, 6, 70, H - 12, 'Break Token')
break_token(s, 41, 50, 14)
s.text(41, 82, 'one per effect;', 5, C['line'], italic=True)
s.text(41, 89, 'tokens stack', 5, C['line'], italic=True)
s.panel(82, 6, W - 88, H - 12, 'Example: Training 6, three Break Tokens')
s.tray(140, 72, 2, 4, 0, 'blue')
for i in range(3): break_token(s, 112 + i * 15, 38)
s.text(205, 36, 'Test: 1d6 + 6 - 2 ≥ 7', 6.5, C['ink'], 'start', bold=True)
s.text(205, 46, 'so a roll of 3 or more passes', 5.5, C['line'], 'start', italic=True)
s.text(205, 70, 'Pass:', 6, C['green'], 'start', bold=True)
s.text(226, 70, 'remove all Break Tokens', 5.5, C['ink'], 'start')
s.text(205, 92, 'Fail:', 6, C['red'], 'start', bold=True)
s.text(226, 92, 'remove its Action and', 5.5, C['ink'], 'start')
s.text(226, 99, 'Break Tokens, add Flee', 5.5, C['ink'], 'start')
action_token(s, 306, 82, 'Flee', 8)
print(s.save('break_tokens.svg'))
