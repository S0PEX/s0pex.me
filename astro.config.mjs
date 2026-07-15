// @ts-check
import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'

import sitemap from '@astrojs/sitemap'

import react from '@astrojs/react'

import tailwind from '@astrojs/tailwind'

import expressiveCode from 'astro-expressive-code'

import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
  site: 'https://s0pex.me',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
  integrations: [
    tailwind(),
    react(),
    icon(),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', de: 'de' },
      },
    }),
    expressiveCode(),
    mdx(),
  ],
})
