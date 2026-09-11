# Asset manifest

| Asset | Status | Origin / rights | Delivery |
| --- | --- | --- | --- |
| `public/favicon.svg` | Included | Original local vector artwork | Inline-safe SVG, 64×64 |
| `public/social-card.svg` | Included | Original local vector artwork | 1200×630 SVG social preview |
| Hero portrait | Included | Supplied directly by Thomas | `/profile.avif` (35 KB) and `/profile.webp` (39 KB), explicit 720×912 dimensions in hero |
| Original portrait source | Preserved locally | Supplied directly by Thomas; not deployed | `source-assets/profile-original.png` (outside `public/`) |
| Lifestyle portrait | Optional / missing | Thomas must supply/approve ownership or license | Lazy-loaded AVIF/WebP only if added |
| Instagram imagery | Not used | No image downloaded; authenticated session unavailable | Do not hotlink |
| K-Libra imagery | Not used | Product screenshots not necessary to make source-backed claims | Use only if future capture/rights are confirmed |
| Monster marks / artwork | Not used | Third-party brand/trade dress | Text-only reference permitted by brief; no logo/claw artwork |

## Image budget for future supplied photography

- Hero AVIF: target ≤ 180 KB at 1600px width.
- Hero WebP fallback: target ≤ 260 KB at 1000px width.
- Secondary image: lazy-loaded; target ≤ 150 KB AVIF.
- Always include explicit intrinsic dimensions and an intentional `object-position` to prevent layout shift and accidental crop.

The current hero card uses the supplied portrait with grayscale treatment and original CSS framing; it is not hotlinked and does not use third-party artwork.
