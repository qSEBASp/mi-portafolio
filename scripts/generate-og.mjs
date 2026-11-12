/**
 * Genera las imágenes sociales e iconos a partir de SVG.
 * Uso: npm run og
 *
 * Requiere sharp (viene con Astro para optimizar imágenes).
 */
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';

await mkdir('public', { recursive: true });

const OG = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="glow" cx="0.16" cy="0.06" r="0.75">
      <stop offset="0" stop-color="#f04438" stop-opacity="0.22"/>
      <stop offset="0.55" stop-color="#f04438" stop-opacity="0.05"/>
      <stop offset="1" stop-color="#f04438" stop-opacity="0"/>
    </radialGradient>
    <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
      <path d="M100 0H0v100" fill="none" stroke="#f4f2ee" stroke-opacity="0.05" stroke-width="1"/>
    </pattern>
  </defs>

  <rect width="1200" height="630" fill="#08080a"/>
  <rect width="1200" height="630" fill="url(#grid)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <rect x="0" y="0" width="6" height="630" fill="#f04438"/>

  <text x="880" y="540" font-family="Georgia, 'Times New Roman', serif" font-size="330"
        fill="#f4f2ee" fill-opacity="0.045">qS</text>

  <text x="74" y="92" font-family="Consolas, 'Courier New', monospace" font-size="19"
        letter-spacing="4" fill="#f04438">qSEBASp — PORTAFOLIO / 2026</text>

  <text x="70" y="300" font-family="Georgia, 'Times New Roman', serif" font-size="116"
        fill="#f4f2ee">Sebastián</text>
  <text x="70" y="416" font-family="Georgia, 'Times New Roman', serif" font-size="116"
        font-style="italic" fill="#f04438">Quiqui</text>

  <line x1="74" y1="470" x2="1126" y2="470" stroke="#f4f2ee" stroke-opacity="0.12"/>

  <text x="74" y="518" font-family="Consolas, 'Courier New', monospace" font-size="19"
        letter-spacing="2.4" fill="#928e87">DESARROLLADOR JUNIOR · PYTHON · AUTOMATIZACIÓN · WEB</text>

  <text x="74" y="590" font-family="Consolas, 'Courier New', monospace" font-size="16"
        letter-spacing="1.6" fill="#66635e">qsebasp.github.io/mi-portafolio</text>

  <text x="1126" y="518" text-anchor="end" font-family="Consolas, 'Courier New', monospace"
        font-size="16" letter-spacing="1.6" fill="#928e87">BOGOTÁ, CO</text>
  <text x="1126" y="590" text-anchor="end" font-family="Consolas, 'Courier New', monospace"
        font-size="16" letter-spacing="1.6" fill="#66635e">4.7110° N, 74.0721° W</text>
</svg>`;

const ICON_SRC = 'src/assets/img/logo-qSEBASp.jpg';
const ICON_CROP = { left: 72, top: 24, width: 320, height: 320 };

const og = await sharp(Buffer.from(OG)).png({ quality: 92 }).toBuffer();
await sharp(og).toFile('public/og.png');
await sharp(Buffer.from(OG)).resize(1200, 630).jpeg({ quality: 86 }).toFile('public/og.jpg');
await sharp(ICON_SRC)
  .extract(ICON_CROP)
  .resize(180, 180)
  .png()
  .toFile('public/apple-touch-icon.png');

console.log('Listo: public/og.png, public/og.jpg, public/apple-touch-icon.png');
