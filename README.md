# Mi Portafolio — qSEBASp

Portafolio personal de **Sebastián Quiqui**, desarrollador junior autodidacta en Bogotá.
Funciona como CV en línea, vitrina de proyectos y prueba de cómo trabajo.

- **Live:** https://qsebasp.github.io/mi-portafolio/
- **English:** https://qsebasp.github.io/mi-portafolio/en/
- **Repo:** https://github.com/qSEBASp/mi-portafolio

---

## Qué tiene este sitio

| Pieza | Detalle |
|---|---|
| **Stack** | Astro 7 (salida estática), CSS escrito a mano, TypeScript solo donde ayuda |
| **Idiomas** | Español en `/`, inglés en `/en/`; el toggle conserva la sección actual |
| **Diseño** | Editorial de una columna: Instrument Serif para títulos, Plus Jakarta Sans para texto, JetBrains Mono para etiquetas, un único acento rojo `#f04438` |
| **Interacción** | Paleta de comandos (`Ctrl/⌘ + K`), casos de estudio en `<dialog>` nativo, scroll-spy, reloj en vivo de Bogotá |
| **Rendimiento** | Fuentes auto-hospedadas (subset latin), imágenes optimizadas con `astro:assets` a WebP, JS mínimo y diferido |
| **SEO** | `hreflang` ES/EN, Open Graph generado, JSON-LD `Person`, sitemap y robots |
| **Accesibilidad** | HTML semántico, skip link, foco visible, `prefers-reduced-motion`, diálogos nativos |

---

## Estructura

```text
mi-portafolio/
├── .github/workflows/deploy.yml   → build + deploy a GitHub Pages
├── public/                        → estáticos servidos tal cual
│   ├── docs/                      → CV en PDF (ES y EN)
│   ├── favicon.svg
│   ├── og.png · og.jpg · apple-touch-icon.png
│   ├── robots.txt · sitemap.xml · site.webmanifest
├── scripts/generate-og.mjs        → genera las imágenes sociales con sharp
├── src/
│   ├── assets/
│   │   ├── fonts/                 → woff2 subset latin
│   │   └── img/                   → retrato y portadas (optimizadas en build)
│   ├── components/                → Topbar, Hero, About, Stack, Projects…
│   ├── i18n/
│   │   ├── ui.ts                  → TODO el texto del sitio, ES + EN
│   │   └── utils.ts               → base, asset(), localeUrl()
│   ├── layouts/BaseLayout.astro   → <head>, SEO, estilos y scripts
│   ├── pages/
│   │   ├── index.astro            → versión en español
│   │   ├── en/index.astro         → versión en inglés
│   │   └── 404.astro
│   ├── scripts/ui.ts              → paleta, diálogos, reveal, scroll-spy…
│   └── styles/
│       ├── fonts.css              → @font-face generado
│       └── global.css             → sistema de diseño completo
├── astro.config.mjs
└── package.json
```

---

## Cómo correrlo localmente

Requiere **Node 20+**.

```bash
npm install
npm run dev        # http://localhost:4321/mi-portafolio/
```

Otros comandos:

```bash
npm run build      # genera dist/
npm run preview    # sirve dist/ en local
npm run og         # regenera og.png, og.jpg y apple-touch-icon.png
```

---

## Cómo editar el contenido

Todo el texto vive en **`src/i18n/ui.ts`**, como dos objetos `es` y `en` con la misma
forma. Si añades una clave en uno, el tipo `typeof es` obliga a añadirla en el otro:
el build falla antes de publicar una traducción incompleta.

Los CV son archivos estáticos:

- `public/docs/CV-Sebastian-Quiqui-ES.pdf`
- `public/docs/CV-Sebastian-Quiqui-EN.pdf`

Si reemplazas los PDF, conserva esos nombres y los enlaces seguirán funcionando.

---

## Cómo publicar

El deploy lo hace GitHub Actions en cada push a `main`
(`.github/workflows/deploy.yml`), así que **no hay que subir `dist/`**.

> **Requisito una sola vez:** en el repo, *Settings → Pages → Build and deployment*
> debe estar en **Source: GitHub Actions**. Con el modo antiguo («Deploy from a branch»)
> el sitio seguiría sirviendo la versión estática anterior.

```bash
git add .
git commit -m "descripción del cambio"
git push origin main
```

---

## Tecnologías

Astro · TypeScript · CSS a mano · sharp (imágenes sociales) ·
[Simple Icons](https://simpleicons.org) y [Lucide](https://lucide.dev) como referencia de iconografía (SVG inline propios).

---

## Contacto

- sebasfonque@gmail.com
- +57 304 296 6826
- github.com/qSEBASp
- linkedin.com/in/sebas-quiqui-dev

---

## Licencia

MIT — ver [LICENSE](LICENSE).
