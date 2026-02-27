import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

const FALLBACK_PNG = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';

const VIRTUAL_PREFIX = 'virtual:figma-asset/';

function figmaAssetPlugin() {
  return {
    name: 'figma-asset-plugin',
    enforce: 'pre' as const,
    resolveId(id: string) {
      if (id.startsWith('figma:asset/')) {
        return VIRTUAL_PREFIX + id.slice('figma:asset/'.length);
      }
    },
    load(id: string) {
      if (id.startsWith(VIRTUAL_PREFIX)) {
        return `export default "${FALLBACK_PNG}";`;
      }
    }
  }
}

export default defineConfig({
  plugins: [
    figmaAssetPlugin(),
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})