# Architecture Notes

_Last discovery run: 2026-07-20T17:13:39-04:00 (project-architecture skill)_

## Status
- 5 components (4 confirmed, 1 inferred, 0 needs-review), 4 flows.
- Added this run: none.
- Scanner-unconfirmed (not a user review): none.

## Assumptions
- Flows are inferred from co-presence of components plus known integration patterns; mark them `confirmed` in architecture-map.json after human review.
- Component descriptions are auto-set to plain-language summaries each run; to keep a hand-written one, set `"manual": true` on that component in architecture-map.json.
- 'external-app' stations are other live fleet apps this one links out to (detected from landing-page links); extend the FLEET_APPS list in discover_architecture.py to add more.
- .env files were scanned for variable NAMES only; values were never read.

## Open questions
- none

## Asset usage
- `moonbase-bg.jpg` — local: background (shared moon-base theme, seeded on discovery ($0))
- `mission-patch.png` — local: patch (header emblem) (shared moon-base theme, seeded on discovery ($0))

<!-- manual-notes:start -->
_(add manual notes here — preserved across runs)_
<!-- manual-notes:end -->
