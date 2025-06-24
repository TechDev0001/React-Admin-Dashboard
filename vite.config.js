import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import autoprefixer from 'autoprefixer'

import postcssImport from 'postcss-import'
// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(),
    react(),
    postcssImport(),
    autoprefixer(),

  ],
})
