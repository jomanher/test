import type { APIRoute } from 'astro';

// Una sola página indexable; se amplía aquí si se agregan más
const rutas = ['/'];

export const GET: APIRoute = ({ site }) => {
  const hoy = new Date().toISOString().slice(0, 10);
  const urls = rutas
    .map((ruta) => `  <url>\n    <loc>${new URL(ruta, site).href}</loc>\n    <lastmod>${hoy}</lastmod>\n  </url>`)
    .join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
