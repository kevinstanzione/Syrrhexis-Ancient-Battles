"""Compose the chariot illustrations into a two-page rulebook spread (8x10 in pages, 300 dpi).

Every chariot is drawn to the same scale. The scale of each drawing is set from its wheel:
the wheel's diameter is measured in the image and matched to an approximate real diameter.
Run from the repo root:  python3 art/chariots/build_spread.py
"""
import os
import numpy as np
from PIL import Image, ImageDraw, ImageFont, ImageChops

HERE = os.path.dirname(os.path.abspath(__file__))
FONTS = os.environ.get('SYRRHEXIS_FONTS', '/tmp/claude-0/-home-claude/a0507b15-7376-5b6e-bdf2-863847d2a364/scratchpad/pdf/ttf')
DPI = 300
W, H = 8 * DPI, 10 * DPI
PAPER = (251, 248, 241)
INK = (36, 31, 26)
RED = (142, 47, 36)
MUTED = (107, 98, 83)
RULE = (185, 169, 138)
MX = int(0.6 * DPI)
USABLE = W - 2 * MX
GAP = int(0.25 * DPI)
COL_W = (USABLE - GAP) // 2

# (file, name, army, approximate real wheel diameter in metres)
PAGES = [
    ('Chariots I', 'From Ur to Nineveh', [
        ('sumerian_wagon', 'Battle Wagon', 'Sumerian Kingdom', 0.75),
        ('sumerian_straddle_car', 'Straddle Car', 'Sumerian Kingdom', 0.6),
        ('egyptian', 'Egyptian Chariot', 'Dynastic Egypt', 0.95),
        ('hattian', 'Hattian Chariot', 'Hittite Empire', 1.0),
        ('allied', 'Allied Chariot', 'Hittite Empire', 0.9),
        ('assyrian', 'Assyrian Chariot', 'Neo-Assyrian Empire', 1.0),
        ('assyrian_royal', 'Royal Chariot', 'Neo-Assyrian Empire', 1.45),
    ]),
    ('Chariots II', 'From Persepolis to the Ends of the Earth', [
        ('ratha', 'Raθā', 'Achaemenid Persia', 1.1),
        ('ratha_daca', 'Raθā-Dāça', 'Achaemenid Persia', 1.1),
        ('ratha_retinue', 'Raθā Retinue', 'Achaemenid Persia', 1.3),
        ('celtic', 'Celtic Chariot', 'European Barbarians', 0.9),
        ('qin', 'Qin Chariot', 'Qin China', 1.35),
        ('mauryan', 'Mauryan Chariot', 'Mauryan Empire', 1.25),
    ]),
]


def font(name, size):
    return ImageFont.truetype(os.path.join(FONTS, name + '.ttf'), size)


F_TITLE = font('Cinzel-700', 70)
F_SUB = font('EBGaramond-Italic-400', 40)
F_NAME = font('Cinzel-700', 36)
F_ARMY = font('EBGaramond-Italic-400', 32)
F_SCALE = font('SourceSans3-400', 26)
F_NAME_FALLBACK = font('EBGaramond-700', 40)      # Cinzel has no θ


def has_glyph(f, ch):
    return f.getmask(ch).getbbox() is not None and f.getbbox(ch) != f.getbbox('\uffff')


def draw_name(d, xy, text):
    """Draw a unit name in Cinzel, falling back to EB Garamond for letters Cinzel lacks (θ)."""
    x, y = xy
    for ch in text:
        f = F_NAME if ch != 'θ' else F_NAME_FALLBACK
        d.text((x, y + (0 if f is F_NAME else -4)), ch, font=f, fill=INK)
        x += d.textlength(ch, font=f)


def wheel_diameter(d):
    """Diameter in pixels of the wheel resting on the bottom of the drawing (d = dark-pixel mask)."""
    ys, xs = np.where(d)
    y1, height = ys.max(), ys.max() - ys.min()
    bot = np.where(d[y1 - 6:y1 + 1].any(axis=0))[0]
    clusters = np.split(bot, np.where(np.diff(bot) > 3)[0] + 1)
    cx = int(max(clusters, key=len).mean())
    ests = []
    for h in range(int(height * 0.04), int(height * 0.22), 3):
        seg = np.where(d[y1 - h, max(0, cx - height):cx + height])[0] + max(0, cx - height)
        if len(seg) == 0:
            continue
        parts = np.split(seg, np.where(np.diff(seg) > height * 0.25)[0] + 1)
        p = min(parts, key=lambda p: abs(p.mean() - cx))
        w = p.max() - p.min()
        ests.append(h + w * w / (4 * h))
    return float(np.median(ests))


def load(fname):
    g = np.asarray(Image.open(os.path.join(HERE, fname + '.png')).convert('L')).astype(np.int16)
    dark = g < 215
    dpx = wheel_diameter(dark)
    ys, xs = np.where(g < 225)
    g = g[ys.min():ys.max() + 1, xs.min():xs.max() + 1]
    g = np.clip(g * 255.0 / 240.0, 0, 255).astype(np.uint8)
    return Image.fromarray(g), dpx


def multiply(page, gray, x, y):
    region = page.crop((x, y, x + gray.width, y + gray.height))
    page.paste(ImageChops.multiply(region, Image.merge('RGB', [gray] * 3)), (x, y))


def scale_bar(d, x, y, px_per_m):
    m = 2
    d.rectangle((x, y, x + px_per_m * m, y + 12), outline=INK, width=2)
    for i in range(0, m * 2, 2):
        d.rectangle((x + px_per_m * i / 2, y, x + px_per_m * (i + 1) / 2, y + 12), fill=INK)
    for i in range(m + 1):
        t = f'{i} m'
        d.text((x + px_per_m * i - d.textlength(t, font=F_SCALE) / 2, y + 18), t, font=F_SCALE, fill=INK)
    ft = 0.3048
    for i in range(0, 7):
        xx = x + px_per_m * ft * i
        d.line((xx, y - 10, xx, y), fill=MUTED, width=2)
    for i in (0, 3, 6):
        t = f'{i} ft'
        d.text((x + px_per_m * ft * i - d.textlength(t, font=F_SCALE) / 2, y - 44), t, font=F_SCALE, fill=MUTED)


def main():
    items = {}
    for _, _, rows in PAGES:
        for fname, name, army, wheel_m in rows:
            img, dpx = load(fname)
            m_per_px = wheel_m / dpx
            items[fname] = (img, m_per_px)
    # one scale for every chariot: the widest must fit a column, the tallest a cell
    top = int(0.62 * DPI)
    y0, y1 = top + 200, H - int(0.95 * DPI)
    rows_per_page = 4
    cell_h = (y1 - y0) / rows_per_page
    draw_h = cell_h - 130
    px_per_m = min(min(COL_W / (img.width * k), draw_h / (img.height * k)) for img, k in items.values())

    pages = []
    for title, sub, rows in PAGES:
        page = Image.new('RGB', (W, H), PAPER)
        d = ImageDraw.Draw(page)
        d.text(((W - d.textlength(title, font=F_TITLE)) / 2, top), title, font=F_TITLE, fill=RED)
        d.text(((W - d.textlength(sub, font=F_SUB)) / 2, top + 92), sub, font=F_SUB, fill=MUTED)
        d.line((MX, top + 160, W - MX, top + 160), fill=RULE, width=3)
        for i, (fname, name, army, wheel_m) in enumerate(rows):
            col, row = i % 2, i // 2
            cx0 = MX + col * (COL_W + GAP)
            if i == len(rows) - 1 and col == 0:   # a lone last chariot is centred on the page
                cx0 = MX + (USABLE - COL_W) // 2
            cy0 = y0 + row * cell_h
            ground = int(cy0 + cell_h - 110)       # wheels stand on this line; caption sits under it
            draw_name(d, (cx0 + 40, ground + 18), name)
            d.text((cx0 + 40, ground + 62), army, font=F_ARMY, fill=MUTED)
            img, k = items[fname]
            s = k * px_per_m
            img = img.resize((max(1, round(img.width * s)), max(1, round(img.height * s))), Image.LANCZOS)
            # all wheels stand on the same ground line at the bottom of the cell
            multiply(page, img, cx0 + (COL_W - img.width) // 2, ground - img.height)
        scale_bar(d, MX, H - int(0.62 * DPI), px_per_m)
        pages.append(page)

    for i, p in enumerate(pages, 1):
        p.save(os.path.join(HERE, f'chariots_spread_p{i}.png'), dpi=(DPI, DPI))
    spread = Image.new('RGB', (W * 2, H), PAPER)
    spread.paste(pages[0], (0, 0))
    spread.paste(pages[1], (W, 0))
    ImageDraw.Draw(spread).line((W, 0, W, H), fill=RULE, width=2)
    spread.save(os.path.join(HERE, 'chariots_spread.png'), dpi=(DPI, DPI))
    pages[0].save(os.path.join(HERE, 'chariots_spread.pdf'), save_all=True, append_images=pages[1:], resolution=DPI)


if __name__ == '__main__':
    main()
