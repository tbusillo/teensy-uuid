import { defineConfig } from 'vitest/config'
import path from 'node:path'

export default defineConfig({
  test: {
    include: ['src/tests/**/*.test.ts']
  },
  resolve: {
    alias: {
      '@src/': path.resolve(__dirname, './src')
    }
  }
})
