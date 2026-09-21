# Rendered browser QA report

Date: 2026-09-21
Scope: local production preview only. No deployed URL, authenticated customer surface, provider, or remote mutation was used.

## Build and browser

The Vite production build was served with `npm run preview -- --host 0.0.0.0` at `http://127.0.0.1:4173/`. The build generated both `dist/index.html` and `dist/pt/index.html`. English is the root route; Portuguese is `/pt/`.

| Viewport | English | Português (Brasil) | Horizontal overflow |
| --- | --- | --- | --- |
| 1440×900 | Rendered | Rendered | None |
| 1280×800 | Rendered | Rendered | None |
| 768×1024 | Rendered | Rendered | None |
| 390×844 | Rendered | Rendered | None |

For each locale/viewport, `document.documentElement.scrollWidth` stayed within `window.innerWidth`; case cards fit the content width and all stack labels fit their own boxes. The portrait loaded. Cases stack into one column below 600px and use the split editorial layout at 768px and above. The 768px and 390px layouts use compact navigation; desktop navigation is shown at 1280px and above.

## Functional and keyboard checks

- Language switch: EN → PT and PT → EN changed the URL while preserving `#work`; the document language, title, canonical URL and Open Graph URL changed to match the selected locale.
- Mobile navigation: dialog opens from the menu button. Following the Contact anchor closes it, updates the hash and moves focus to `contact-title`.
- Command palette: Ctrl+K opens the labeled native dialog and focuses its search input. ArrowDown moves to a result; Escape closes the dialog and restores focus to the prior section heading.
- Skip link: the first Tab reveals “Pular para o conteúdo”; Enter moves focus to `main#main-content` and updates the hash.
- Reduced motion: `prefers-reduced-motion: reduce` reduces computed animation duration to `0.00001s` and keeps reveal content visible.
- Accessibility snapshot: one H1, named page regions, labeled dialogs/navigation, descriptive portrait text and the skip link were present.
- Console: 0 errors and 0 warnings. No broken image was observed.
- External links were inspected in source and the rendered tree; destination sites were not opened.

## Contrast spot checks

Rendered text contrast was measured against its composited background. Examples: muted metadata on graphite 5.77:1, case stack labels on graphite 15.22:1, contact labels on paper 5.33:1, and footer text on paper 4.56:1. These spot checks address the previously low-contrast metadata; they are not a full automated WCAG audit.

## SEO spot checks

- Root reports `lang=en`, its own canonical and absolute English Open Graph/Twitter image URLs.
- `/pt/` reports `lang=pt-BR`, a Portuguese title/description, its own canonical and absolute Portuguese Open Graph/Twitter image URLs.
- Both routes carry `en`, `pt-BR` and `x-default` alternate links. The build output includes `robots.txt` and `sitemap.xml`.
- JSON-LD remains a Person entity with existing public profile URLs. No organization, award, publication or credential claims were added.

## Limits

This is local browser evidence, not production behavior. Lighthouse and deployed Core Web Vitals were not run. A full-page screenshot was used for a visual pass; offscreen reveal elements are intentionally activated by scrolling, so the screenshot alone is not treated as evidence that those sections are hidden during normal use.

The production build emits a 269.65 KB JavaScript bundle (83.63 KB gzip) and 37.58 KB CSS (8.03 KB gzip). These are build artifact sizes, not page-load timing or Core Web Vitals. No dependency was added for the case diagrams or language model.

## Gate results

| Check | Result |
| --- | --- |
| `npm run typecheck` | PASS |
| `npm run lint` | PASS |
| `npm run build` | PASS |
| `npm test` | NOT AVAILABLE — no test script is defined |
| Local Playwright browser QA | PASS for listed checks |
| Lighthouse / deployed performance | NOT RUN |
