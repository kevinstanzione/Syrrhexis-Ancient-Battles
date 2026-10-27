from style import *
from tokens import *
W, H = 330, 150
s = SVG(W, H, 'Action Tokens', [
    'Every action except Standard Move gives the unit an Action Token, placed beside it. Hold and Flee share one diamond token,',
    'and Charge and Run share one round token, flipped to the side that applies. A unit never has more than one Action Token.'])
s.panel(0, 0, W, H)
def pair(x, a, b, note_a, note_b):
    action_token(s, x, 42, a, 12 if a in ('Hold', 'Flee') else 11)
    s.text(x, 64, note_a, 5, C['line'], italic=True)
    flip(s, x, 69, 85)
    action_token(s, x, 100, b, 12 if b in ('Hold', 'Flee') else 11)
    s.text(x, 122, note_b, 5, C['line'], italic=True)
s.panel(6, 6, 100, H - 12, 'Hold / Flee')
pair(56, 'Hold', 'Flee', '+1 Accuracy, cannot move', 'must Rally or Flee')
s.panel(112, 6, 100, H - 12, 'Charge / Run')
pair(162, 'Charge', 'Run', '+1 Strength, cannot shoot', '-1 Strength, cannot shoot')
s.panel(218, 6, W - 224, H - 12, 'Standard Move')
s.add(f'<circle cx="270" cy="70" r="12" fill="none" stroke="{C["line"]}" stroke-width="0.9" stroke-dasharray="2 2"/>')
s.text(270, 72, 'none', 5.5, C['line'], italic=True)
s.text(270, 96, 'no Action Token', 5.5, C['ink'], bold=True)
s.text(270, 104, '(any old token is removed)', 5, C['line'], italic=True)
print(s.save('action_tokens.svg'))
