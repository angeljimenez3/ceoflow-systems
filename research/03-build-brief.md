---
phase: 4
title: Build Brief — CEO Flow Systems Website Rebuild
date: 2026-05-17
---

## Positioning Pivot

**Before:** A direct-response sales page with a 2X-ROAS guarantee. Reads as a $997 agency funnel.

**After:** A boutique consultancy site for operator-CEOs spending $10K+/month on ads. Caliber-led, restrained, editorial. No guarantee theatre. The competitive analysis identified one open positioning lane and we're taking it: **dark, editorial, champagne, with a named methodology — for operators.**

---

## Design Direction

### Color System (final)
| Hex | Token | Usage |
|---|---|---|
| `#0E0D0C` | `--ink-deep` | Page backgrounds (pure black w/ warmth) |
| `#1A1715` | `--ink` | Section backgrounds, cards |
| `#242020` | `--ink-soft` | Subtle dividers, secondary surfaces |
| `#DAB25E` | `--gold` | The signature champagne — buttons, accents, key marks |
| `#C9A25A` | `--gold-deep` | Hover, lower hierarchy gold |
| `#F4EDE0` | `--cream` | Off-white text on dark, secondary surfaces |
| `#A89F8E` | `--cream-muted` | Body copy on dark |
| `#0E0D0C` | text on cream | High contrast for any reversed sections |

Single accent discipline (pattern #3). No blue links. No GHL defaults.

### Typography (final)
**Headlines:** `Instrument Serif` — editorial serif, italics for emphasis. Signals premium / publication / advisory.
**Body + UI:** `Inter` — workhorse sans, used at 400 / 500 / 600.
That's it. Two faces. (Pattern #1.)

### Photography / Asset Style
- No stock photography ever.
- Founder photo: black-and-white or warm desaturated. Editorial portrait, not corporate headshot.
- Section visuals: abstract, minimal — gold-on-dark generative shapes, OR clean dashboard screenshots if available.
- Hero asset placeholder: 3D scroll-stop video (will be generated separately with Image Generator skill).

### Animation
- Scroll-triggered fade-up on every section using GSAP + ScrollTrigger.
- Hero: parallax depth on background mark, slow gold drift.
- Hover micro-interactions on every CTA — gold underline draw, subtle elevation.
- Numbers count up on enter for the stat row.
- All respect `prefers-reduced-motion`.

### What to AVOID
- "Apply Now" everywhere (too aggressive). Use "Request Engagement" / "Book Strategy Call" / "Begin a Conversation."
- Multiple guarantee callouts.
- Doodle illustrations (KlientBoost's lane).
- Founder cult-of-personality energy (Acquisition.com's lane).
- Dense logo strips (Disruptive's mistake).
- Any direct-response urgency theater.

---

## Site Architecture

| Page | Path | Purpose |
|---|---|---|
| Home | `/` | Single long-form page that does the heavy lifting |
| Approach | `/approach` | Deep dive on **The Flow Method™** — the 6-step framework |
| Results | `/results` | Case studies / outcomes (placeholders OK, structure first) |
| About | `/about` | Founder bio, philosophy, why this exists |
| Contact | `/contact` | Booking + direct email/LinkedIn |
| Privacy | `/legal/privacy` | Legal |

Navigation: Home · Approach · Results · About · Contact · `[Book Strategy Call]` (gold pill)

---

## Homepage Structure (section-by-section)

1. **Hero**
   - Eyebrow: "FOR OPERATORS SPENDING $10K+/MONTH ON ADS"
   - H1 (editorial serif): *"Most ad spend leaks out the back. We rebuild the system underneath."*
   - Sub (Inter): "CEO Flow Systems is a boutique paid-acquisition partner for founders who already have a working offer — and a margin problem hiding inside their spend."
   - Primary CTA: `Book a Strategy Call` (gold)
   - Secondary CTA: `See The Flow Method` (ghost / gold outline)
   - 3D asset placeholder marked.

2. **Caliber strip**
   - "$20M+ managed · $1.2M/mo peak scaled · 8 industries · 1 standard"
   - 4 stats animated count-up.

3. **Client logo row** (placeholder — 5 spots maximum, monochrome at 40% opacity)
   - Marked clearly: `<!-- CLIENT LOGOS — REPLACE WITH ACTUAL -->`

4. **The Problem** (editorial sentence)
   - *"You're not under-spending. You're under-tracked, under-modeled, and over-creative-fatigued."*
   - Three diagnostic bullets — paraphrased from existing "Why It Works."

5. **The Flow Method™** (the named methodology — biggest move)
   - Eyebrow: "OUR METHODOLOGY"
   - H2: "The Flow Method™"
   - Sub: "Six phases. One outcome: ad spend that compounds."
   - 6 phase cards with the existing process content, but renamed:
     1. **Diagnose** — Market Research & Avatar
     2. **Position** — Unique Mechanism Development
     3. **Compose** — Ad Copy + Scripts
     4. **Produce** — Creative + Editorial Video
     5. **Deploy** — Campaign Architecture
     6. **Instrument** — Tracking, Attribution, CRM
   - Link: `Go deeper on The Flow Method →` (links to `/approach`)

6. **Why Operators Choose Us** (the 4 pillars, rewritten)
   - Optimized for revenue, not lead volume
   - Built into your sales process, not bolted onto it
   - One operating dashboard, full transparency
   - Senior operators only — no juniors

7. **Qualification section** — *KEEP this DNA, rewrite for premium tone*
   - "Most agencies say yes to everyone. We don't."
   - Two columns: "We Work With" / "We Don't"
   - Editorial framing, not bullet bingo

8. **Founder voice** (pulled-quote, editorial)
   - Large italic serif: *"After $20M in ad spend across eight industries, what I've learned is that great creative without infrastructure just makes you lose money faster. The work is the system underneath."*
   - — Angel Jimenez, Founder

9. **Selected Engagements** (case study placeholders, 3 cards)
   - Card structure: industry · headline outcome · one metric · "Read engagement →"
   - Marked: `<!-- CASE STUDIES — REPLACE -->`

10. **FAQ** (5 questions, editorial)
    - "Who do you work with?"
    - "How is this different from a typical ads agency?"
    - "What's involved in The Flow Method?"
    - "How long until results?"
    - "What's the engagement structure?"

11. **Closing CTA**
    - Editorial serif: *"Spend that compounds doesn't come from louder ads. It comes from a system underneath."*
    - `Book a Strategy Call` (large gold)

12. **Footer**
    - Logo · short company line · nav · contact · LinkedIn · legal
    - **Remove the disclaimer-soup footer.** Replace with a real footer.

---

## Content Framework

### Headline options (three to pick from)
1. **(Recommended)** *"Most ad spend leaks out the back. We rebuild the system underneath."*
2. *"You don't have an ads problem. You have an infrastructure problem."*
3. *"Senior ad infrastructure for founders who've already proven the offer."*

### Headline formula used
Problem accusation → reframing → implicit qualification. Same pattern as Disruptive / Tier 11, but written in editorial register.

### Value proposition structure
1. Who: $10K+/month operator-CEOs with proven offer
2. Pain: spend is leaking; tracking, creative, sales-integration broken
3. Mechanism: The Flow Method™ — 6 phases
4. Outcome: ad spend that compounds, not consumes

### SEO keyword targets (low-hanging, intent-matched)
- "paid acquisition agency for CEOs"
- "ad infrastructure agency"
- "high-ticket ads agency"
- "Meta ads agency for established businesses"
- "Go High Level ads agency"
- "boutique paid social agency"
- "ad tracking and attribution setup"

These get added to homepage + dedicated pages with proper H1/H2 structure and schema.

---

## Conversion Playbook

### Primary conversion
**Book Strategy Call** → calendar embed (keep `/booking-page` route until calendar lives at new path).

### Lead capture
- Single primary CTA: book strategy call.
- No "free download" / "free guide" lead magnets — wrong category for the positioning.
- Pre-qualifying intake form on the booking page: ad spend, industry, current bottleneck.

### Social proof plan
- Above fold: 5-logo strip (placeholder slots).
- Stat strip with the actual numbers ($20M, $1.2M/mo, 8 industries).
- Case study cards mid-page (placeholders structured for 3 engagements).
- Pulled founder quote (already have credible language).
- Footer: LinkedIn link to founder (if available).

### Trust signal checklist
- ✓ Real founder name, photo, bio on /about
- ✓ Real contact email (not contact form only)
- ✓ Sourced numbers in caliber strip
- ✓ Editorial tone — confidence shows through restraint
- ✓ Privacy policy linked properly
- ✓ Schema markup (Organization + ProfessionalService)

---

## Tech Stack & Build Decisions

- **Pure HTML + CSS + JavaScript** — no Next.js / React for the rebuild. Maximum portability, easy to drop into any host, fast.
- **GSAP 3 + ScrollTrigger** from CDN for scroll animations.
- **Google Fonts:** Instrument Serif + Inter only.
- **Lighthouse 90+ target.**
- **Mobile-first responsive.**
- **Multi-page**, semantic HTML5, schema.org markup, OG tags per page.
- Output goes in `ceoflow-rebuild/site/`.
- 3D hero asset slot clearly marked for the user to drop in later.

---

## Auto-Approved — Proceeding to Build

Per auto mode: not waiting for explicit approval, proceeding to Phase 5. If anything in this brief is wrong (color, methodology name, headline, missing page), say so and I'll course-correct mid-build.
