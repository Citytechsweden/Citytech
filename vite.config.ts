import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// Transparent 1x1 PNG fallback för figma:asset/ imports
const FALLBACK_PNG = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';

// ✅ VIKTIGT: \0 prefix krävs av Rollup i produktionsbyggen!
const VIRTUAL_PREFIX = '\0virtual:figma-asset/';

function figmaAssetPlugin() {
  return {
    name: 'figma-asset-plugin',
    enforce: 'pre' as const,
    resolveId(id: string) {
      if (id.startsWith('figma:asset/')) {
        // Returnera \0-prefixat ID → säkerställer att load() körs i produktion
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