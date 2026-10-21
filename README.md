# Rackyweb Technologies

**Nigeria building for the world. Modern websites, custom software, and AI-powered solutions.**

Rackyweb Technologies helps businesses and individuals turn ideas into reliable, well-designed software. This repository contains the official company website.

🌐 **Live site:** https://rackyweb-web.github.io/Rackyweb-Technologies
📧 **Email:** edwardzethan792@gmail.com
📱 **WhatsApp:** https://wa.me/2347087806251

---

## About Us

Rackyweb Technologies is a technology company focused on building practical digital products. We combine clean design, modern engineering, and a clear understanding of what businesses need to grow online, and AI powered technologies and businesses.

**Founder:** Edward Prince Akachukwu
**Location:** Nigeria 🇳🇬

## What We Do

- **Web Development:** fast, responsive websites and web applications
- **AI & Automation:** AI-powered tools and automation that save businesses time
- **Tech Consultations:** expert guidance on choosing and building the right technology
- **business consultations:** get the right idea for your business and right steps for it.
- **Tech Academy:** training for beginners and aspiring developers

## Our Work

| Project | What it does | Link |
|---------|--------------|------|
| **Birthday Celebration Website** | A cinematic birthday tribute website built for Sibigam David, Pastor and Youth Convener at Campus Fire Fellowship | [View project](https://sir-david-birthday.vercel.app) |

## Tech Stack

- **Frontend:** React, Vite, React Router
- **Styling:** Tailwind CSS
- **Backend Integration:**

Rackyweb Technologies uses Supabase for backend functionality related to its contact feature.

Current implementation

- Contact feature integration.
- Backend services powered by Supabase, where configured.
- Contact submissions are handled according to the application's configured workflow.

Security

- Supabase credentials are configured for the intended environment.
- Database access should be protected using appropriate Row Level Security (RLS) policies.
- Secret keys must never be exposed in client-side code.

Future improvements

- Improve contact submission management.
- Add an administrative interface for managing enquiries, if required.
- Expand backend functionality as the platform grows.
- **Hosting:** GitHub Pages / Vercel / Netlify

## Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/RACKYWEB-web/Rackyweb-Technologies.git

# 2. Go into the folder
cd Rackyweb-Technologies

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

## Build for Production

```bash
npm run build
npm run preview
```

Deploy the `dist/` folder to any static host (Vercel, Netlify, or GitHub Pages).

## Project Structure

```
src/
├── data/        # All site content (edit here)
│   ├── company.js
│   ├── services.js
│   ├── solutions.js
│   ├── projects.js
│   ├── team.js
│   └── technologies.js
├── services/    # API calls (Supabase, forms)
└── main.jsx     # App entry and routing
```

## Editing Content

All website text lives in `src/data/`. Update the files there and the site updates automatically. No need to touch the page components.

## Routing

The site uses `HashRouter` (URLs look like `/#/about`) so it works on static hosts without server setup. Switch to `BrowserRouter` in `src/main.jsx` if you deploy somewhere with server-side rewrites.

## Roadmap

- [ ] Connect the contact form (Supabase, Formspree, or EmailJS)
- [ ] Add real project case studies
- [ ] Add client testimonials
- [ ] Launch academy registration
- [ ] Add a blog for SEO

## Contact

Have a project in mind? Reach out:

- Email: edwardzethan792@gmail.com
- WhatsApp: https://wa.me/2347087806251
- tiktok: rackyweb technologies 

---

© Rackyweb Technologies. All rights reserved.
