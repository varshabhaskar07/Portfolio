# Varsha Bhaskar — Portfolio

A modern, responsive developer portfolio built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## Tech Stack

- **Next.js 14** (App Router, static export)
- **TypeScript** — strict typing throughout
- **Tailwind CSS** — utility-first styling with custom design tokens
- **Framer Motion** — subtle, production-grade animations
- **Lucide React** — icons
- **Inter + JetBrains Mono** — Google Fonts

## Project Structure

```
src/
├── app/
│   ├── globals.css        # Design tokens, custom utilities
│   ├── layout.tsx         # Root layout + metadata/SEO
│   └── page.tsx           # Main page (section assembly)
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx     # Sticky nav with mobile menu
│   │   └── Footer.tsx     # Simple footer with socials
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Achievements.tsx
│   │   ├── CodingProfiles.tsx
│   │   └── Contact.tsx
│   └── ui/
│       ├── badge.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── section-heading.tsx
│       └── social-icons.tsx   # Inline SVG brand icons
├── data/
│   └── index.ts           # All content (edit this to update the site)
├── lib/
│   └── utils.ts           # cn() helper
└── types/
    └── index.ts           # Shared TypeScript interfaces
```

## Running Locally

> **Note:** Node v25 has a bug with the `.bin/next` shim. The scripts below use `node node_modules/next/dist/bin/next` directly to work around this. This is already configured in `package.json`.

```bash
# Install dependencies
npm install

# Start development server
npm run dev
# → Open http://localhost:3000

# Production build
npm run build

# Run production server
npm start
```

## Updating Content

All personal data, projects, skills, experiences, and achievements live in a single file:

```
src/data/index.ts
```

Edit that file to update any content on the site — no need to touch the components.

## Deploying to Vercel (Free)

1. Push this repo to GitHub.
2. Go to [vercel.com](https://vercel.com) and click **New Project**.
3. Import your GitHub repo.
4. Vercel auto-detects Next.js. Click **Deploy**.

> Vercel uses a standard Node version where the `next` binary works correctly, so you can restore the original scripts for deployment:

```json
"dev": "next dev",
"build": "next build",
"start": "next start",
"lint": "next lint"
```

## Customising the Design

| What to change | Where |
|---|---|
| Colors / theme | `src/app/globals.css` CSS variables |
| Fonts | `src/app/layout.tsx` |
| Tailwind tokens | `tailwind.config.ts` |
| Animations | Framer Motion props in individual section components |

## Contact Form

The contact form (`src/components/sections/Contact.tsx`) shows a success state on submit. To wire it to actually send emails, use:

- [Resend](https://resend.com) — recommended, generous free tier
- [Formspree](https://formspree.io) — no backend required
- [EmailJS](https://www.emailjs.com) — client-side sending
