"""Generate the share image (1200x630) and PNG/ICO icons into public/.

Usage (from the repo root, after npm install; needs Pillow):
    python scripts/generate-brand-assets.py .

Everything is drawn from the site's own brand: the 8-point gold emblem from
App.tsx, the Cinzel display font (self-hosted via @fontsource) and the
night/gold palette from index.css. No third-party game art is embedded.
"""
import sys
from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont

ROOT = Path(sys.argv[1])
OUT = ROOT / "public"
OUT.mkdir(exist_ok=True)
FONTS = ROOT / "node_modules/@fontsource/cinzel/files"

GOLD = (212, 175, 55)
GOLD_LIGHT = (240, 214, 130)
GOLD_DIM = (170, 140, 60)
NIGHT = (20, 18, 15)
DISK = (26, 23, 20)


def font(weight, size):
    return ImageFont.truetype(str(FONTS / f"cinzel-latin-{weight}-normal.woff"), size)


def emblem(size, ss=4, glow=False):
    """The masthead emblem: dark disk, gold ring, 8 gold rays (viewBox 64)."""
    s = size * ss
    im = Image.new("RGBA", (s, s), (0, 0, 0, 0))
    d = ImageDraw.Draw(im)
    k = s / 64
    r = 28 * k
    c = 32 * k
    d.ellipse([c - r, c - r, c + r, c + r], fill=DISK + (255,), outline=GOLD + (255,), width=round(3 * k))
    w = round(2.5 * k)
    for (x1, y1, x2, y2) in [(32, 12, 32, 52), (12, 32, 52, 32), (19, 19, 45, 45), (45, 19, 19, 45)]:
        d.line([x1 * k, y1 * k, x2 * k, y2 * k], fill=GOLD + (255,), width=w)
        for (x, y) in [(x1, y1), (x2, y2)]:  # round caps
            d.ellipse([x * k - w / 2, y * k - w / 2, x * k + w / 2, y * k + w / 2], fill=GOLD + (255,))
    im = im.resize((size, size), Image.LANCZOS)
    if glow:
        halo = Image.new("RGBA", (size, size), (0, 0, 0, 0))
        ImageDraw.Draw(halo).ellipse([size * 0.06] * 2 + [size * 0.94] * 2, fill=GOLD + (110,))
        halo = halo.filter(ImageFilter.GaussianBlur(size * 0.08))
        halo.alpha_composite(im)
        im = halo
    return im


def text_center(draw, cx, y, text, fnt, fill, spacing=0):
    """Draw text centered on cx, with optional extra letter spacing."""
    if not spacing:
        w = draw.textlength(text, font=fnt)
        draw.text((cx - w / 2, y), text, font=fnt, fill=fill)
        return
    widths = [draw.textlength(ch, font=fnt) for ch in text]
    total = sum(widths) + spacing * (len(text) - 1)
    x = cx - total / 2
    for ch, w in zip(text, widths):
        draw.text((x, y), ch, font=fnt, fill=fill)
        x += w + spacing


def og_image():
    W, H = 1200, 630
    im = Image.new("RGB", (W, H), NIGHT)
    # Warm radial "grace" glow behind the emblem + vignette.
    glow = Image.new("L", (W, H), 0)
    gd = ImageDraw.Draw(glow)
    for i in range(60):
        t = i / 59
        rx, ry = 620 * (1 - t) + 40, 420 * (1 - t) + 30
        gd.ellipse([W / 2 - rx, 150 - ry, W / 2 + rx, 150 + ry], fill=int(70 * t))
    glow = glow.filter(ImageFilter.GaussianBlur(60))
    im = Image.composite(Image.new("RGB", (W, H), (92, 70, 28)), im, glow)
    vig = Image.new("L", (W, H), 0)
    vd = ImageDraw.Draw(vig)
    for i in range(40):
        vd.rectangle([i * 3, i * 3, W - i * 3, H - i * 3], outline=int(150 * (1 - i / 40)))
    vig = vig.filter(ImageFilter.GaussianBlur(30))
    im = Image.composite(Image.new("RGB", (W, H), (0, 0, 0)), im, vig)
    im = im.convert("RGBA")

    em = emblem(150, glow=True)
    im.alpha_composite(em, (W // 2 - 75, 58))

    d = ImageDraw.Draw(im)
    text_center(d, W / 2, 232, "TARNISHED BUILDS", font(700, 78), GOLD_LIGHT, spacing=6)
    # gold rule
    for x in range(W // 2 - 230, W // 2 + 230):
        a = 1 - abs(x - W / 2) / 230
        d.point((x, 344), fill=GOLD + (int(255 * a),))
        d.point((x, 345), fill=GOLD + (int(160 * a),))
    text_center(d, W / 2, 372, "Elden Ring Build Planner & Stat Calculator", font(600, 40), (235, 228, 210))
    text_center(d, W / 2, 440, "OPTIMAL STATS  ·  ATTACK POWER  ·  STATUS  ·  SPELLS", font(500, 24), GOLD, spacing=2)
    text_center(d, W / 2, 530, "Includes Shadow of the Erdtree & Tarnished Edition", font(400, 24), GOLD_DIM)
    text_center(d, W / 2, 568, "tarnishedbuilds.com", font(600, 22), (200, 190, 165))
    im.convert("RGB").save(OUT / "og-image.png", optimize=True)


def icons():
    for size, name in [(48, "favicon-48.png"), (180, "apple-touch-icon.png"), (192, "icon-192.png"), (512, "icon-512.png")]:
        if name == "apple-touch-icon.png":
            # iOS masks with rounded corners and ignores transparency: give it
            # a solid night background with the emblem inset.
            bg = Image.new("RGBA", (size, size), NIGHT + (255,))
            e = emblem(int(size * 0.82))
            bg.alpha_composite(e, ((size - e.width) // 2,) * 2)
            bg.convert("RGB").save(OUT / name, optimize=True)
        else:
            emblem(size).save(OUT / name, optimize=True)
    emblem(256).save(OUT / "favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)])


og_image()
icons()
for p in sorted(OUT.iterdir()):
    print(p.name, p.stat().st_size)
