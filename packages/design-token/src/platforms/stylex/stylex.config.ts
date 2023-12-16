import { type Platform } from 'style-dictionary';

export const config: Platform = {
  buildPath: 'dist/',
  transformGroup: 'stylex',
  files: [
    {
      destination: 'stylex/token.stylex.ts',
      format: 'stylex',
    },
  ],
};
