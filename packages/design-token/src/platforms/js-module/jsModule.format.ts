import { type Format } from 'style-dictionary';
import type StyleDictionary from 'style-dictionary';

export const STYLEX_FORMAT_NAME = 'stylex';

export const format: StyleDictionary.Named<Format> = {
  name: 'javascript/module',
  formatter: function ({ dictionary, platform, options, file }) {
    return (
      'export default ' + JSON.stringify(dictionary.tokens, null, 2) + ';\n'
    );
  },
};
