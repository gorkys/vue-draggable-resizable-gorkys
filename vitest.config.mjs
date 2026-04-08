import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

const rootDir = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [vue()],
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
    alias: {
      '@': path.resolve(rootDir, 'src'),
      '@/components/vue-draggable-resizable': path.resolve(rootDir, 'src/components/vue-draggable-resizable.vue'),
      '@vue/test-utils': path.resolve(rootDir, 'tests/helpers/test-utils-compat.js'),
      '@vue/test-utils-real': path.resolve(rootDir, 'node_modules/@vue/test-utils/dist/vue-test-utils.cjs.js'),
      syn: path.resolve(rootDir, 'tests/helpers/syn-compat.js')
    }
  },
  test: {
    css: true,
    environment: 'jsdom',
    globals: true,
    include: ['tests/**/*.{spec,test}.js'],
    setupFiles: [path.resolve(rootDir, 'tests/setup.js')]
  }
})
