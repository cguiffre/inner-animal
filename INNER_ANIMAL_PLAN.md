# Inner Animal — Review Findings & Implementation Plan

**Date:** 2026-07-19  **Domain:** https://www.inneranimalquiz.com (Hover, live)
**Stack target:** GitHub + Railway + Resend + Hover, mirroring the Dungeon Geek setup.
**Decisions locked:** Warm Notion-style light theme · Static-first launch then backend · Full quiz fix + automated coverage test.

---

## 1. Current state (verified)

- Single-file app: `index.html` (1,756 lines, inline CSS/JS) + `animal_data.js` (130 animals) + `images/` (83 PNGs, ~141 MB) + a `.numbers` "Image Builder" holding per-animal art prompts.
- No repo, no backend, no build, no tests, no SEO. Data persists only in `localStorage`.

### Three problem clusters

**A. Quiz coverage is broken (the headline bug).** Only ~46% of animals can ever be a result.
- 61 of 130 animals are unreachable; ~70 never appear across 300k simulated playthroughs.
- Root causes: (1) theme-packs of 6–7 animals share **identical** trait vectors → stable sort always returns the first, twins never win; (2) the tokens that distinguish twins are **never emitted** by any quiz question (333 of 389 animal tokens are unreachable); (3) `signature` traits weighted 2 inflate the denominator without ever matching → they **penalize** distinctive/rare animals; (4) 21 quiz tokens match **zero** animals and dilute every score via `normalize()`; (5) duplicate `"signature"` object keys silently drop tokens.

**B. Images: ~65 animals render broken.** 130 animals, ~18 real animal images. `AnimalCardArt` (index.html:664) emits `<img>` with **no `onerror` fallback** to the existing `AnimalSVGById`, so missing art shows broken-image icons in Zoo, Hall, and results. A few orphans are salvageable renames; several are dead (removed animals) or duplicates.

**C. Design / a11y / perf / SEO.**
- P0 a11y: the **entire quiz is click-only `<div>`s** — keyboard & screen-reader users cannot take it. No `:focus-visible` anywhere.
- P0 SEO: `<head>` has only `<title>Inner Animal</title>` — no description, OG/Twitter, favicon, canonical, JSON-LD.
- P0 perf: banners are **1.75 MB PNGs** as CSS backgrounds (can't lazy-load); ~5.5 MB of dead root PNGs; animal PNGs up to 2.48 MB.
- Visual identity reads as a generic dark "crypto dashboard" (blue→green gradient + glow) that fights the playful content.

---

## 2. Implementation plan (phased)

### Phase 0 — Repo & salvage ($0)
- `git init`, `.gitignore` (node_modules, data/, .DS_Store), `package.json` + folder layout mirroring Dungeon Geek (`server/`, `images/`, `dist/`, build script).
- Salvage orphan images by rename: `opossum→virginia_opossum`, `porcupine→north_american_porcupine`, `thorny_dragon_glider→agamidae_glider`, `giant_pangolin→pangolin`, one `river_otter→north_american_river_otter`. Delete dupes/dead art (`racoon`, `snow_leopard`, `tiger`, `zebra`, `yak`, `hedgehog`, `honey_badger`, `sun_bear`, `vulture`, `gila_monster`, `lamprey`, `giant_squid`, `armadillo_glyptodon`) and dead root PNGs (`hero_banner.png`, `quiz_banner.png`, `hero_banner - old.png`).
- **Quick win:** add `onerror` fallback so any missing image degrades to `AnimalSVGById` instead of a broken icon.

### Phase 1 — Fix quiz logic (core requirement) + coverage test
- BUG 5: merge duplicate `"signature"` keys (index.html:459,460,503,561,570,583,611…).
- BUG 4: remap the 21 zero-match quiz tokens onto real animal traits (or drop from `trait_boosts`).
- BUG 3: compute vector magnitude over **reachable** tokens only; add signature weight to the numerator only when matched.
- BUG 2 + 1: make each theme-pack's distinguishing token **reachable** (add/rework quiz options that emit them) so twins separate on real answers; add a deterministic-but-fair tie-break as a backstop.
- BUG 6: delete dead code (`cosine`, `vectorizeAnimalTraits`, `fallbackShortlist`).
- **Coverage guard:** port the analysis Monte-Carlo into a repeatable test (`server/test/coverage.test.js` or a build check) that **fails if any animal is unreachable**. This is the automated "triple-check."

### Phase 2 — Generate missing images (~$2.50–$6 via Banana)
- Parse `Inner Animal List - Image Builder.numbers` with `numbers-parser` → per-animal prompt + shared style suffix ("deep navy/indigo gradient… reads clearly at small card size"). Fallback: derive prompts from `animal_data.js` + suffix.
- Generate ~65 missing card illustrations (Gemini Nano Banana, ~$0.039 each). Name each `images/<animal_id>.png`.
- Convert the whole `images/` set to WebP for perf (keep IDs).

### Phase 3 — Design overhaul (warm Notion-style light theme)
- **A11y P0:** convert all quiz/lane/card options to real `<button>`s (or `role="button" tabindex="0"` + Enter/Space); add a global `:focus-visible` ring; `aria-current` on active nav; `aria-label`s on `×` delete buttons; label the slider.
- **Theme:** light canvas (`#fff`/`#f6f5f4`), one purple accent (`#5645d4`), kill blue→green gradient + glow. Map realm→tint (Land=mint, Air=sky, Water=lavender) so color *means* something. Modular type scale (48/36/28/22/18/16/14), 4px spacing grid, tighter radii. Animal art as hero, not gradient bands.
- **Responsive:** collapse 6-item nav to hamburger/scroll under ~810px; make slider `width:100%`.
- **Motion:** 150–200 ms cross-fade between questions, `transition:width` on progress fill, confidence count-up, a brief reveal moment.

### Phase 4 — Performance
- WebP banners (1.75 MB → ~50 KB), `fetchpriority` on hero, `defer` on `animal_data.js`, `decoding="async"` on images. Confirm CLS stays clean (ratio-boxes already present).

### Phase 5 — SEO / agentic search
- Full `<head>`: keyword-rich title ("Inner Animal — What's Your Spirit Animal? Free Personality Quiz"), meta description, OG + Twitter `summary_large_image`, canonical, favicon + apple-touch-icon (reuse inline SVG logo), `theme-color`, `robots`.
- `robots.txt`, `sitemap.xml`, `llms.txt`, and JSON-LD (`WebApplication` + `Quiz`).

### Phase 6 — Deploy static (STATIC-FIRST LAUNCH) 🚀
- GitHub repo `cguiffre/inner-animal` (private). Railway service + static serve. Hover DNS → Railway (`www.inneranimalquiz.com` + apex 302), SSL. **App is live here.**

### Phase 7 — Backend (right after launch)
- Mirror Dungeon Geek `server/`: Express + better-sqlite3 on a Railway `/data` volume; session cookies; config/env.
- **6-digit email code sign-in via Resend** (not a magic link — per the Design Lens learning that dodges Google Safe Browsing false-positives). HTML button + text fallback, click-tracking off.
- Persist quiz results per account + sync across devices (Users/Zoo/Hall backed by DB). Server tests. Redeploy `railway up --ci`.

### Phase 8 — Fleet / Graphify / docs
- `graphify .` build + Fleet Command onboarding + `/project-architecture` map.
- Update `PROJECTS.md`, add `inner-animal.md` memory + MEMORY.md pointer, repo `CLAUDE.md`, README.

---

## 3. Cost & risk
- **Only spend:** ~$2.50–$6 for Banana image generation. Railway/Resend/Hover within existing usage; domain already bought.
- **User-action gates (will hand off when reached):** Hover DNS records, Railway env vars/volume, Resend domain/key, GitHub repo creation if not pre-authed.
- **Risk controls:** coverage test prevents regressions; static-first keeps launch low-risk; 6-digit code avoids the Safe-Browsing flag that hit sibling apps.
