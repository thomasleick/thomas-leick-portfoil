# Portrait asset slot

No personal photograph is committed to this repository.

When Thomas provides a portfolio-approved image, add optimized derivatives here:

- `thomas-hero-1600.avif` — 1600px wide, primary hero source
- `thomas-hero-1000.webp` — 1000px wide, fallback source
- `thomas-lifestyle-1200.avif` — optional secondary editorial image

Use an image Thomas owns or is expressly licensed to use. Do not download, hotlink, or reuse an Instagram image without confirming this right. Keep the original outside the deployable `public/` directory, then export only the approved responsive derivatives. Update `src/sections/Hero.tsx` deliberately once an image is available; specify width, height, `srcSet`, `sizes`, intentional `object-position`, and accurate alt text.
