# AGENTS.md

## Project
Personal portfolio site for Sebastián Quiqui — Astro 7 (static output), hand-written CSS,
bilingual ES (`/`) + EN (`/en/`). No CMS, no database.

## Dev & Deploy
- **Install**: `npm install` (Node 20+).
- **Local**: `npm run dev` → http://localhost:4321/mi-portafolio/
- **Build**: `npm run build` → `dist/`
- **Preview build**: `npm run preview`
- **Regenerate social images**: `npm run og`
- **Deploy**: push to `main` → `.github/workflows/deploy.yml` builds and publishes with
  GitHub Pages. Repo Settings → Pages must be set to **Source: GitHub Actions**.

## Key Facts
- No lint, test, or typecheck command exists. `npm run build` is the only gate.
- **All copy lives in `src/i18n/ui.ts`** (`es` + `en` objects, same shape). The `typeof es`
  type makes the build fail if a key is missing in `en`.
- Site is a project page: `base: '/mi-portafolio'` in `astro.config.mjs`. Internal paths must
  go through `asset()` / `localeUrl()` from `src/i18n/utils.ts` — never hardcode `/`.
- Design tokens and every component style are in `src/styles/global.css` (single file, 17 sections).
- Interactions are progressive enhancement in `src/scripts/ui.ts`, imported once from
  `src/layouts/BaseLayout.astro`.
- CVs: `public/docs/CV-Sebastian-Quiqui-ES.pdf` and `-EN.pdf` (keep these filenames).
- Images used by components live in `src/assets/img/` (optimized at build time); anything in
  `public/` is served as-is.
- Do not commit `dist/`, `.astro/`, or `node_modules/`.
