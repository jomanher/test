# Estudio Manrique

Sitio web del Estudio Manrique (Puerto Maldonado, Madre de Dios), hecho con [Astro](https://astro.build).

## Comandos

| Comando | Acción |
|---|---|
| `npm install` | Instala dependencias |
| `npm run dev` | Servidor local en `http://localhost:4321` |
| `npm run build` | Genera el sitio estático en `dist/` |
| `npm run preview` | Sirve `dist/` para revisarlo |

## Dónde cambiar el contenido

- Datos de contacto, WhatsApp, coordenadas y año del pie: `src/data/sitio.ts`
- Textos e imágenes de las especialidades: `src/data/especialidades.ts`
- Fotos: `src/assets/` (las de especialidades en `src/assets/especialidades/`, mismos nombres de archivo)
- Favicon: `public/favicon.png`

Las fuentes (Cinzel y Figtree, licencia SIL OFL) están alojadas en `src/assets/fonts/`.
