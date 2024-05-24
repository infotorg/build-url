import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/build-url.js',
  output: [
    {
      file: 'dist/build-url.cjs.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/build-url.esm.js',
      format: 'esm',
    },
    {
      file: 'dist/build-url.umd.js',
      format: 'umd',
      name: 'buildUrl',
      sourcemap: true,
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    babel({
      babelHelpers: 'runtime',
      exclude: 'node_modules/**',
    }),
    terser(),
  ],
};
