import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Publicado en GitHub Pages como project page: https://lukayucci.github.io/joaquin-portfolio/
export default defineConfig({
  site: 'https://lukayucci.github.io',
  base: '/joaquin-portfolio',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  build: {
    inlineStylesheets: 'auto',
  },
});
