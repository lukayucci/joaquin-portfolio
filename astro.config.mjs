import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// NOTE: when publishing under a repo path on GitHub Pages, set `base: '/<repo>'`.
export default defineConfig({
  site: 'https://pxp2p.github.io',
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
