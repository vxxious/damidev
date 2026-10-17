# Dami — Full-Stack Engineer

A one-page portfolio built with TanStack Start, React 19, TypeScript, and Tailwind CSS v4. Projects, articles, about, and contact are sections on the homepage. Framer Motion handles one-time entrances and hover feedback; Lenis handles smooth scrolling while respecting reduced-motion preferences.

## Run locally

```bash
npm install
npm run dev
```

Open the URL printed by Vite (configured for port 3001). To check a release build:

```bash
npm run lint
npm run typecheck
npm run build
npm run start
npm run smoke
```

The build uses Vite's native config loader for reliable Windows builds in this workspace. Automatic route splitting is disabled because TanStack's splitter mishandles the apostrophe in the folder path.

## Content

Project details and links live in [`src/data/portfolio.ts`](src/data/portfolio.ts). Edit that file when public work changes. [`CONTENT.md`](CONTENT.md) records what was retained, rewritten, and left unverified from the older portfolio.

The View CV link opens [`public/dami-adegbemile-cv.pdf`](public/dami-adegbemile-cv.pdf), copied unchanged from the supplied CV. Replace that file when Dami updates the document.

## SEO and deployment

The canonical URL, sitemap, robots file, and absolute social image URL default to `https://damidev.vercel.app`. Set `VITE_SITE_URL` only if the public domain changes. The 1200 × 630 JPEG at `public/og-image.jpg` is used by Open Graph and Twitter cards. The configured Vercel framework is TanStack Start.

This project has no dependency on the previous portfolio repository.

Manrope is self-hosted from its installed Fontsource package and used throughout the site.

The header has a persistent light/dark switch. Browsers with the View Transition API reveal the new theme in a crisp circle from below the viewport; older browsers and reduced-motion preferences switch instantly.

The contact form opens a prefilled email draft addressed to Dami. It does not send messages through a server or store submissions. Old section paths redirect to homepage anchors on Vercel.
