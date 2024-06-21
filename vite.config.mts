import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    minify: 'esbuild',
    sourcemap: false,
    assetsDir: 'public',
    outDir: 'build',
  },
  server: {
    proxy: {
      '/api/v1': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
    },
  },
});
