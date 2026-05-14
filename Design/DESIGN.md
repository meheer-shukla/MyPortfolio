---
name: Ethereal Tech
colors:
  surface: '#131314'
  surface-dim: '#131314'
  surface-bright: '#3a393a'
  surface-container-lowest: '#0e0e0f'
  surface-container-low: '#1c1b1c'
  surface-container: '#201f20'
  surface-container-high: '#2a2a2b'
  surface-container-highest: '#353436'
  on-surface: '#e5e2e3'
  on-surface-variant: '#bac9cd'
  inverse-surface: '#e5e2e3'
  inverse-on-surface: '#313031'
  outline: '#859397'
  outline-variant: '#3b494c'
  surface-tint: '#00daf8'
  primary: '#baf2ff'
  on-primary: '#00363f'
  primary-container: '#00e0ff'
  on-primary-container: '#005f6d'
  inverse-primary: '#006877'
  secondary: '#edb1ff'
  on-secondary: '#520070'
  secondary-container: '#6e208c'
  on-secondary-container: '#e498ff'
  tertiary: '#f1e4ff'
  on-tertiary: '#40147a'
  tertiary-container: '#dac2ff'
  on-tertiary-container: '#6741a3'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#a5eeff'
  primary-fixed-dim: '#00daf8'
  on-primary-fixed: '#001f25'
  on-primary-fixed-variant: '#004e5a'
  secondary-fixed: '#f9d8ff'
  secondary-fixed-dim: '#edb1ff'
  on-secondary-fixed: '#320046'
  on-secondary-fixed-variant: '#6e208c'
  tertiary-fixed: '#ecdcff'
  tertiary-fixed-dim: '#d6baff'
  on-tertiary-fixed: '#270057'
  on-tertiary-fixed-variant: '#573092'
  background: '#131314'
  on-background: '#e5e2e3'
  surface-variant: '#353436'
typography:
  display-xl:
    fontFamily: Geist
    fontSize: 80px
    fontWeight: '800'
    lineHeight: 90px
    letterSpacing: -0.04em
  display-xl-mobile:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 52px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  technical-sm:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 80px
  container-max: 1280px
---

## Brand & Style

This design system is engineered for the high-end software developer, blending technical rigor with avant-garde aesthetics. The visual narrative centers on "Precision in the Shadows"—a dark, immersive environment that emphasizes code as art. 

The style combines **Minimalism** with **Glassmorphism**. It utilizes a deep charcoal base to minimize eye strain while employing vibrant, electric gradients to guide user attention. Every interaction should feel intentional and high-performance, evoking a sense of calm authority and creative mastery. Key visual drivers include ultra-refined typography, generous negative space, and semi-transparent layers that suggest depth without physical weight.

## Colors

The palette is anchored in a true-dark foundation to ensure maximum contrast for the accent colors. 

- **Primary (Electric Blue):** Used for critical CTAs, active states, and primary highlights.
- **Secondary/Tertiary (Violet Gradient):** A soft transition from `#9D50BB` to `#6E48AA` used for decorative accents, card borders, and hover states to add a "2026 SaaS" dimension.
- **Surface Strategy:** The background is near-black. Elevation is achieved through progressively lighter charcoal surfaces rather than shadows alone.
- **Accents:** Use gradients sparingly for "glow" effects behind key project thumbnails or as a 1px stroke on glassmorphic cards.

## Typography

The hierarchy relies on extreme contrast between the display type and functional text. 

**Geist** is the hero font, providing a mechanical yet sophisticated feel for headers. Use `display-xl` for name/hero titles with tight letter spacing.
**Inter** handles the heavy lifting of narrative text, ensuring high legibility at all sizes.
**JetBrains Mono** is the "engineer's signature." It must be used for project tags, line numbers, snippets, and metadata labels to reinforce the technical nature of the portfolio.

All headlines should be set to `#FFFFFF`, while body text sits at a slightly muted `#A1A1AA` to create visual hierarchy.

## Layout & Spacing

The design system utilizes an **8px square grid** to maintain strict mathematical harmony. 

- **Grid System:** A 12-column fluid grid for desktop with 24px gutters. Elements should align strictly to the 8px increments.
- **Spacing Rhythm:** Use 64px or 80px vertical gaps between major sections to allow the dark aesthetic to "breathe." 
- **Mobile Adaption:** On mobile, the 12-column grid collapses to a single column with 20px side margins. Large display headings should scale down using the `-mobile` variants to prevent overflow.
- **Sectioning:** Content is housed in wide, centered containers. Avoid "boxed" layouts; prefer edge-to-edge section backgrounds with centered content areas.

## Elevation & Depth

Depth is created through a mix of **Tonal Layers** and **Glassmorphism**, avoiding traditional heavy shadows.

1.  **Base:** `#0A0A0B` (Global background).
2.  **Surface:** `#161618` (Primary card containers).
3.  **Overlay:** Semi-transparent glass (`rgba(22, 22, 24, 0.7)`) with a `20px` backdrop-blur and a subtle `1px` border of `rgba(255, 255, 255, 0.1)`.
4.  **Floating Elements:** Use "Ambient Glows"—large, low-opacity radial gradients (Electric Blue and Violet) positioned *behind* cards to give the illusion of light emitting from the content.

Shadows, when used for buttons, should be colored (e.g., a subtle blue glow) rather than black to maintain the "light-in-the-dark" theme.

## Shapes

The shape language is contemporary and approachable, utilizing a "Rounded" (Level 2) logic.

- **Standard Cards:** 16px (`rounded-xl`) corner radius creates a soft, SaaS-like enclosure.
- **Buttons/Inputs:** 12px (`rounded-lg`) corner radius for a balanced, modern feel.
- **Chips/Tags:** Fully rounded (pill-shaped) to distinguish them as interactive or metadata elements.

Avoid sharp 0px corners, as they conflict with the premium, polished narrative of the 2026 aesthetic.

## Components

### Buttons
- **Primary:** Gradient background (Electric Blue to Violet), bold Inter text, 12px radius. On hover, the gradient should shift or increase in saturation.
- **Ghost:** 1px border using the accent color with a transparent background. High-contrast text.

### Cards
- Use the Glassmorphism specification. Headers within cards should use `headline-md`. Ensure a 1px border is present to define the card against the black background.

### Input Fields
- Dark background (`#1A1A1C`), 12px radius, with a focus state that triggers an Electric Blue border and a subtle outer glow. Label text should use `label-caps` in JetBrains Mono.

### Technical Chips
- Small, pill-shaped tags for tech stacks (e.g., "React", "Rust"). Background: `#27272A`. Text: `technical-sm`.

### Navigation
- A fixed, top-aligned glassmorphic bar. Links should use `label-caps` with a subtle Electric Blue dot appearing beneath the active link.

### Interactive Elements
- Custom cursor (small circle) that expands or changes color when hovering over interactive cards or links.