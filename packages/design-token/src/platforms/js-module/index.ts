import { config } from './jsModule.config';
import * as transforms from './jsmodule.transform';
import { format } from './jsModule.format';

export default {
  config,
  ...transforms,
  format,
};
