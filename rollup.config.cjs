// rollup.config.js

const postcss = require('rollup-plugin-postcss');
const typescript = require('@rollup/plugin-typescript');
const peerDepsExternal = require('rollup-plugin-peer-deps-external');
const resolve = require('@rollup/plugin-node-resolve').default;
const commonjs = require('@rollup/plugin-commonjs');

module.exports = {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.cjs.js',
      format: 'cjs',
      sourcemap: true,
      banner: '\'use client\';\n\n',
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      sourcemap: true,
      banner: '\'use client\';\n\n',
    }
  ],
  plugins: [
    postcss({
      config: {
        path: './postcss.config.cjs'
      },
      inject: {
        insertAt: 'top'
      },
      modules: true,
    }),
    peerDepsExternal(),
    resolve(),
    typescript(),
    commonjs(),
  ],
  external: [/\.css$/]
};