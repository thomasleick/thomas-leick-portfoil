# Portrait asset slot

An approved personal portrait is committed as optimized derivatives at the repository root (`/profile.avif` and `/profile.webp`) and is used by the hero. The unoptimized source is preserved outside the deployable `public/` tree at `source-assets/profile-original.png`.

When Thomas provides a portfolio-approved image, add optimized derivatives here:

- `thomas-hero-1600.avif` — 1600px wide, primary hero source (the current `profile.avif` is the supplied 720px derivative)
- `thomas-hero-1000.webp` — 1000px wide, fallback source (the current `profile.webp` is the supplied 720px derivative)
- `thomas-lifestyle-1200.avif` — optional secondary editorial image

Use an image Thomas owns or is expressly licensed to use. Do not download, hotlink, or reuse an Instagram image without confirming this right. Keep the original outside the deployable `public/` directory, then export only the approved responsive derivatives. If replacing this supplied portrait, update `src/sections/Hero.tsx` deliberately; specify width, height, `srcSet`, `sizes`, intentional `object-position`, and accurate alt text.
