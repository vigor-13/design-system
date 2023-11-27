import { platforms } from '../platforms';

export const config = {
  source: ['src/tokens/**/*.ts'],
  platforms: {
    stylex: platforms.stylex.config,
  },
};
