import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';
import * as path from 'path';


// https://vitejs.dev/config/
export default defineConfig({
  base: "/kinopoisk-app/",
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import 'src/styles/mixins';
        `
      },
    },
  },
  server: {
    proxy: {
      "https://api.kinopoisk.dev": {
        target: 'https://api.kinopoisk.dev',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^https:\/\/api.kinopoisk.dev/, ""),
      }
    }
  },
})
