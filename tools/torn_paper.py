"""Torn-paper edge for the pencil illustrations, shared by the Army Book and rulebook builds."""
import random

from PIL import Image, ImageDraw, ImageFilter

PAPER = (251, 248, 241)

# Images that also get a torn-off corner; the rest just have the ragged edge.
TORN_CORNER = {'card_the_eclipse', 'greek_march', 'merc_lydian_houndsmen'}


def _edge(rng, n, amp, rough):
    v, out = 0.0, []
    for _ in range(n):
        v = v * 0.7 + rng.uniform(-1, 1) * rough
        if rng.random() < 0.04:  # an occasional deeper bite
            v += rng.uniform(amp * .6, amp * 1.4)
        out.append(max(0, min(amp * 2.2, abs(v) + rng.uniform(0, amp * .35))))
    return out


def torn(img, name, corners=True):
    """Give a picture a ragged torn-paper edge and a soft shadow, flattened onto the page colour.
    Each image gets its own tear (seeded by its name); only the images in TORN_CORNER also lose a corner."""
    rng = random.Random(name)
    W, H = img.size
    k = max(W, H) / 760.0                       # the mock-up was tuned at 760 px
    rng.random()                                # keep each image's tear pattern unchanged
    corner = corners and name in TORN_CORNER
    amp, rough = (13 * k, 6 * k) if corner else (9 * k, 4 * k)
    m = Image.new('L', (W, H), 0)
    d = ImageDraw.Draw(m)
    st = max(2, int(3 * k))
    t, r, b, l = (_edge(rng, n // st + 1, amp, rough) for n in (W, H, W, H))
    d.polygon([(i * st, t[i]) for i in range(len(t))] + [(W - r[i], i * st) for i in range(len(r))]
              + [(W - i * st, H - b[i]) for i in range(len(b))] + [(l[i], H - i * st) for i in range(len(l))], fill=255)
    if corner:  # rip one corner away
        cw, ch = 110 * k, 90 * k
        cx, cy = rng.choice([(0, 0), (W, 0), (0, H), (W, H)])
        sx, sy = (1 if cx == 0 else -1), (1 if cy == 0 else -1)
        pts = [(cx, cy), (cx + sx * cw, cy)]
        for i in range(1, 14):
            f = i / 13
            pts.append((cx + sx * cw * (1 - f) + rng.uniform(-4, 4) * k, cy + sy * ch * f + rng.uniform(-4, 4) * k))
        pts.append((cx, cy + sy * ch))
        d.polygon(pts, fill=0)
    m = m.filter(ImageFilter.GaussianBlur(0.6 * k))
    pad = int(30 * k)
    page = Image.new('RGB', (W + 2 * pad, H + 2 * pad), PAPER)
    sh = Image.new('L', page.size, 0)
    sh.paste(m, (pad + int(7 * k), pad + int(9 * k)))
    sh = sh.filter(ImageFilter.GaussianBlur(10 * k))
    page.paste((110, 95, 75), (0, 0), sh.point(lambda v: int(v * .5)))
    fibre = m.filter(ImageFilter.FIND_EDGES).point(lambda v: min(255, v * 3))
    img = img.copy()
    img.paste((200, 180, 150), (0, 0), fibre.point(lambda v: int(v * .5)))
    page.paste(img, (pad, pad), m)
    return page
