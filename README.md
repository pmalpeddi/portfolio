# 3D Personal Portfolio

A modern, interactive 3D portfolio built with Vite and React, featuring animated Three.js elements, a working contact form, and sections for experience, skills, and projects.

**Live Site:** [vanarpmalportfolio.netlify.app](https://vanarpmalportfolio.netlify.app)

---

## Tech Stack

- **Vite** — build tool and dev server
- **React** — component-based UI
- **Three.js** — 3D models and canvas rendering (desktop PC, Earth, stars)
- **Tailwind CSS** — utility-first styling
- **Framer Motion** — scroll and entrance animations
- **EmailJS** — contact form email delivery (no backend required)

---

## Features

- Interactive 3D desktop PC model on the hero section
- Animated star field background
- Rotating 3D Earth on the contact section
- Scroll-triggered animations via Framer Motion
- Working contact form via EmailJS
- Sections: About, Experience, Skills, Projects, Contact
- Fully responsive

---

## Project Structure

```
src/
├── components/        # All UI sections (Hero, About, Experience, Works, Contact, etc.)
│   └── canvas/        # Three.js canvas components (Computers, Earth, Stars, Ball)
├── constants/         # Site content — experience, projects, tech stack, nav links
├── assets/            # Images, icons, company logos, tech logos
├── hoc/               # Higher-order components (SectionWrapper)
├── utils/             # Framer Motion animation variants
├── styles.js          # Shared Tailwind class strings
└── App.jsx            # Root component
```

---

## Environment Variables

Create a `.env` file in the root with the following:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

These are referenced in `src/components/Contact.jsx` via `import.meta.env`.

---

## Getting Started

```bash
npm install
npm run dev
```

---

## Deployment

Deployed on Netlify. Add the environment variables above in Netlify's dashboard under **Site Settings → Environment Variables** so the contact form works in production.