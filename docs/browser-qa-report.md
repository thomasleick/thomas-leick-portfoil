# Rendered browser QA report

Date: 2026-09-11  
Scope: local portfolio only. No deployment, remote mutation, provider call or K-Libra repository change.

## Execution boundary

The requested Chrome/Playwright connection was attempted through the browser-control skill. Browser discovery returned an empty list (`[]`), and Chrome selection returned `Browser is not available: chrome`. Per the browser safety boundary, no alternate browser backend, session store, cookie inspection or authenticated-source bypass was used.

This means the report contains real local preview and build evidence, but no rendered-browser certification. The correct status for browser-dependent checks is `BLOCKED`, not `PASS`.

## Viewport matrix

| Viewport | Rendered inspection | Overflow measurement | Status |
| --- | --- | --- | --- |
| 320×568 | Not executed — Chrome unavailable | Not executed | BLOCKED |
| 360×800 | Not executed — Chrome unavailable | Not executed | BLOCKED |
| 375×812 | Not executed — Chrome unavailable | Not executed | BLOCKED |
| 390×844 | Not executed — Chrome unavailable | Not executed | BLOCKED |
| 412×915 | Not executed — Chrome unavailable | Not executed | BLOCKED |
| 430×932 | Not executed — Chrome unavailable | Not executed | BLOCKED |
| 768×1024 | Not executed — Chrome unavailable | Not executed | BLOCKED |
| 1024×768 | Not executed — Chrome unavailable | Not executed | BLOCKED |
| 1280×800 | Not executed — Chrome unavailable | Not executed | BLOCKED |
| 1366×768 | Not executed — Chrome unavailable | Not executed | BLOCKED |
| 1440×900 | Not executed — Chrome unavailable | Not executed | BLOCKED |
| 1920×1080 | Not executed — Chrome unavailable | Not executed | BLOCKED |

## Keyboard and navigation

- Cmd/Ctrl+K: `UNKNOWN` — source includes a native dialog, but no runtime key event could be exercised.
- Escape, focus transfer and palette activation: `UNKNOWN`.
- Mobile menu open/close/focus return: `UNKNOWN`.
- Anchor and external links: `UNKNOWN` at runtime; source hrefs are present and target links use `rel="noreferrer"`.

## Reduced motion

`UNKNOWN` at runtime because `prefers-reduced-motion: reduce` could not be emulated in a browser. Static implementation evidence remains: `useReveal` exits when the media query matches, and the CSS media query removes animation/transition duration and exposes pending content.

## Console, network and accessibility

- Console errors: `UNKNOWN` — no browser page was available.
- Network request audit: `UNKNOWN` — no browser page was available. Local preview HTTP checks returned 200 for `/`, `/profile.avif` and the built CSS asset.
- Accessibility tree: `UNKNOWN` — no browser page was available. Source includes one H1, semantic main/footer/section landmarks, native dialogs, labeled portrait/visuals, decorative SVG hiding, skip link and visible focus styling.
- Lighthouse: `NOT_RUN` — browser capability unavailable.

## Fix record

### BEFORE_FIX

- Hero had a portrait placeholder and no CV-derived experience context.
- Supplied `profile.png` was a 1.5 MB deployable PNG.
- Asset documentation still described the portrait as unavailable.

### FIX_APPLIED

- Added the supplied portrait to the hero with `picture`, AVIF/WebP sources, explicit `720×912` dimensions, `fetchPriority="high"`, grayscale treatment and the existing technical frame.
- Removed the lime orbit marker that overlapped the forehead; the orbit line remains as the structural motif without placing a colored point over the face.
- Generated `profile.avif` (35 KB) and `profile.webp` (39 KB); moved the original to `source-assets/profile-original.png` so the unoptimized file is not deployed.
- Added a CV-sourced professional journey from Galápagos Capital, Thomson Reuters, Sparta, Tivita, Buffet GulaMania and Elis Brasil.
- Updated README, content audit and asset manifest with the new evidence and rights boundary.

### AFTER_FIX

- TypeScript, ESLint and production build pass after the changes.
- Production preview serves `/` and optimized portrait/CSS assets successfully over localhost.
- Rendered-browser, focus, overflow, reduced-motion and Lighthouse checks remain blocked pending browser availability.

## Evidence and certification status

| Evidence type | Result |
| --- | --- |
| Source/static inspection | PASS |
| `npm run typecheck` | PASS |
| `npm run lint` | PASS |
| `npm run build` | PASS |
| Vite production preview HTTP smoke | PASS |
| Rendered browser | BLOCKED |
| Lighthouse | NOT_RUN |

Unresolved: connect a Chrome/Playwright browser session and repeat this matrix, capture screenshots under `docs/qa/screenshots/`, record actual `scrollWidth/clientWidth`, exercise keyboard and reduced motion, and run Lighthouse against the production preview.
