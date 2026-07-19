# Inner Animal

A free personality quiz that matches you to your inner animal from **130 real species** across Land, Air, and Water — from familiar favorites to genuinely bizarre creatures. Live at **[inneranimalquiz.com](https://www.inneranimalquiz.com)**.

## What it is
- Single-page quiz (`index.html`) with all styling/logic inline.
- Quiz matching logic + question vocabulary extracted to `quiz_logic.js` (shared by the browser and the test suite).
- 130 animals with distinct trait/habitat profiles in `animal_data.js`, each with WebP card art in `images/`.
- Optional Express server (`server/`) for static hosting now, and accounts + saved results later.

## Run locally
```bash
npm install
npm start            # Express server → http://localhost:8080
# or, no Node needed:
npm run dev          # python static server → http://localhost:8080
```

## Test (quiz coverage guard)
```bash
npm test
```
`server/test/coverage.test.js` proves **every one of the 130 animals can surface as a top result** and fails the build if any becomes unreachable, plus guards against dead quiz tokens and signature-penalty regressions.

## Deploy (Railway)
Static-first: `railway up --ci`. Serves `index.html` via `server/index.js`. Health check at `/healthz`. Custom domain `www.inneranimalquiz.com` via Hover DNS → Railway.

## Roadmap
- **Phase 7:** accounts + saved/synced results via a 6-digit email code (Resend) and SQLite on a Railway volume.

## Stack
GitHub · Railway · Resend · Hover — the same setup as the fleet's other apps.
