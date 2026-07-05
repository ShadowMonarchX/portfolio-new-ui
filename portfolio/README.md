# Jenish Shekhada Portfolio

Production-focused single-page portfolio built with React, TypeScript, Vite, Tailwind CSS, Framer Motion, and EmailJS.

## Architecture

```text
App
├─ AnimatedBackground
├─ Header
└─ main
   ├─ Hero
   ├─ About
   ├─ Projects
   ├─ Experience
   ├─ Certifications
   └─ Contact
```

## Project Structure

```text
src/
├─ components/        # Section components and shared UI primitives
├─ constants/         # Shared motion tokens
├─ types/             # Runtime config and third-party typings
├─ App.tsx            # App shell and section composition
├─ index.css          # Global styles and Tailwind layers
└─ main.tsx           # React root bootstrap
```

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- EmailJS
- Vercel Analytics

## Installation

```bash
npm install
```

## Environment Variables

Create a `.env.local` file in `portfolio/`:

```bash
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
```

The contact form degrades gracefully if these values are missing.

## Scripts

```bash
npm run dev
npm run build
npm run lint
npm run typecheck
npm run preview
```

## Deployment

- Vite build output is production-ready for static hosting.
- `npm run build` also generates `public/robots.txt` and `public/sitemap.xml`.
- Deploy directly to Vercel, Netlify, or any static host.

## Performance Notes

- Below-the-fold sections are lazy loaded.
- Decorative animations respect `prefers-reduced-motion`.
- The animated background avoids render-time randomness.
- Google Fonts are preconnected for faster first paint.

## Accessibility Notes

- Skip link provided.
- Mobile navigation exposes `aria-expanded` and `aria-controls`.
- Contact form status messages are announced through live regions.
- Interactive cards are keyboard accessible.

## SEO Notes

- Document title and metadata are configured in `index.html`.
- Open Graph, Twitter cards, and JSON-LD are present.
- `robots.txt` and `sitemap.xml` are generated at build time.

## Lighthouse Targets

- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

These are targets, not guarantees, and should be verified in the deployed environment.
