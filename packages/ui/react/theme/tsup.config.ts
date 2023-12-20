import { defineConfig, type Options } from 'tsup';
// import { copyTokensFromNodeModules } from './scripts/copy-tokens';

export default defineConfig((options: Options) => ({
  entry: ['src/index.ts'],
  format: ['esm'],
  clean: true,
  minify: true,
  dts: true,
  // onSuccess: async () => {
  //   await copyTokensFromNodeModules();
  // },
}));
