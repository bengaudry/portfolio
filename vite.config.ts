import { defineConfig } from "vite"
import { reactRouter } from "@react-router/dev/vite"

// https://vite.dev/config/
export default defineConfig({
	plugins: [reactRouter()],
	build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          i18n: ['i18next', 'react-i18next'],
          motion: ['framer-motion']
        }
      }
    }
  }
})
