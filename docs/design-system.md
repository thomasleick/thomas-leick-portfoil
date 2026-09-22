# Design system — Signal / Structure / Consequence

## Intent

The visual language is an engineering editorial. It uses measured graphite surfaces, ultraviolet as a product-memory accent, cold paper for contrast and a one-pixel network grid. It avoids the tropes of a “developer template”: no technology-logo wall, neon-glow overload, fake terminal output, stock device mockups or dashboard-shaped hero.

## Tokens

| Token | Value | Purpose |
| --- | --- | --- |
| `--ink` | `#0a0b0f` | Near-black primary ground |
| `--ink-raised` | `#11131a` | Card surfaces |
| `--paper` | `#eff0f2` | Primary readable text / contact inversion |
| `--muted` | `#9ca1af` | Supporting copy |
| `--violet-bright` | `#c4b0ff` | Identity and interaction highlight |
| `--lime` | `#c8ff62` | Strictly semantic status/focus accent |
| `--line` | `rgba(239,240,242,.13)` | Structural rules |

The palette is intentionally not a green “Matrix” palette. Lime exists only as a status dot, a focus ring and one audio marker; violet holds the product reference without turning the personal identity into K-Libra branding.

## Typography

- Display: system sans with tight tracking and large editorial scale.
- Emphasis: a restrained serif italic for a single conceptual word, not whole sections.
- Technical metadata: platform monospace stack.

No network font request is used. This is privacy-preserving and prevents a font request from delaying first render. Brazilian Portuguese text can be introduced later without changing the component system.

## Layout principles

1. **A clear engineering hierarchy.** The hero names the kind of problem Thomas works on before presenting any technology.
2. **Evidence as composition.** K-Libra is visualized as a domain map; Vocal Flow as a signal timeline. Both visuals describe the product rather than decorate it.
3. **Personal references at low volume.** Chess notation, barbell geometry, coffee microcopy and the infinity path are discovered after the work, not used as branding props.
4. **Intentional inversion.** The contact region turns into cold paper to signal a genuine change of state and provide a visual landing point.
5. **Mobile is the base constraint.** One-column rhythm, minimum 320px width, clipped internal visual compositions and touchable native-dialog controls come before wider grids.

## Motion

- SVG/network traces imply connection and state propagation.
- The audio composition breathes on its own rhythm.
- Section reveals use `IntersectionObserver`; content remains present when JavaScript fails.
- Every animation is suppressed under `prefers-reduced-motion: reduce`.

No scroll-jacking, artificial loading sequence, WebGL canvas or custom cursor is used.

## Accessibility decisions

- Native anchors, buttons and dialogs carry the interaction.
- The mobile menu and command palette use native modal focus behavior.
- Decorative SVGs are hidden from the accessibility tree.
- Focus uses an intentionally high-contrast lime outline.
- All content survives disabling animation.
