
# IEDC CCE - Design Theme & Guidelines

This document outlines the design language, color palette, and component styles derived from the **Hero** and **Achievements** sections. All future development must adhere to these guidelines to ensure consistency.

## 1. Color Palette

| Usage | Color | Hex Code | Description |
| :--- | :--- | :--- | :--- |
| **Background** | Core Dark | `#050505` | Primary background color. Deep, almost black. |
| **Background** | Secondary | `#13131f` | (Optional) Slightly lighter dark for cards/sections. |
| **Text** | Primary | `#FFFFFF` | Main headings and content. |
| **Text** | Secondary | `#A1A1AA` | Subtitles, descriptions, grid text (`text-secondary`). |
| **Accent** | **Gold** | `#D4AF37` | **Primary Brand Accent**. Used for "Join" buttons, highlights, badges, and key keywords. |
| **Accent** | Red | `#FE4A3B` | Secondary accent (use sparingly). |

## 2. Typography

### Font Families
- **Headings:** `Anton`, sans-serif
  - Usage: Hero titles, Section headers, "About Us", "Our Vision".
  - Style: Uppercase, Heavy weight, Condensed.
- **Subheadings:** `Oswald`, sans-serif
  - Usage: Card overlays, secondary titles.
- **Body:** `Inter`, sans-serif
  - Usage: Paragraph text, descriptions, navigation links.

### Text Styles
- **Hero Title:** size `8rem` (desktop), Uppercase, `line-height: 0.9`.
- **Section Title:** size `4rem`, Uppercase.
- **Gradient Text:** Avoid generic gradients. Use Solid White or Solid Gold.
- **Outline Text:** Use CSS `-webkit-text-stroke: 1px rgba(255,255,255,0.3)` with `color: transparent` for "Hollow" text effects (seen in "OUR ACHIEVEMENTS").

## 3. UI Components & Patterns

### A. Buttons
- **Shape:** Slightly rounded corners (`border-radius: 4px`).
- **Style:** Solid Gold background (`#D4AF37`) with Black text for primary actions ("JOIN IEDC").
- **Hover:** Slight opacity change or `translateY(-1px)`.

### B. Cards (Achievements Style)
- **Aspect Ratio:** Portrait (Vertical rectangles).
- **Behavior:**
  - **Auto-Scroll**: Horizontal infinite scroll.
  - **Grayscale to Color**: Images are Black & White by default (`grayscale(100%)`).
  - **Hover Effect**: Full color reveal (`grayscale(0%)`) + Scaled up (`scale(1.02)`).
- **Overlay:** Gradient overlay at the bottom for text readability.

### C. Layout Patterns
- **Split Sections (Zig-Zag):**
  - Alternating layout: [Text Left + Image Right] then [Image Left + Text Right].
  - **Images:** Full cover, minimal styling, subtle shadow.
  - **Text:** Large Heading + Green Underline Accent + Body Text.

### D. Animations & Interactons
- **Floating Elements:** Rotating circular badges ("JOIN • IEDC • CCE").
- **Scroll Indicators:** Bouncing arrows at bottom of hero.
- **Navbar:** 
  - Transparent at top.
  - Glassmorphic dark blur on scroll.
  - Links: Text-only, clean hover effects.

## 4. Implementation Rules
1. **Always** use `var(--accent-gold)` for primary calls to action.
2. **Never** use rounded/pill buttons (unless specified otherwise); stick to slightly rounded squares.
3. **Images** in lists/grids should generally follow the "B&W to Color" interaction pattern.
4. **Section Headers** should be massive (`Anton` font) and typically Uppercase.

---
*Generated based on Hero & Achievements analysis.*
