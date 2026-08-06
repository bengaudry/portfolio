// @ts-check
import { defineConfig } from 'astro/config'
import react from '@astrojs/react'

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [react()],

  i18n: {
      locales: ['fr', 'en'],
      defaultLocale: 'fr',
      routing: {
          prefixDefaultLocale: true
      }
	},

  adapter: node({
    mode: 'standalone'
  })
})