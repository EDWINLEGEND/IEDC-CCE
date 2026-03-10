# IEDC CCE - Design System & Component Architecture

This document outlines the design language, color palette, and **reusable component architecture**. To ensure scalability and maintainability, **all new features must utilize the core components** defined below rather than creating ad-hoc styles.

## 1. Core Principles
- **Modern "Rounded Card" Aesthetic:** Following the new redesign, sections are housed inside large, stylized white/gray cards that float on a soft background, akin to modern SaaS interfaces.
- **DRY (Don't Repeat Yourself):** Use shared components for Sections, Headings, and Cards.
- **Theme Consistency:** All colors and fonts must come from CSS variables.

## 2. Design Tokens (CSS Variables)

| Usage | Color | Variable | Description |
| :--- | :--- | :--- | :--- |
| **Background** | Light Gray | `--bg-primary` | The page background that allows white cards to stand out. |
| **Wrapper/Secondary**| Slightly Darker | `--bg-secondary` | Used for alternate wrappings or headers. |
| **Card Background** | White | `--card-bg` | The background used by `CardSection`. |
| **Accent Gold** | Gold | `--accent-gold` | Core primary brand CTA color. |
| **Accent Red**  | Red | `--accent-red` | Strong secondary brand color. |

## 3. Reusable Components (React)

### A. Layout Wrappers
*All major landing page blocks must be housed in:*
- **`CardSection`**: The definitive wrapper for the new UI. It provides edge padding and a massive rounded inner card (`border-radius: 40px` inside, `padding: 4rem`).
  - *Usage:* `<CardSection id="home"> ... </CardSection>`

### B. Typography Components
- **Headings**: Use `Anton` font. `<h2 className="section-title">` or `<h1 className="hero-title">`.
- **Subheadings**: Use `Inter`. Keep it descriptive and clean.

### C. UI Elements
- **`Button`**:
  - *Modifiers:* `rounded-pill` class is heavily encouraged for the modernized UI.
  - *Variants:* `btn-primary` (Red/Gold depending on theme), `btn-outline` (Transparent).

### D. Layout Patterns
- **Stats Blocks**: Used in Achievements to show big text values. 
- **Side-by-Side (Split) Cards**: Used in About Us / Vision. Text on one side, large rounded image on the other.

## 4. Implementation Guidelines

### New Page Creation Workflow
1. **Import `CardSection`.**
2. **Add Header:** Use `section-title` class inside your layout grid.
3. **Add Content:** Align elements in a grid or flex row depending on content. Use massive `border-radius: 20px` for images.
4. **Style:** Do **not** write new CSS files unless absolutely necessary. Rely on the `CardSection` padding.

## 5. Directory Structure
```
src/
  components/
    common/          <-- REUSABLE ATOMS
      CardSection.jsx
    layout/
      Navbar.jsx
      Footer.jsx
    features/        <-- COMPLEX COMPOSITIONS
      Hero.jsx
      Achievements.jsx
      AboutSection.jsx
```

---
*Adhere to this architecture to ensure the codebase remains clean as the site grows.*
