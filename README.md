# FCabrera

Personal website of Facundo Cabrera — IT & BI Analyst, Uruguay. Built with React 19, Vite and Tailwind CSS v4, using the FCabrera brand (FC monogram, Montserrat, green `#0F7F55` / `#1FA36C`, ink `#4A4A48`, ground `#F7F6F2`, night `#1B1D1C`).

- `/` — Spanish (default)
- `/en/` — English (switches without reload; `vercel.json` rewrites `/en/` to the app)

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output goes to `dist/`. Deploys as-is on Vercel (framework preset: Vite).

## Where things live

- `src/i18n.ts` — all copy, one object per language.
- `src/index.css` — brand tokens, exposed to Tailwind as `bg-night`, `text-accent`, `border-line`, etc. Light and dark themes follow the visitor's system setting.
- `src/components/` — one component per section; `Monogram.tsx` is the FC logo; `ui.tsx` holds shared bits (labels, chips, icons).
