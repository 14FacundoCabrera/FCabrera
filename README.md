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
- `public/og.png` — share preview image (1200×630). `index.html` holds the share texts; the live address is set there and in `src/useLang.ts` (`SITE`).
- `src/index.css` — brand tokens, exposed to Tailwind as `bg-night`, `text-accent`, `border-line`, etc. Light and dark themes follow the visitor's system setting.
- `src/components/` — one component per section; `Monogram.tsx` is the FC logo; `ui.tsx` holds shared bits (labels, chips, icons).

## Add a client to the carousel

1. Take a full-page screenshot of the client's site at 1440 px wide (taller is fine: the carousel scrolls through it on hover). Save it as `.webp` in `public/clients/`, e.g. `public/clients/acme.webp`.
2. Add an entry to the `clients` list at the top of `src/i18n.ts`:

   ```ts
   {
     name: 'Acme',
     url: 'https://acme.com/',
     image: '/clients/acme.webp',
     industry: { es: 'Gastronomía', en: 'Food & drink' },
     work: { es: 'Landing y menú online', en: 'Landing page and online menu' },
   },
   ```

3. Delete the `[Cliente N]` placeholder entries and their `cliente-N.svg` images.
