import postcssConfig from './postcss.config';
import viteConfig from './vite.config';

export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  css: ['~/assets/css/main.css'],
  postcss: postcssConfig,
  dev: true,
  devServer: {
    port: 3000,
    host: '127.0.0.1',
  },
  build: {},
  vite: {
    server: viteConfig.server,
    build: viteConfig.build,
    vue: {
      customElement: true,
    },
    vueJsx: {
      mergeProps: true,
    },
  },
  theme: '',
});
