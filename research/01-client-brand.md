---
phase: 1
title: Client Brand Snapshot — CEO Flow Systems
source: https://ceoflowsystems.com
captured: 2026-05-17
---

## Brand Snapshot
- **Company:** CEO Flow Systems
- **Founder:** Angel Jimenez
- **Primary Color (dark):** `#181B20` / `#191919` (near-black, charcoal)
- **Secondary Color (text/bg):** `#FEFEFD` / `#FFFFFF` (off-white)
- **Accent Color:** `#DAB25E` (champagne gold) — the signature brand color, used 9× in CSS
- **Heading font (loaded):** Inter
- **Body font (loaded):** Montserrat
- **Tone:** Confident · Direct · Consultative
- **Core Message (current):** "Get At Least 2X ROAS in 90 Days — Or You Don't Pay Us a Single Dollar"

---

## Visual Identity

### Logo
- Wordmark logo: "CEO FLOW" in dark charcoal heavy sans-serif, with an integrated gold arrow swoosh forming the "O" of FLOW.
- "SYSTEMS" set below in the gold color (`#DAB25E`).
- Dimensions of source: 754×210 PNG, transparent background.
- Stored at: `site/assets/cfs-logo-original.png`.
- The logo signals motion (swoosh) + executive level (CEO). Strong asset — should be **kept** in the rebuild.

### Color System (extracted from CSS)
| Hex | Role | Notes |
|---|---|---|
| `#DAB25E` | Champagne gold accent | The brand color. Used for "Apply Now" CTAs and section dividers. |
| `#181B20` / `#1D2127` | Primary dark | Hero / section backgrounds. |
| `#191919` | Pure charcoal | Body backgrounds. |
| `#FEFEFD` / `#FFFFFF` | Off-white | Body text on dark sections. |
| `#000321` | Deep navy | Used minimally. |
| `#222639` / `#1F1F2E` | Secondary dark | Card / box backgrounds. |
| `#0038FF`, `#188bf6` | GHL platform defaults | NOT brand — should be removed in rebuild. |

The aesthetic the brand is **reaching for**: black tie / private members club. Dark backgrounds + gold accent. The execution is currently weakened by GHL builder defaults (blue links, generic sans-serifs, no premium typography).

### Typography (current)
- CSS variables: `--headlinefont: 'Inter'`, `--contentfont: 'Montserrat'`.
- These are loaded but the page is built on GoHighLevel (GHL), which dilutes the look with stock styling.
- For "bigger players" positioning, this needs to upgrade — Inter/Montserrat is the same combo every $1K/mo agency uses.

---

## Existing Copy (verbatim, captured 2026-05-17)

### Hero
- **H1 (TO BE REPLACED):** "Get At Least 2X ROAS in 90 Days — Or You Don't Pay Us a Single Dollar"
- **Subheadline:** "If you're already spending $10K+/month on ads with a proven offer, we'll build the ad systems, tracking, and backend infrastructure that make your spend actually profitable — guaranteed."
- **Primary CTA:** "Apply Now" → `/booking-page`

### "Who We Are" — Founder positioning
> "Scaled a consulting business from zero to $1.2M/month. Managed over $20M in ad spend across industries like coaching, staffing, construction, roofing, and B2B. Built growth systems that help CEOs stop wasting money on bad tracking and broken funnels — and instead create real, profitable scale. We don't just run ads. We build the infrastructure that makes those ads actually pay off — and we back it with a guarantee."

### Why It Works (4 pillars)
- Optimize for booked calls and revenue — not just cheap leads
- Build messaging that makes you the clear choice in your market
- Integrate ads directly into your sales process, with no leaks
- See everything in a live dashboard — full transparency

### Our Process (6 steps)
1. Market Research & Avatar Deep Dive
2. Unique Mechanism Development
3. Ad Copywriting + Script Creation
4. Static Creatives + Video Editing Included
5. Initial Ad Campaign Setup
6. Tech Stack Setup & Tracking

### "Most Agencies Say Yes To Everyone. We Don't." — Qualification

**We Will Help:**
- CEOs and business owners already spending at least $5K+/month on ads
- Companies with a proven offer that converts and a sales process that closes
- Teams that have a closer or sales reps ready to take calls
- Businesses looking for predictable, profitable scale

**We Won't Help:**
- Startups or new businesses still testing if their offer works
- Companies hoping ads alone will "save" falling sales
- Anyone selling products or services that don't genuinely help their customers
- Businesses expecting results without having a closer or responding to leads fast

### Numbers / Claims (current site)
- Scaled to **$1.2M/month**
- **$20M+** in ad spend managed
- Industries: coaching, staffing, construction, roofing, B2B
- "Most clients start seeing traction within **30–45 days**"
- "Entire ad and system infrastructure live within **ten days**"
- "Generates **5–10 qualified sales calls a day**"
- Minimum eligibility: **$5K+/month ad spend** (hero says $10K+)
- ⚠ **"2X ROAS in 90 days or you don't pay"** — USER WANTS THIS REMOVED for premium repositioning.

### Missing (gaps to fill in rebuild)
- ❌ No testimonials / client quotes
- ❌ No client logos
- ❌ No case study names or numbers
- ❌ No team page
- ❌ No about page (founder bio is buried)
- ❌ No actual contact info (no phone, no email, no LinkedIn)
- ❌ No social proof of any kind
- ❌ No pricing or package structure shown
- ❌ Footer has only disclaimers — looks scammy

---

## Site Architecture (current)

| Status | URL | Purpose |
|---|---|---|
| 200 | `/` | Long-form sales page (everything lives here) |
| 200 | `/booking-page` | Calendar booking |
| 200 | `/privacy-policy-cfs` | Legal |
| 200 | `/blog` | Blog (likely empty/default) |
| 404 | `/about` | DOES NOT EXIST |
| 404 | `/contact` | DOES NOT EXIST |
| 404 | `/case-studies` | DOES NOT EXIST |

Sitemap.xml is empty. No robots.txt. SEO foundation: zero.

---

## Platform & Tech Stack
- Built on **GoHighLevel** (`leadconnectorhq.com`, `filesafe.space` CDN, `c-button` GHL class names).
- All assets served through GHL CDN.
- All fonts loaded via Google Fonts (Lato, Open Sans, Montserrat, Roboto, Inter, Abhaya Libre, Great Vibes, Aref Ruqaa — wildly over-loaded).
- No structured data / schema markup.
- No analytics visible.

---

## Tone of Voice — Existing

Confident, direct, consultative. Uses qualifying language ("If you're already…") and exclusion ("We Won't Help…") to filter. This is **good** — keep this DNA. But the *delivery* leans transactional / direct-response. For "bigger players" we need to elevate the language to **executive-grade**: less guarantee-heavy, more outcome and infrastructure-focused, more "advisor" than "vendor."

**Tone we're moving toward:**
- Authoritative without being aggressive
- Specific without being chatty
- Restrained — confidence shows in what's left unsaid
- "Operator-to-operator" — talking peer-to-peer with $5M–$50M founders

---

## Key Findings — What to Keep, Kill, Elevate

**KEEP**
- Logo (the wordmark is genuinely good — gold + charcoal + the swoosh arrow)
- The dark + gold color palette (this is the right brand for premium positioning)
- The qualification framing ("We Will Help / We Won't Help")
- The 6-step process
- The 4 "Why It Works" pillars
- The founder's actual numbers ($1.2M/mo, $20M ad spend) — these are credible

**KILL** (per user request)
- "Get At Least 2X ROAS in 90 Days — Or You Don't Pay Us a Single Dollar" headline
- Any other ROAS-guarantee language in the body copy
- The fake-urgency direct-response tone
- The "Apply Now" CTA copy (too aggressive — replace with "Request Engagement" or "Book Strategy Call")
- GHL platform stock styling (blue links, default buttons, generic spacing)
- The disclaimer-only footer (rebuild as a real footer with company info)

**ELEVATE**
- Founder positioning → dedicated "About" page with bio, photo, full history
- Build proper case study slots (even if placeholders for now)
- Add a real footer with company, LinkedIn, email
- Upgrade typography to something the others don't use (e.g. *Instrument Serif* headlines + *Inter* body — editorial premium feel)
- Add cinematic scroll animations on hero and section transitions
- Build out a real site (multiple pages: Home, About, Approach, Results, Contact)
