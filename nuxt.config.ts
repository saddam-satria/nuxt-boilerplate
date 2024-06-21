import postcssConfig from './postcss.config';
import viteConfig from './vite.config.mjs';
import { resolve } from 'path';

export default defineNuxtConfig({
  devtools: {
    enabled: process.env.DEBUG === 'true',
  },
  alias: {
    '@': resolve(__dirname, './'),
  },
  modules: ['@pinia/nuxt', '@nuxt/icon'],
  pinia: {
    storesDirs: ['~/stores/**'],
  },
  css: ['~/assets/css/main.css'],
  postcss: postcssConfig,
  dev: process.env.DEBUG === 'true',
  plugins: [],
  imports: {
    dirs: ['~/composables/**', '~/utils/**'],
  },
  build: {
    transpile: [],
  },

  devServer: {
    port: 3000,
    host: 'localhost',
  },

  vite: {
    server: viteConfig.server,
    build: viteConfig.build,
    vue: {
      customElement: true,
    },
    vueJsx: {
      mergeProps: true,
    },
    optimizeDeps: {
      exclude: [],
    },
    ssr: {
      noExternal: [],
    },
  },
  theme: '',
  app: {
    head: {
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          name: 'charset',
          content: 'UTF-8',
        },
        {
          name: 'description',
          content: 'Nuxt Boilerplate',
        },
      ],
      title: 'Nuxt Boilerplate',
      link: [
        { rel: 'manifest', href: '/manifest.json' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
    },
  },
});
