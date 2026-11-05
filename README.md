# FCabrera

Personal website of Facundo Cabrera — IT & BI Analyst, Uruguay. Built with [Astro](https://astro.build) as a static site, using the FCabrera brand (FC monogram, Montserrat, green `#0F7F55` / `#1FA36C`, ink `#4A4A48`, ground `#F7F6F2`, night `#1B1D1C`).

- `/` — Spanish (default)
- `/en/` — English

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output goes to `dist/`. Deploys as-is on Vercel (framework preset: Astro).

## Edit content

All copy lives in `src/i18n.ts` (one object per language). Brand tokens live in `src/styles/global.css`. The monogram is `src/components/Monogram.astro`.
