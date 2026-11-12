/**
 * Prepara el logo para la interfaz: recorta el margen sobrante del JPG original
 * y guarda un WebP cuadrado, centrado en el arte.
 *
 * Uso: node scripts/prepare-logo.mjs
 */
import sharp from 'sharp';

const src = 'src/assets/img/logo-qSEBASp.jpg';
const out = 'src/assets/img/logo-qsebasp.webp';

// Arte detectado dentro del JPG de 460×460 (margen inferior sobrante).
const CROP = { left: 72, top: 24, width: 320, height: 320 };

const info = await sharp(src)
  .extract(CROP)
  .resize(320, 320, { fit: 'cover' })
  .webp({ quality: 88 })
  .toFile(out);

console.log(`${out} — ${info.width}×${info.height}, ${Math.round(info.size / 1024)} KB`);
