"""Compose the spear illustrations into a two-page rulebook spread (8x10 in pages, 300 dpi).

Every spear is scaled to its real length (same metres-per-inch on both pages); the sarissa,
too long for the page, is drawn with a break in its pole.
Run from the repo root:  python3 art/spears/build_spread.py
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
MX = int(0.6 * DPI)                      # side margin
USABLE = W - 2 * MX
LONGEST = 3.7                            # contus, the longest unbroken spear (m)
PX_PER_M = USABLE / LONGEST

# (file, name, army, length in metres, note)
PAGES = [
    ('Spears I', 'The Bronze Age to Alexander', [
        ('sumerian_spear', 'Sumerian Spear', 'Sumerian Kingdom', 2.0),
        ('egyptian_spear', 'Egyptian Spear', 'Dynastic Egypt', 1.8),
        ('sukur', 'ŠUKUR', 'Hittite Empire', 2.0),
        ('enchos', 'Énchos', 'Sea People Raiders', 2.0),
        ('assyrian_spear', 'Assyrian Spear', 'Neo-Assyrian Empire', 2.0),
        ('assyrian_lance', 'Assyrian Cavalry Lance', 'Neo-Assyrian Empire', 2.8),
        ('arshti', 'Aršti', 'Achaemenid Persia', 2.0),
        ('dory', 'Dóry', 'Classical Greece', 2.5),
        ('sarissa', 'Sarissa', 'Armies of Alexander', 5.5),
        ('xyston', 'Xyston', 'Armies of Alexander', 3.5),
        ('kushite_spear', 'Kushite Spear', 'Kingdom of Kush', 2.0),
    ]),
    ('Spears II', 'From the Ganges to Tenochtitlan', [
        ('prasa', 'Prāsa', 'Mauryan Empire', 2.0),
        ('kunta', 'Kunta', 'Mauryan Empire', 3.0),
        ('mao', 'Máo', 'Qin China', 2.5),
        ('pi', 'Pī', 'Qin China', 3.5),
        ('libyan_spear', 'Libyan Spear', 'Hannibal’s Forces', 2.2),
        ('celtic_spear', 'Celtic Spear', 'European Barbarians', 2.2),
        ('framea', 'Framea', 'European Barbarians', 2.0),
        ('hasta', 'Hasta', 'Imperial Rome', 2.0),
        ('contus', 'Contus', 'Cataphracts', 3.7),
        ('tepoztopilli', 'Tepoztōpīlli', 'Aztec Empire', 2.0),
    ]),
]


def font(name, size):
    return ImageFont.truetype(os.path.join(FONTS, name + '.ttf'), size)


F_TITLE = font('Cinzel-700', 70)
F_SUB = font('EBGaramond-Italic-400', 40)
F_NAME = font('Cinzel-700', 38)
F_ARMY = font('EBGaramond-Italic-400', 34)
F_LEN = font('SourceSans3-600', 28)
F_SCALE = font('SourceSans3-400', 26)


def load(fname):
    """Grayscale spear, cropped to the drawing, plus the row of its pole axis."""
    g = np.asarray(Image.open(os.path.join(HERE, fname + '.png')).convert('L')).astype(np.int16)
    dark = g < 225
    ys, xs = np.where(dark)
    x0, x1, y0, y1 = xs.min(), xs.max() + 1, ys.min(), ys.max() + 1
    g = g[y0:y1, x0:x1]
    # pole axis: the row with the most dark pixels across the whole length
    axis = int(np.argmax((g < 200).sum(axis=1)))
    # lift the slightly grey background to pure white so it multiplies cleanly onto paper
    g = np.clip((g - 0) * 255.0 / 240.0, 0, 255).astype(np.uint8)
    return Image.fromarray(g), axis


POLE_PX = 15                            # drawn pole thickness on the page, the same for every spear


def pole_thickness(img, axis):
    g = np.asarray(img)
    runs = []
    for x in range(int(img.width * 0.3), int(img.width * 0.6), 7):
        col = g[:, x] < 215
        if not col[axis]:
            continue
        a = b = axis
        while a > 0 and col[a - 1]:
            a -= 1
        while b < len(col) - 1 and col[b + 1]:
            b += 1
        runs.append(b - a + 1)
    return float(np.median(runs)) if runs else 20.0


def scaled(fname, metres, max_px):
    img, axis = load(fname)
    target = metres * PX_PER_M
    kx = target / img.width
    # scale height so every pole comes out equally thick, within limits so heads aren't distorted much
    ky = min(max(POLE_PX / pole_thickness(img, axis), kx * 0.6), kx * 1.15)
    img = img.resize((round(img.width * kx), max(1, round(img.height * ky))), Image.LANCZOS)
    axis = round(axis * ky)
    if img.width <= max_px:
        return img, axis, None
    # too long: cut a section out of the pole, keeping the butt end and the head
    gap = 46
    keep_right = int(img.width * 0.14)
    keep_left = max_px - keep_right - gap
    out = Image.new('L', (max_px, img.height), 255)
    out.paste(img.crop((0, 0, keep_left, img.height)), (0, 0))
    out.paste(img.crop((img.width - keep_right, 0, img.width, img.height)), (keep_left + gap, 0))
    return out, axis, keep_left + gap // 2


def multiply(page, gray, x, y):
    region = page.crop((x, y, x + gray.width, y + gray.height))
    rgb = Image.merge('RGB', [gray] * 3)
    page.paste(ImageChops.multiply(region, rgb), (x, y))


def scale_bar(d, x, y):
    m = 3
    d.rectangle((x, y, x + PX_PER_M * m, y + 12), outline=INK, width=2)
    for i in range(m):
        if i % 2 == 0:
            d.rectangle((x + PX_PER_M * i, y, x + PX_PER_M * (i + 1), y + 12), fill=INK)
    for i in range(m + 1):
        t = f'{i} m'
        w = d.textlength(t, font=F_SCALE)
        d.text((x + PX_PER_M * i - w / 2, y + 18), t, font=F_SCALE, fill=INK)
    ft = 0.3048
    for i in range(0, 10):
        xx = x + PX_PER_M * ft * i
        d.line((xx, y - 10, xx, y), fill=MUTED, width=2)
    for i in (0, 3, 6, 9):
        t = f'{i} ft'
        d.text((x + PX_PER_M * ft * i - d.textlength(t, font=F_SCALE) / 2, y - 44), t, font=F_SCALE, fill=MUTED)


def build(title, sub, rows, left_page):
    page = Image.new('RGB', (W, H), PAPER)
    d = ImageDraw.Draw(page)
    top = int(0.62 * DPI)
    tw = d.textlength(title, font=F_TITLE)
    d.text(((W - tw) / 2, top), title, font=F_TITLE, fill=RED)
    sw = d.textlength(sub, font=F_SUB)
    d.text(((W - sw) / 2, top + 92), sub, font=F_SUB, fill=MUTED)
    d.line((MX, top + 160, W - MX, top + 160), fill=RULE, width=3)

    y0, y1 = top + 200, H - int(0.95 * DPI)
    step = (y1 - y0) / len(rows)
    for i, (fname, name, army, metres) in enumerate(rows):
        ry = y0 + step * i
        d.text((MX, ry), name, font=F_NAME, fill=INK)
        nw = d.textlength(name, font=F_NAME)
        d.text((MX + nw + 22, ry + 6), army, font=F_ARMY, fill=MUTED)
        lt = f'{metres:g} m'
        d.text((W - MX - d.textlength(lt, font=F_LEN), ry + 8), lt, font=F_LEN, fill=MUTED)
        img, axis, brk = scaled(fname, metres, USABLE)
        cy = int(ry + 58 + (step - 58) / 2)
        x = W - MX - img.width          # all tips aligned on the right margin
        multiply(page, img, x, cy - axis)
        if brk is not None:
            bx = x + brk
            for dx in (-10, 10):
                d.line((bx + dx - 9, cy + 24, bx + dx + 9, cy - 24), fill=INK, width=4)
    scale_bar(d, MX, H - int(0.62 * DPI))
    return page


def main():
    pages = [build(t, s, r, i == 0) for i, (t, s, r) in enumerate(PAGES)]
    for i, p in enumerate(pages, 1):
        p.save(os.path.join(HERE, f'spears_spread_p{i}.png'), dpi=(DPI, DPI))
    spread = Image.new('RGB', (W * 2, H), PAPER)
    spread.paste(pages[0], (0, 0))
    spread.paste(pages[1], (W, 0))
    ImageDraw.Draw(spread).line((W, 0, W, H), fill=RULE, width=2)
    spread.save(os.path.join(HERE, 'spears_spread.png'), dpi=(DPI, DPI))
    pages[0].save(os.path.join(HERE, 'spears_spread.pdf'), save_all=True, append_images=pages[1:], resolution=DPI)


if __name__ == '__main__':
    main()
