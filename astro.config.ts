import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  site: process.env.CI ? 'https://area44.github.io' : 'http://localhost:4321',
  base: 'astro-coverflow-carousel',
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
})
