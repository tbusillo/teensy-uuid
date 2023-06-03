import { defineConfig } from 'tsup'

const { NODE_ENV: env } = process.env
const isProd = !!(env === 'production')

const productionConfig = {
  tsconfig: 'tsconfig.prod.json',
  sourcemap: false,
  minify: true,
  format: ['cjs', 'esm', 'iife'],
  splitting: true,
  treeshake: true,
  minifyIdentifiers: true,
  minifyWhitespace: true
}

const developmentConfig = {
  tsconfig: 'tsconfig.dev.json',
  sourcemap: 'inline',
  format: ['cjs', 'esm']
}

export default defineConfig({
  entry: ['src/index.ts'],
  clean: true,
  dts: true,
  ...(isProd ? productionConfig : developmentConfig)
} as any)
