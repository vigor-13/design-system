import stylexPlugin from '@stylexjs/rollup-plugin';
import typescript from '@rollup/plugin-typescript';
import { babel } from '@rollup/plugin-babel';
import path from 'path';
const __dirname = path.resolve();

const config = {
  input: './src/index.ts',
  // Ensure that the stylex plugin is used before Babel
  plugins: [
    typescript(),
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
  ],
  output: {
    file: 'dist/index.js',
    format: 'es',
  },
};

export default config;
