// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// Fuentes alojadas en el proyecto (licencia SIL OFL): no dependen de Google al compilar ni al cargar
const fuente = (nombre, pesos) =>
  pesos.map((peso) => ({
    src: [`./src/assets/fonts/${nombre}-latin-${peso}-normal.woff2`],
    weight: peso,
    style: 'normal',
  }));

export default defineConfig({
  site: 'https://estudiomanrique.com',
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Cinzel',
      cssVariable: '--font-display',
      fallbacks: ['Georgia', 'serif'],
      options: { variants: fuente('cinzel', [400, 600]) },
    },
    {
      provider: fontProviders.local(),
      name: 'Figtree',
      cssVariable: '--font-body',
      fallbacks: ['system-ui', 'sans-serif'],
      options: { variants: fuente('figtree', [400, 500, 600]) },
    },
  ],
});
