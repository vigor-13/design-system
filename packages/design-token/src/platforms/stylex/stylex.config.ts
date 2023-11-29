import { type Platform } from 'style-dictionary';

export const config: Platform = {
  buildPath: 'dist/',
  transformGroup: 'stylex',
  files: [
    {
      destination: 'token.stylex.js',
      format: 'javascript/module-flat',
    },
  ],
};
