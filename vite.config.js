import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
export default defineConfig({
  plugins: [tailwindcss(), react()],
  build: {
    rollupOptions: {
      output: {
       manualChunks(id) {
          // Split heavy libraries like react, chart.js, etc.
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'react'
            if (id.includes('chart.js')) return 'charts'
            if (id.includes('lucide-react')) return 'icons'
            return 'vendor'
          }
        },
      },
    },
  },
});
