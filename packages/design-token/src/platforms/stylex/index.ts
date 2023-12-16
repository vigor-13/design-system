import { config } from './stylex.config';
import * as transforms from './stylex.transform';
import { format } from './stylex.format';

export default {
  config,
  ...transforms,
  format,
};
