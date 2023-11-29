import { type TransformedToken } from 'style-dictionary';
import tinycolor from 'tinycolor2';

export const transformColorToken = (token: TransformedToken): any => {
  const { darken, lighten } = token as unknown as {
    darken: number | undefined;
    lighten: number | undefined;
  };
  if (darken !== undefined) {
    return `#${tinycolor(token.value).darken(darken).toHex()}`;
  }

  if (lighten !== undefined) {
    return `#${tinycolor(token.value).lighten(lighten).toHex()}`;
  }
};

export const colorTokenMatcher = (token: TransformedToken): boolean => {
  const { darken, lighten } = token as unknown as {
    darken: number | undefined;
    lighten: number | undefined;
  };

  if (
    (darken !== undefined && darken > 0) ||
    (lighten !== undefined && lighten > 0)
  ) {
    return true;
  } else {
    return false;
  }
};
