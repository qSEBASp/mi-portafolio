import type { Lang } from './ui';

const raw = import.meta.env.BASE_URL || '/';
export const base = raw.endsWith('/') ? raw : `${raw}/`;

/** Dominio de producción, sin barra final. */
export const site = 'https://qsebasp.github.io';

/** Ruta absoluta dentro del sitio (para imágenes, PDFs, etc.). */
export const asset = (path: string) => `${base}${path.replace(/^\/+/, '')}`;

/** URL de la portada de un idioma. */
export const localeUrl = (lang: Lang, hash = '') =>
  `${base}${lang === 'en' ? 'en/' : ''}${hash ? `#${hash}` : ''}`;

/** URL canónica absoluta. */
export const canonicalUrl = (lang: Lang) =>
  `${site}${localeUrl(lang)}`;

export const otherLang = (lang: Lang): Lang => (lang === 'es' ? 'en' : 'es');
