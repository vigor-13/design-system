import { defineConfig, type Options } from 'tsup';

export default defineConfig((options: Options) => ({
  entry: ['src/index.ts'],
  clean: true,
  minify: true,
  dts: true,
  format: ['esm'],
  target: 'es2019',
  sourcemap: true,
}));
