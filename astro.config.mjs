// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://fcabrera.uy',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
  },
});
