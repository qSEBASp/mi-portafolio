import { defineConfig } from 'astro/config';

// El sitio vive en https://qsebasp.github.io/mi-portafolio/
export default defineConfig({
  site: 'https://qsebasp.github.io',
  base: '/mi-portafolio',
  trailingSlash: 'ignore',
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
  devToolbar: {
    enabled: false,
  },
});
