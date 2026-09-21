# Design system — Signal / Structure / Consequence

## Intent

An engineering editorial built from graphite surfaces, violet identity, restrained lime status/focus accents, large typography, generous spacing and monospace metadata. The portfolio keeps its existing visual language; K-Libra, Vocalis and AI-SDLC receive related but distinct diagrams instead of generic product cards or stock AI imagery.

## Tokens

| Token | Value | Purpose |
| --- | --- | --- |
| `--ink` | `#0a0b0f` | Near-black page background |
| `--ink-raised` | `#11131a` | Card surfaces |
| `--paper` | `#eff0f2` | Main text and contact section |
| `--muted` | `#9ca1af` | Supporting copy |
| `--faint` | `#858b9a` | Metadata with improved contrast |
| `--violet-bright` | `#c4b0ff` | Identity and interaction highlight |
| `--lime` | `#c8ff62` | Status and focus accent |

## Content and layout

- The English hero sets positioning; case studies carry problem, challenge, role, decisions, evidence, selected stack and one project-specific visual.
- K-Libra uses a selected-domain concept map and labels AI as an assistance layer whose suggestions do not own state.
- Vocalis separates current product workflow from a research-direction benchmark diagram; uncertainty states remain visible.
- AI-SDLC uses a mission-governance/evaluation flow without campaign vanity metrics.
- Portuguese uses the same typed content model and component structure through `/pt/`; labels wrap instead of being hidden with ellipses.
- Contact inverts to cold paper for a deliberate final section.

## Motion and accessibility

- Native anchors, buttons and dialogs retain keyboard behavior. The header language switch has an accessible name and active locale indication.
- A skip link precedes the page content; section headings receive focus after mobile anchor navigation.
- `:focus-visible` uses a high-contrast outline. Metadata and contact label colors were adjusted; rendered spot checks measured at least 4.56:1 for the sampled text.
- `useReveal` is cosmetic; `prefers-reduced-motion` exposes pending content and suppresses animation.
- Decorative SVGs are hidden from the accessibility tree, while case diagrams have labeled figures and meaningful content.

## Internationalized metadata

English is the root default and Portuguese (Brazil) is served at `/pt/`. Build output supplies localized document language/title/description/canonical/OG/Twitter metadata, absolute social image URLs, `hreflang` alternates, JSON-LD Person data, robots rules and a two-locale sitemap.
