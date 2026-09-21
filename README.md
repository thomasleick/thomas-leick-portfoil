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

The hero uses the supplied portrait through optimized AVIF/WebP derivatives. The original is preserved in `source-assets/profile-original.png` outside `public/`. Before replacing or adding an image, follow [the portrait asset contract](public/assets/portrait/README.md): use a Thomas-owned or expressly approved image, keep originals out of `public/`, generate responsive derivatives, set dimensions and intentional crop, and use meaningful alt text.

`public/social-card.svg` is original, local artwork for social previews. It may be converted to a raster image at deploy time if a platform requires it.

## Accessibility and interaction

- Semantic landmark and heading hierarchy
- Skip link, visible focus states and keyboard-operable links/buttons
- Native modal dialogs for the mobile navigation and Cmd/Ctrl+K palette
- Pointer-independent navigation
- Motion is cosmetic; `prefers-reduced-motion` suppresses animated/reveal behavior

## Internationalization and SEO

English is the default route (`/`); Brazilian Portuguese is available at `/pt/`. Both routes have localized document metadata and canonical URLs, reciprocal `hreflang` links, absolute social image URLs, and entries in `public/sitemap.xml`. The build writes the Portuguese static page to `dist/pt/index.html`.

No environment variables, secrets, contact-form relay, analytics identifiers or K-Libra runtime dependencies are required. Local production build and browser QA are documented in [the QA report](docs/browser-qa-report.md); deployed browser behavior and Lighthouse metrics remain unverified.
