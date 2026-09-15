# Noah Sam Amu — AI Engineer Portfolio

A from-scratch personal portfolio built with Next.js 16 (App Router), TypeScript, and Tailwind CSS. No animation or UI-effect libraries — scroll reveals and the case-study accordion are done with a small `IntersectionObserver` hook and plain CSS.

## Stack

- **Next.js 16** (App Router, static export of `/`)
- **TypeScript**
- **Tailwind CSS**
- Fonts: Inter (body) + JetBrains Mono (labels/technical accents) via `next/font/google` — self-hosted at build time, no runtime request.

## Structure

```
app/                  # root layout, global styles, the single page
components/
  sections/           # Hero, About, Specialization, FeaturedProjects, MoreProjects, Skills, Experience, Contact
  ui/                  # Reveal, SectionHeading, PipelineDiagram, MetricsTable
  CaseStudyCard.tsx    # expandable featured-project card
  Navbar.tsx, Footer.tsx
data/                  # all content — edit these files to update the site
  projects.ts          # featured + "more" projects
  skills.ts, specialization.ts, nav.ts
  resume.ts            # experience / education / achievements
public/
  images/portrait.jpg  # hero photo
  resume.pdf           # downloadable resume
```

Content is data-driven: to change project copy, skills, or nav links, edit the files in `data/` rather than the components.

## Running it

```bash
npm install
npm run dev       # http://localhost:3000
```

Production build:

```bash
npm run build
npm start
```

## What's already built

- Hero (with real portrait, cropped/zoomed via CSS transform — see `components/sections/Hero.tsx`), About, a non-grid "Specialization" list (Agentic AI / Voice AI / Computer Vision / AI Systems), and Skills, laid out and responsive down to ~360px wide.
- All 6 featured projects (AfriCompute, HireLens AI, Voice Clone — Bentley, Sentinel AI, Quantum, Alien 1) as expandable case studies, each with a hand-built HTML/CSS architecture diagram (clearly labeled as a diagram, not a screenshot) and, for AfriCompute, the experimental scheduler metrics you supplied, with the simulation disclaimer.
- HireLens AI explicitly states the no-ranking/no-scoring constraint in copy.
- A "More Projects" grid — AIN, AVES, AssetOracle AI Engine, FACIAL, Cursor, and SATURN — with real descriptions, tech tags, and GitHub links, sourced from your resume.
- Experience (Codesphere, Bigstack, Gao Tek), Education (Aptech, University of Calabar, MIT OpenCourseWare), and Achievements, sourced from `public/resume.pdf`.
- Contact section with GitHub, LinkedIn, and email all live.
- Dark, restrained visual design; semantic HTML; visible focus states; `prefers-reduced-motion` respected; SEO metadata + Open Graph + favicon.

## Known issues worth fixing at the source (not silently corrected here)

Two date conflicts exist in `public/resume.pdf` itself — `data/resume.ts` uses the structured header dates and flags both in a comment rather than guessing:

- **Bigstack internship**: header says `07/2025–09/2025`; the description text says "march 2023-august 2023."
- **Gao Tek contract**: header says `08/2025–03/2026`; the description text says "December 2025 to march 2026" (also a different length than the header range).
- Achievements credits a full-time promotion "at Big Stack Technologizs," but the only full-time role under Experience is at **Codesphere** — those don't reconcile as written.

## Optional, not yet added

- **Phone number** — the resume lists one; the brief's Contact section only asked for Email/LinkedIn/GitHub, so it wasn't added. Say if you want it on the site.
- **Netlify link** (`rad-flan-5f6665.netlify.app`) on the resume — not linked anywhere on the site since it's unclear if it should point visitors elsewhere; ask if you want it referenced.
- **Project screenshots** — real screenshots can replace/supplement the hand-built diagrams for any project whenever you have them; nothing here uses a fabricated screenshot.
- **GitHub/demo links** for the 6 featured case studies (AfriCompute, HireLens AI, Voice Clone, Sentinel AI, Quantum, Alien 1) — none were supplied, so "Code" renders disabled on those. Add `links: { github, demo }` per project in `data/projects.ts` to activate.

Everything else — copy, structure, metrics, and the "do not overclaim" language around HireLens and AfriCompute — was written directly from what you provided.
