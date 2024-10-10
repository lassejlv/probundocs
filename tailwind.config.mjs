import starlightPlugin from '@astrojs/starlight-tailwind';

// Generated color palettes
const accent = { 200: '#b3c7fd', 600: '#2836d5', 900: '#1a2a6d', 950: '#142049' };
const gray = { 100: '#f6f6f6', 200: '#eeeeed', 300: '#c2c2c1', 400: '#8b8b8a', 500: '#585857', 700: '#383837', 800: '#272726', 900: '#181818' };

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: { accent, gray },
    },
  },
  plugins: [starlightPlugin()],
};
