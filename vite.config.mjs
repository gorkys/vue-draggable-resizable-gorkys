import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const rootDir = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [vue()],
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
    alias: {
      '@': path.resolve(rootDir, 'src'),
      '@/components/vue-draggable-resizable': path.resolve(rootDir, 'src/components/vue-draggable-resizable.vue')
    }
  },
  build: {
    lib: {
      entry: path.resolve(rootDir, 'src/index.js'),
      name: 'VueDraggableResizable',
      formats: ['es', 'umd'],
      fileName: (format) => (
        format === 'es'
          ? 'vue-draggable-resizable-gorkys.js'
          : 'vue-draggable-resizable-gorkys.umd.cjs'
      )
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
