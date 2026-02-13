
# IEDC CCE Clone

A modern, responsive React/Vite application replicating the design and structure of the [IEDC CCE Website](https://iedc-cce.vercel.app/).

## Features
- **Modern UI**: Glassmorphism effects, gradient text, and animations using Framer Motion (ready for integration).
- **Responsive Navbar**: Mobile-friendly hamburger menu.
- **Hero Section**: Dynamic intro with animations and quotes.
- **About & Vision**: Replicated content and quotes (Steve Jobs, Victor Hugo).
- **Activities Page**: List of annual reports and event placeholders.
- **Contact Page**: Functional-style contact form.
- **Routing**: Client-side routing with `react-router-dom`.

## Tech Stack
- **React 18**: Component-based UI.
- **Vite**: Fast build tool.
- **CSS Modules/Global**: Clean, scoped styling.
- **Lucide React**: Modern icons.

## Getting Started

1.  **Install dependencies**:
    ```bash
    npm install
    ```

2.  **Start the development server**:
    ```bash
    npm run dev
    ```

3.  **Open in browser**:
    Navigate to `http://localhost:5173` (or the port shown in terminal).

## Project Structure
- `src/components/`: Reusable components (Navbar, Hero, Footer, etc.)
- `src/pages/`: Page-level components (Activities, Contact)
- `src/App.jsx`: Main routing logic
- `src/index.css`: Global styles and variables

## Design Notes
- Uses Space Grotesk font (via Google Fonts) for a modern tech look.
- Dark theme by default with neon blue/pink accents.
