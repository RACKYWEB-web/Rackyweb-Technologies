# Rackyweb Technologies

A multi-page company website built with React, Vite, React Router, and Tailwind CSS.

## Editing content

All content lives in `src/data/` — one file per content area:

- `company.js` — company info, stats
- `services.js` — the 9 services
- `solutions.js` — problem/approach/outcome solutions
- `projects.js` — portfolio projects + case studies
- `team.js` — team members + founder profile
- `technologies.js` — tech stack, process steps, why-choose-us, testimonials, FAQs, academy

Anything written like `[Add ...]` or `[Project Name]` is a placeholder — replace
it with real content. Entries with `placeholder: true` are clearly marked so
you know what still needs real data.

## Running locally

```bash
npm install
npm run dev
```

## Building for production

```bash
npm run build
npm run preview
```

Deploy the `dist/` folder to any static host (Vercel, Netlify, GitHub Pages).

## Routing

Uses `HashRouter` (URLs look like `/#/about`) so it works on static hosts
like GitHub Pages without extra server configuration. Switch to `BrowserRouter`
in `src/main.jsx` if deploying somewhere with proper server-side rewrites
(Vercel, Netlify) for cleaner URLs.

## What's still a placeholder

- All statistics (Projects Built, Technologies Used, etc.) are set to 0 —
  replace with real numbers in `src/data/company.js`.
- All 6 sample projects and the 1 case study are placeholders — replace with
  real work in `src/data/projects.js`.
- Team members (except the founder slot) are placeholders — fill in
  `src/data/team.js`.
- Testimonials are placeholders — replace with genuine client feedback once
  available, in `src/data/technologies.js`.
- The contact form is front-end only — it does not send anywhere yet. Wire it
  to Supabase, Formspree, EmailJS, or a custom backend before relying on it.
- Academy WhatsApp link is empty — add it in `src/data/technologies.js`.

## Architecture

Prepared for Supabase integration later — the contact form, academy
registration, and any future auth/admin features can be wired into
`src/services/` (currently empty, ready for API calls) without restructuring
the app.
