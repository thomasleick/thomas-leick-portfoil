# Asset manifest

| Asset | Status | Origin / rights | Delivery |
| --- | --- | --- | --- |
| `public/favicon.svg` | Included | Original local vector artwork | Inline-safe SVG, 64×64 |
| `public/social-card.svg` | Included | Original local vector artwork | 1200×630 SVG social preview |
| Hero portrait | Missing by design | Thomas must supply/approve ownership or license | Required future AVIF/WebP derivatives documented in `public/assets/portrait/README.md` |
| Lifestyle portrait | Optional / missing | Thomas must supply/approve ownership or license | Lazy-loaded AVIF/WebP only if added |
| Instagram imagery | Not used | No image downloaded; authenticated session unavailable | Do not hotlink |
| K-Libra imagery | Not used | Product screenshots not necessary to make source-backed claims | Use only if future capture/rights are confirmed |
| Monster marks / artwork | Not used | Third-party brand/trade dress | Text-only reference permitted by brief; no logo/claw artwork |

## Image budget for future supplied photography

- Hero AVIF: target ≤ 180 KB at 1600px width.
- Hero WebP fallback: target ≤ 260 KB at 1000px width.
- Secondary image: lazy-loaded; target ≤ 150 KB AVIF.
- Always include explicit intrinsic dimensions and an intentional `object-position` to prevent layout shift and accidental crop.

The current hero card is a non-photographic, original CSS composition. It is not presented as Thomas’s likeness.
