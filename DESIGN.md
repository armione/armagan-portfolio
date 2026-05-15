# Open Design Spec: Portfolio (Kami / Sacred Drift)

## 1. Identity & Vibe
- **Brand Name:** Armione / Design Engineer
- **Aesthetic:** "Sacred Drift" combined with "Kami (Serif/Premium)". High-contrast, editorial, print-first feel on digital canvas.
- **Vibe:** Premium, trustworthy, rhythmic, intentional. Zero "slop" or generic AI noise.

## 2. Token Architecture

### A1: Identity (Required, no fallback)
The absolute core of the brand.
- `--bg`: `#0a0a0b` (Deepest charcoal/black)
- `--surface`: `#131316` (Slightly elevated from bg)
- `--fg`: `#f4f4f5` (Parchment white, soft contrast)
- `--muted`: `#a1a1aa` (Zinc 400, readable but recessive)
- `--border`: `#27272a` (Zinc 800)
- `--accent`: `#c8ff00` (Acid yellow/green for hyper-focus elements, used sparingly)
- `--font-display`: `'Space Grotesk', sans-serif` (or a Serif if we go full Kami, let's stick to Space Grotesk for tech/engineer vibe but apply it ritmically).
- `--font-body`: `'Inter', sans-serif`

### A2: Structure (Required, structural definitions)
- **Radius:** `--radius-sm`: `8px`, `--radius-md`: `16px`, `--radius-full`: `9999px`
- **Spacing:** Fluid modular scale based on `rem` (`4px` baseline).
- **Motion:** `--motion-fast`: `0.2s ease`, `--motion-smooth`: `0.4s cubic-bezier(0.4, 0, 0.2, 1)`

### B-Slot: Semantic Aliases
- `--fg-2`: `var(--muted)` (Secondary text)
- `--surface-warm`: `#18181b` (For cards and callouts)
- `--border-soft`: `rgba(255, 255, 255, 0.05)`

## 3. Typography & Hierarchy (Craft Rules)
- **Primary Headers:** Extremely tight letter-spacing (`-2px` to `-4px`), large scale (`clamp(3rem, 8vw, 7rem)`), heavy weight (`800`).
- **Body Text:** Loose line-height (`1.6`), readable contrast (`--muted` or `--fg-2`).
- **Monospace/Technical:** Used for labels and tags (e.g., `<span class="tag">`).

## 4. Layout & Whitespace
- **Uniform Masonry:** Projects are displayed in an equal-weight masonry grid. No "hero" project dominates.
- **Whitespace:** Deep paddings (`6rem 3rem` for sections). Allow elements to breathe.

## 5. Motion & Interaction
- **HyperFrames VFX:** Implement subtle HTML-in-Canvas effects. Examples: 
  - Slow radial gradient tracking the mouse.
  - Split-text reveal on scroll.
- **Glassmorphism:** Used *only* when functional (e.g., sticky header blur, modal background blur).

## 6. Anti-Patterns (Forbidden)
- Do not use generic drop shadows (e.g., `0 4px 6px rgba(0,0,0,0.1)`). Use tight, high-contrast borders (`1px solid var(--border)`) or deep, soft glows (`0 20px 40px rgba(0,0,0,0.5)`).
- Do not use fully saturated secondary colors (no pure red, blue, green).
- Do not center-align long blocks of body text. Left-align for readability, center only for short lead-ins.
