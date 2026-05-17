# CEO Flow Systems — Premium Rebuild

Editorial-dark website for a boutique paid-acquisition agency targeting operator-CEOs. Pure HTML/CSS/JS + GSAP scroll animations. No framework, no build step, fully portable.

## Project Structure

```
ceoflow-rebuild/
├── research/
│   ├── 01-client-brand.md        # Brand extracted from existing site
│   ├── 02-competitor-analysis.md # Top 5 competitor audit
│   ├── 03-build-brief.md         # Master build brief
│   └── 04-quality-audit.md       # Final audit (Phase 6)
├── competitive-analysis.html     # PDF-ready client deliverable
└── site/                         # The actual website — deploy this folder
    ├── index.html                # Homepage (long-form sales)
    ├── approach.html             # The Flow Method™ deep dive
    ├── results.html              # Selected engagements
    ├── about.html                # Founder bio
    ├── contact.html              # Booking + intake form
    ├── 404.html
    ├── sitemap.xml
    ├── robots.txt
    ├── css/style.css             # Single stylesheet — full design system
    ├── js/main.js                # Header, reveals, FAQ, counters, mobile nav, GSAP parallax
    ├── legal/privacy.html
    └── assets/
        ├── favicon.svg
        ├── og-default.svg        # 1200×630 social card
        └── cfs-logo-original.png # Source logo from current site (reference)
```

## Design Decisions

- **Palette:** Champagne gold `#DAB25E` on near-black `#0E0D0C` and ink `#1A1715`. One accent owns the brand.
- **Typography:** `Instrument Serif` (editorial italic headlines) + `Inter` (body/UI). Two faces, used with discipline.
- **Tone:** Editorial, restrained, operator-grade. The previous "2X ROAS in 90 days" guarantee was removed per brief — replaced with caliber signals and a problem-statement hero.
- **The Flow Method™:** The 6-step process is named, treated as IP, and used as the centerpiece. This is the single biggest move the rebuild makes vs. competitors.

## Slots & Placeholders to Replace

These are intentionally marked in the HTML and ready for content drop-in:

| Where | What | Notes |
|---|---|---|
| `index.html` hero | `<!-- 3D SCROLL ASSET HERE -->` inside `.hero-3d-slot` | Drop a 1080×1080 `.webm` or `.mp4` (dark/transparent bg). Generate with the Image Generator skill. |
| `index.html` logo strip | 5 logo slots (currently industry placeholders) | Replace with real client brand marks. Keep to 5 max — fewer, higher-quality. |
| `index.html` & `results.html` | Case study cards marked `<!-- CASE STUDIES — REPLACE -->` | Currently illustrative metrics. Swap for actual numbers with permission. |
| `about.html` | `.founder-photo-slot` | Drop a 4:5 editorial portrait (black-and-white or warm desaturated). |
| `contact.html` form action | `action="https://ceoflowsystems.com/booking-page"` | Wire to actual form handler (Formspark, Basin, Netlify Forms, or GHL endpoint). |
| Throughout | `hello@ceoflowsystems.com`, `linkedin.com/in/angel-jimenez` | Replace with real contact addresses if different. |

## Deployment

### Option 1 — Vercel (recommended for instant preview)

```bash
cd site/
npx vercel
```

Or drag the `site/` folder into the Vercel dashboard. The site is static — no build configuration required.

### Option 2 — Netlify

```bash
cd site/
npx netlify deploy --prod
```

Or drag the `site/` folder into the Netlify drop interface. `_redirects` not required for the multi-page structure since all links resolve to `.html` files.

### Option 3 — Cloudflare Pages

```bash
cd site/
npx wrangler pages deploy .
```

### Option 4 — Any static host

The entire `site/` folder works as-is on GitHub Pages, S3 + CloudFront, Render, Fly.io static sites, or a plain web server. There is no build step.

### Pretty URLs (optional)

If you want `/approach` instead of `/approach.html`, add to your host's redirects config:
- **Vercel:** `vercel.json` with `cleanUrls: true`
- **Netlify:** `_redirects` with `/approach /approach.html 200`
- **Cloudflare:** built-in via "Compatibility settings → cleanURLs"

## Performance Notes

- Fonts loaded with `preconnect` + `display=swap`.
- GSAP and ScrollTrigger loaded from CDN with `defer` — non-blocking.
- All images use SVG (favicon, OG card) where possible.
- `prefers-reduced-motion` respected: reveals and parallax disabled when user opts out.
- No external trackers or analytics installed yet — add to `<head>` of each page if needed.

## Lighthouse Targets

- Performance: ≥90 (lightweight CSS, deferred JS, no heavy images)
- Accessibility: ≥95 (semantic HTML, contrast verified, ARIA on toggles)
- SEO: ≥95 (per-page meta, schema, sitemap, canonical, OG)
- Best practices: ≥95

## Editing Content

All content is in plain HTML. Each section has clear semantic boundaries. To change copy:

1. Open the relevant `.html` file (e.g. `index.html`)
2. Find the section by its `<section class="...">` wrapper
3. Edit the text directly

To change colors or typography, edit the CSS variables at the top of `css/style.css`:

```css
:root {
  --gold: #DAB25E;
  --ink-deep: #0E0D0C;
  /* ... */
}
```

## Removed (per brief)

The original site's "2X ROAS in 90 Days or You Don't Pay Us" guarantee has been removed entirely. Hero, body copy, and CTAs were repositioned for caliber signaling rather than risk-reversal — premium-buyer positioning, not direct-response.

---

Generated 2026-05-17.
