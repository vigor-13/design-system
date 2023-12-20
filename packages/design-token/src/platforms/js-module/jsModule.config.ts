import { type Platform } from 'style-dictionary';

export const config: Platform = {
  buildPath: 'dist/',
  transformGroup: 'jsModule',
  files: [
    {
      destination: 'token.js',
      format: 'javascript/module',
    },
    {
      destination: 'token.d.ts',
      format: 'typescript/module-declarations',
    },
  ],
};
