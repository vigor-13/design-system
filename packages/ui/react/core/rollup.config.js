import stylexPlugin from '@stylexjs/rollup-plugin';
import ts from 'rollup-plugin-ts';
import { babel } from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import path from 'path';
const __dirname = path.resolve();

const config = {
  input: './src/index.ts',
  output: {
    file: 'dist/index.js',
    format: 'es',
  },
  // Ensure that the stylex plugin is used before Babel
  plugins: [
    // typescript({
    //   declaration: true,
    // }),
    ts(),
    stylexPlugin({
      // Required. File path for the generated CSS file.
      fileName: 'style/stylex.css',
      // default: false
      dev: false,
      // prefix for all generated classNames
      classNamePrefix: 'x',
      // Required for CSS variable support
      unstable_moduleResolution: {
        // type: 'commonJS' | 'haste'
        // default: 'commonJS'
        type: 'commonJS',
        // The absolute path to the root directory of your project
        rootDir: __dirname,
        themeFileExtension: '.stylex.ts',
      },
    }),
    babel(),
    terser(),
  ],
};

export default config;
