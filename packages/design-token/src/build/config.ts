import { type Config } from 'style-dictionary';
import { platforms } from '../platforms';

export const config: Config = {
  source: ['src/tokens/**/*.ts'],
  platforms: {
    jsModule: platforms.jsModule.config,
    stylex: platforms.stylex.config,
  },
};
