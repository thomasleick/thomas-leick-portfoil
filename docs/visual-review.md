# Visual review record

Date: 2026-09-11  
Status: BLOCKED for rendered-browser certification — static layout review and local production checks complete; Chrome discovery returned an empty browser list in this session.

## BEFORE_FIX / FIX_APPLIED / AFTER_FIX

### BEFORE_FIX

- The hero used a clearly labelled portrait slot rather than a supplied image.
- The supplied portrait existed as a 1.5 MB PNG in the deployable public tree.
- The page had no CV-derived professional journey section.

### FIX_APPLIED

- Added the supplied portrait through responsive AVIF/WebP sources with explicit dimensions and intentional grayscale/crop treatment.
- Preserved the original at `source-assets/profile-original.png` and kept only 35 KB AVIF / 39 KB WebP derivatives in `public/`.
- Added a compact CV-sourced journey section while retaining the existing visual system.

### AFTER_FIX

- Typecheck, lint and Vite production build pass.
- Local Vite preview served the document and optimized assets with HTTP 200.
- Browser rendering, screenshot capture, actual overflow measurements, console inspection and Lighthouse remain blocked by unavailable Chrome.

Detailed evidence is recorded in [browser-qa-report.md](browser-qa-report.md).

## Static responsive review

| Viewport | Checked constraints | Result |
| --- | --- | --- |
| 320×568 | Minimum body width, flexible hero actions, no desktop-only nav, one-column cards | Pass by CSS inspection |
| 390×844 | Hero title uses `clamp`, cards stay single-column, native mobile dialog control | Pass by CSS inspection |
| 430×932 | No fixed content-width rule; project visual remains internally clipped | Pass by CSS inspection |
| 768×1024 | Project split, two-column capabilities and contact triptych activate at 600px | Pass by CSS inspection |
| 1280×800 | Desktop navigation, portrait asset slot and four-capability grid activate at 900/1280px | Pass by CSS inspection |
| 1440×900 | Centered max-width section rhythm and expanded interior padding | Pass by CSS inspection |
| 1920×1080 | Large-screen padding is capped around a 1440px content measure | Pass by CSS inspection |

## Defects prevented in code

- No `100vw` content containers, unbounded translated decorative objects or horizontal scroll animation are used.
- Decorative infinity and graph compositions live inside `overflow: hidden` sections.
- Title scales use `clamp()` and balance wrapping instead of fixed desktop sizes.
- The mobile navigation is a native dialog, not a hidden desktop drawer.
- Animation is cosmetic and reduced-motion suppresses it.

## Required follow-up visual loop

When a browser-control connection is available, run `npm run dev`, inspect the exact listed viewports, capture the rendered page, and verify:

1. Hero type wrapping and portrait-slot proportion.
2. K-Libra node-label collision at each width.
3. Vocal Flow waveform visibility/contrast.
4. Dialog focus return after mobile menu and command palette close.
5. Actual document `scrollWidth === clientWidth` at 320, 360, 375, 390, 412 and 430px.
6. A reduced-motion browser session.

No browser-rendered screenshot or Lighthouse score is claimed in this document.
