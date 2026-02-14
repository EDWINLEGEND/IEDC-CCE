
# IEDC CCE - Design System & Component Architecture

This document outlines the design language, color palette, and **reusable component architecture**. To ensure scalability and maintainability, **all new features must utilize the core components** defined below rather than creating ad-hoc styles.

## 1. Core Principles
- **DRY (Don't Repeat Yourself):** Use shared components for Sections, Headings, and Cards.
- **Atomic Design:** Build complex pages from small, reusable atoms (buttons, badges) and molecules (cards, banners).
- **Theme Consistency:** All colors and fonts must come from CSS variables.

## 2. Design Tokens (CSS Variables)

| Usage | Color | Variable |
| :--- | :--- | :--- |
| **Background** | Core Dark | `--bg-primary` (`#050505`) |
| **Text** | Primary | `--text-primary` (`#FFFFFF`) |
| **Text** | Secondary | `--text-secondary` (`#A1A1AA`) |
| **Accent** | **Gold** | `--accent-gold` (`#D4AF37`) |
| **Accent** | Red | `--accent-red` (`#FE4A3B`) |

## 3. Reusable Components (React)

### A. Layout Wrappers
*Instead of rewriting section containers:*
- **`PageContainer`**: Standard wrapper with top padding for navbar (`pt-24`) and min-height.
- **`Section`**: Standard section wrapper with padding (`py-24`).
- **`SplitSection`**: The "Zig-Zag" layout used in About/Vision. Accepts `image`, `title`, `text`, and `reverse` prop.

### B. Typography Components
*Instead of raw `h1/h2` tags:*
- **`SectionTitle`**: The massive `Anton` header.
  - *Props:* `title` (string), `align` ('left'|'center'), `color` (default white).
- **`SectionSubtitle`**: The `Oswald` or `Inter` subheader with the signature **Green/Gold Underline**.
  - *Props:* `text`, `underlineColor`.

### C. UI Elements
- **`Button`**:
  - *Variants:* `primary` (Gold), `outline` (Transparent), `text` (Link style).
  - *Props:* `onClick`, `href`, `icon`.
- **`GradientText`**: Helper for text masking (if needed for special headers).
- **`Badge`**: The rotating circular badge component (`BrandBadge`).

### D. Cards & Media
- **`PortraitCard`**: Used in Achievements.
  - *Behavior:* Grayscale -> Color on hover.
  - *Props:* `image`, `title`, `year`, `overlayContent`.
- **`BannerCard`**: Used in TBI/Startups.
  - *Behavior:* Wide aspect ratio, hover zoom.
  - *Props:* `image`, `title`, `description`.

## 4. Implementation Guidelines

### New Page Creation Workflow
1. **Import Wrappers:** Start with `PageContainer`.
2. **Add Header:** Use `SectionTitle` for the page heading.
3. **Add Content:**
   - If listing items: Use `Grid` wrapper + `PortraitCard` or `BannerCard`.
   - If explanatory text: Use `SplitSection` pattern.
4. **Style:** Do **not** write new CSS files unless absolutely necessary for complex, unique animations. Use utility classes or existing component CSS.

### Animation Standards (Framer Motion)
- **Entry:** Simple fade-up (`opacity: 0, y: 20` -> `opacity: 1, y: 0`).
- **Hover:** Subtle scale (`scale(1.02)`).
- **Scroll:** Parallax effect for background images specific to `SplitSection`.

## 5. Directory Structure
```
src/
  components/
    common/          <-- REUSABLE ATOMS
      Button.jsx
      SectionTitle.jsx
      Section.jsx
    layout/
      Navbar.jsx
      Footer.jsx
    features/        <-- COMPLEX COMPOSITIONS
      Hero.jsx
      Achievements.jsx
  pages/             <-- PAGE VIEWS
    Home.jsx
    TBIPage.jsx
```

---
*Adhere to this architecture to ensure the codebase remains clean as the site grows.*
