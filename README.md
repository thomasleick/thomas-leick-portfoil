# Thomas Andrioli Leick — Portfolio

A static, evidence-led personal portfolio for Thomas Andrioli Leick. It is deliberately built as an engineering editorial rather than a resume template: product boundaries lead, technologies support the story, and personal signals remain secondary.

## Stack

- React 19 + TypeScript
- Vite 8
- Native CSS, SVG, `IntersectionObserver`, and `<dialog>` for interaction and motion
- No analytics, backend, external font request, UI framework, icon library, or animation dependency

This keeps the deployable output small and avoids treating decorative libraries as product requirements.

## Architecture

```text
src/
  components/       shared navigation, command palette, icons and headings
  data/             audited portfolio content model
  hooks/            progressive reveal behavior
  sections/         hero, work, engineering, personal and contact sections
  styles/           design tokens, responsive layout and motion rules
public/             favicon, social preview, robots and approved-asset slots
docs/               research, design and review records
```

Project content is data-driven in `src/data/portfolio.ts`. Update that file when a project changes, then keep descriptions constrained to evidence and update `docs/portfolio-content-audit.md` in the same change.

## Development

```bash
npm install
npm run dev
```

Quality gates:

```bash
npm run typecheck
npm run lint
npm run build
npm run preview
```

## Asset instructions

No personal photograph is currently shipped. The hero intentionally renders a clearly labelled technical portrait slot, not a fictional image. Before adding an image, follow [the portrait asset contract](public/assets/portrait/README.md): use a Thomas-owned or expressly approved image, keep originals out of `public/`, generate responsive AVIF/WebP derivatives, set dimensions and intentional crop, and use meaningful alt text.

`public/social-card.svg` is original, local artwork for social previews. It may be converted to a raster image at deploy time if a platform requires it.

## Accessibility and interaction

- Semantic landmark and heading hierarchy
- Skip link, visible focus states and keyboard-operable links/buttons
- Native modal dialogs for the mobile navigation and Cmd/Ctrl+K palette
- Pointer-independent navigation
- Motion is cosmetic; `prefers-reduced-motion` suppresses animated/reveal behavior

## Deployment readiness

The project is static-host ready after `npm run build`; publish `dist/`. Before deployment:

1. Add a canonical URL in `index.html` using the approved production origin.
2. Add a production-origin `sitemap.xml` only once that origin is final.
3. Supply approved portrait derivatives if desired.
4. Re-run visual and automated accessibility checks in the deployed browser environment.

No environment variables, secrets, contact-form relay, analytics identifiers or K-Libra runtime dependencies are required.
