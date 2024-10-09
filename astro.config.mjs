// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Probun',
      defaultLocale: 'en',
      social: {
        github: 'https://github.com/benjamin08/probun',
      },
      sidebar: [
        {
          label: 'Getting Started',
          autogenerate: { directory: 'getting-started' },
        },
        {
          label: 'API',
          autogenerate: { directory: 'api' },
        },
        {
          label: 'Helpers',
          autogenerate: { directory: 'helpers' },
        },
      ],
    }),
  ],
});
