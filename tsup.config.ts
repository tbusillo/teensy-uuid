import { defineConfig } from 'tsup'

const { NODE_ENV: env } = process.env
const isProd = !!(env === 'production')

export default defineConfig({
  entry: ['src/index.ts'],
  tsconfig: isProd ? 'tsconfig.prod.json' : 'tsconfig.dev.json',
  minify: isProd && 'terser',
  minifyIdentifiers: isProd,
  minifyWhitespace: isProd,
  format: ['cjs', 'esm'],
  external: ['crypto'],
  clean: true,
  sourcemap: !isProd && 'inline',
  dts: true,
  splitting: true,
  treeshake: isProd,
  terserOptions: {
    compress: {
      drop_console: isProd
    }
  }
})
