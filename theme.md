# IEDC CCE - Design System & Component Architecture

This document outlines the design language, color palette, and **reusable component architecture**. To ensure scalability and maintainability, **all new features must utilize the core components** defined below rather than creating ad-hoc styles.

---

## 1. Core Principles
- **Modern "Rounded Card" Aesthetic:** Sections are housed inside large, stylized white cards that float on a soft warm-beige background, akin to modern SaaS interfaces (Advisora-style).
- **DRY (Don't Repeat Yourself):** Use shared components for Sections, Headings, and Cards.
- **Theme Consistency:** All colors and fonts must come from CSS variables defined in `src/index.css`.
- **Smooth Scrolling:** Lenis smooth scroll is active globally via `App.jsx`. All anchor navigation should account for this.

---

## 2. Design Tokens (CSS Variables)

### Colors (Light Mode)

| Usage | Value | Variable | Description |
| :--- | :--- | :--- | :--- |
| **Page Background** | `#F0EFE9` | `--bg-primary` | Soft warm light beige that makes white cards stand out |
| **Secondary BG** | `#E5E3DB` | `--bg-secondary` | Slightly darker beige for alternate elements |
| **Card Background** | `#ffffff` | `--card-bg` | Pure white used by `CardSection` inner blocks |
| **Text Primary** | `#171615` | `--text-primary` | Near-black, very deep dark text |
| **Text Secondary** | `#6B6862` | `--text-secondary` | Muted brownish-gray for body text |
| **Accent (Orange-Red)** | `#ff5722` | `--accent-gold` | Main CTA color – buttons, underlines, badges |
| **Accent Red** | `#ff3d00` | `--accent-red` | Stronger variant, used sparingly |
| **Footer BG** | `#1A1A1A` | `--footer-bg` | Very dark near-black card for footer |
| **Card Shadow** | `0 8px 30px...` | `--card-shadow` | Very subtle drop shadow on card sections |

### Typography

| Role | Font | Notes |
| :--- | :--- | :--- |
| **All text** | `DM Sans` | Single font family across entire site |
| **Headings** | `DM Sans`, weight 500–700 | Large section headings use `font-weight: 700` |
| **Body** | `DM Sans`, weight 400 | Normal paragraphs, secondary text |
| **Buttons** | `DM Sans`, weight 500–600 | Pill-shaped, no uppercase |

---

## 3. Reusable Components (React)

### A. Layout Wrappers

- **`CardSection`** — The definitive section wrapper. Every landing page block uses this.
  - Provides `1rem` edge spacing, matching the gap between sections.
  - Inner card: `border-radius: 24px`, `padding: 4rem`, `max-width: 1800px`
  - Box shadow: `var(--card-shadow)`
  - *Usage:* `<CardSection id="home"> ... </CardSection>`

- **`Navbar`** — Floating pill header.
  - `position: fixed`, `top: 1rem`, `border-radius: 16px`, `max-width: 1800px`
  - Nav links: `DM Sans`, `0.95rem`, weight 500
  - CTA button (`.btn-yellow`): `background: var(--accent-gold)`, `border-radius: 9999px`

- **`Footer`** — Floating dark card at bottom of page.
  - `background: var(--footer-bg)` (`#1A1A1A`)
  - `border-radius: 24px`, `max-width: 1800px`, matches CardSection width
  - Contains brand CTA, social links, and legal links.

### B. UI Elements

- **Buttons (`.btn`)**:
  - Base: `border-radius: 9999px` (pill), `DM Sans`, no uppercase
  - `.btn-primary` — Orange background (`--accent-gold`), white text
  - `.btn-outline` / `.hero-btn-outline` — Transparent, orange border + text (in Hero)
  - `.btn-yellow` — Navbar CTA, pill-shaped orange button

- **Section Headings (`.about-section-heading`)**:
  - `font-size: 3.5rem`, `font-weight: 700`, `letter-spacing: -1.5px`
  - Has a gold `::after` underline bar: `60px × 4px`, `background: var(--accent-gold)`
  - Used in: About Us, Our Vision cards

### C. Layout Patterns

| Pattern | Usage | Implementation |
| :--- | :--- | :--- |
| **Split (50/50)** | About Us, Our Vision | CSS Grid `1fr 1fr`, `gap: 5rem`, image `border-radius: 20px` |
| **Split Reversed** | Our Vision | Add class `.about-content-layout--reverse` |
| **Stats Row** | Achievements section | Flex row, 4 stat items, big `4rem` value + `0.9rem` label |
| **Centered Hero** | Full-width intro | Two column: title left, buttons/subtitle right |
| **Scrolling Ribbon** | Between Footer & body | Infinite scroll marquee, `DM Sans`, `background: var(--accent-gold)` |

---

## 4. Page Content (Landing Page)

### Hero
- Title: *"Innovation & entrepreneurship"*
- Subtitle: *"Create, innovate, and inspire. Transforming students into future leaders..."*
- Buttons: `Get Started →` (primary), `Free trial` (outline)
- Image: Wide full-card photo of students collaborating

### Achievements (Card 2)
- Star badge: `★★★★★ 5.0/5 rating`
- Title: *"We are passionate about empowering individuals and businesses..."*
- Stats Row: `15+`, `50+`, `500+`, `$50k`

### About Us (Card 3)
- Image on left, text on right
- Title: **"About Us"** with gold underline
- Body: Full 2-paragraph text of IEDC CCE's mission

### Our Vision (Card 4)
- Text on left, image on right
- Title: **"Our Vision"** with gold underline
- Body: Full 2-paragraph vision text

---

## 5. Smooth Scrolling
- Library: **Lenis** (`npm install lenis`)
- Initialized in `App.jsx` using `useEffect` + `requestAnimationFrame`
- CSS applied in `index.css` via `.lenis.lenis-smooth`, `html.lenis` classes

---

## 6. Directory Structure
```
src/
  components/
    common/          <-- REUSABLE ATOMS
      CardSection.jsx / CardSection.css
      ScrollingRibbon.jsx / ScrollingRibbon.css
    Navbar.jsx / Navbar.css
    Footer.jsx / Footer.css
    Hero.jsx / Hero.css
    Achievements.jsx / Achievements.css
    AboutSection.jsx / AboutSection.css
  context/
    ThemeContext.jsx
  pages/
    ActivitiesPage, ContactPage, TBIPage, etc.
  index.css   <-- Global tokens, Lenis classes, base styles
  App.jsx     <-- Routing, Lenis init
```

---

*Adhere to this architecture to ensure the codebase remains clean and scalable as the site grows.*
