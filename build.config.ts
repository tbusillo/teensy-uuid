import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  // If entries is not provided, will be automatically inferred from package.json
  entries: [
    // default
    './src/index',

    // mkdist builder transpiles file-to-file keeping original sources structure
    // {
    //   builder: 'rollup',
    //   emitCjs: true,
    //   input: './src',
    //   outDir: './dist',
    //   format: 'esm',
    //   ext: 'mjs'
    // }
    {
      builder: 'rollup',
      input: './src/index',
      outDir: './dist'
    }
  ],
  rollup: {
    // If you want to use rollup plugins, you can use this option
    emitCJS: true
  },
  declaration: true,
  // Change outDir, default is 'dist'
  outDir: 'dist',

  // Generates .d.ts declaration file
  failOnWarn: false
})
