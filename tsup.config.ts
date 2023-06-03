import { defineConfig } from 'tsup'

const { NODE_ENV: env } = process.env
const isProd = !!(env === 'production')

export default defineConfig({
  entry: ['src/index.ts'],
  tsconfig: isProd ? 'tsconfig.prod.json' : 'tsconfig.dev.json',
  minify: isProd && 'terser',
  format: ['cjs', 'esm'],
  clean: true,
  sourcemap: !isProd,
  platform: 'neutral',
  dts: true,
  splitting: true,
  target: [
    'node16',
    'chrome',
    'deno',
    'edge',
    'es5',
    'firefox',
    'ios',
    'safari'
  ]
})
