# Kirtan Patel — Portfolio

A premium, modern personal portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. Designed to impress recruiters and position for cloud, AI, backend, and full-stack engineering roles.

## Tech Stack

- **Framework**: Next.js 14 (App Router, static export)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter + JetBrains Mono (via next/font)

## Local Development

### Prerequisites

- Node.js 18+
- npm 9+

### Setup

```bash
# Clone the repo
git clone https://github.com/kirtanpatel/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

The static output is generated in the `/out` directory — ready to deploy anywhere.

---

## Deployment

### Vercel (Recommended — Free)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click **"Add New Project"** → import your repo
4. Vercel auto-detects Next.js — no config needed
5. Click **Deploy**

> **Note**: The `output: "export"` in `next.config.mjs` makes this a static site. Vercel handles this perfectly on the free tier.

**Custom domain on Vercel:**
- Go to your project → Settings → Domains
- Add your domain (e.g., `kirtanpatel.dev`)
- Update your domain's DNS to point to Vercel's nameservers or add the CNAME/A records Vercel provides

---

### Netlify (Free Alternative)

1. Push to GitHub
2. Go to [netlify.com](https://netlify.com) → "Add new site" → "Import from Git"
3. Set build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `out`
4. Click **Deploy site**

**Custom domain on Netlify:**
- Site settings → Domain management → Add custom domain
- Follow DNS instructions provided by Netlify

---

### GitHub Pages (Free, Static Only)

1. Run `npm run build` — output goes to `/out`
2. Push the `/out` folder contents to a `gh-pages` branch
3. Enable GitHub Pages in repo Settings → Pages → Source: `gh-pages` branch

Or use the [gh-pages](https://www.npmjs.com/package/gh-pages) npm package to automate this.

---

## Assets to Replace

Before going live, replace these placeholders:

| File / Value | What to Replace With |
|---|---|
| `public/resume.pdf` | Your actual resume PDF |
| `kirtan@example.com` | Your real email address |
| `linkedin.com/in/kirtanpatel` | Your LinkedIn profile URL |
| `github.com/kirtanpatel` | Your GitHub username |
| Project GitHub links | Real repo URLs |
| Certification `verifyUrl` | Your Credly/AWS credential URLs |
| `credentialId` values | Your actual credential IDs |

### Files to update:
- `components/Hero.tsx` — social links
- `components/Contact.tsx` — email, LinkedIn, GitHub
- `components/Footer.tsx` — social links
- `components/Certifications.tsx` — credential IDs and verify URLs
- `components/Projects.tsx` — GitHub repo links, demo URLs
- `app/layout.tsx` — update OG metadata URL if needed

---

## Customization

### Colors
Edit `tailwind.config.ts` to change the accent color palette. The primary accent is indigo (`#6366f1`).

### Content
All content is co-located in each component file. No CMS or external data source — just edit the data arrays at the top of each component.

### Adding a Project
In `components/Projects.tsx`, add a new entry to the `projects` array following the existing structure.

### Contact Form Backend
The contact form currently simulates submission. To make it functional:
- **Formspree**: Replace the `handleSubmit` function with a `fetch` to `https://formspree.io/f/YOUR_ID`
- **EmailJS**: Use the `emailjs-com` package
- **Custom API**: Add a Next.js API route (requires switching from static export)

---

## Performance

- Static export — no server required
- Fonts loaded via `next/font` (zero layout shift)
- Framer Motion animations respect `prefers-reduced-motion`
- All images use `unoptimized: true` for static compatibility
- First Load JS: ~149 kB (well within acceptable range for a portfolio)

---

## Connecting a Custom Domain Later

1. Buy a domain from Namecheap, Google Domains, Cloudflare, etc.
2. In your hosting provider (Vercel/Netlify), add the domain
3. Update your domain's DNS records as instructed
4. SSL is automatic on both Vercel and Netlify

Recommended domain ideas:
- `kirtanpatel.dev`
- `kirtanpatel.io`
- `kirtanpatel.com`

---

Built by Kirtan Patel · [LinkedIn](https://linkedin.com/in/kirtanpatel) · [GitHub](https://github.com/kirtanpatel)
