import { type Format } from 'style-dictionary';
import type StyleDictionary from 'style-dictionary';

export const STYLEX_FORMAT_NAME = 'stylex';

export const format: StyleDictionary.Named<Format> = {
  name: STYLEX_FORMAT_NAME,
  formatter: function ({ dictionary, platform, options, file }) {
    const tokens = dictionary.allTokens
      .map((token) => {
        const value = JSON.stringify(token.value);
        return `"${token.name}": ${value},`;
      })
      .join('\n');

    const darkTokens = dictionary.allTokens
      .map((token) => {
        let value = JSON.stringify(token.value);

        if (typeof token.darkMode === 'string') {
          value = JSON.stringify(token.darkMode);
        }

        return `"${token.name}": ${value},`;
      })
      .join('\n');

    const result = `
      import * as stylex from '@stylexjs/stylex';

      export const tokens = stylex.defineVars({
        ${tokens}
      });

      export const darkTokens = stylex.createTheme(tokens, {
        ${darkTokens}
      })
    `;

    return result;
  },
};
