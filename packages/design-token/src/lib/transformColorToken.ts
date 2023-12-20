import { type TransformedToken } from 'style-dictionary';
import tinycolor from 'tinycolor2';

export const transformColorToken = (token: TransformedToken): string => {
  const { darken, lighten } = token as unknown as {
    darken: number;
    lighten: number;
  };

  if (darken !== undefined) {
    const result = `#${tinycolor(token.value as string)
      .darken(darken)
      .toHex()}`;

    return result;
  }

  if (lighten !== undefined) {
    const result = `#${tinycolor(token.value as string)
      .lighten(lighten)
      .toHex()}`;

    return result;
  }

  return token.value;
};

export const transformDarkColorToken = (
  token: TransformedToken,
): TransformedToken => {
  const result = `#${tinycolor(token.value as string)
    .darken(20)
    .spin(180)
    .toHex()}`;

  token.darkMode = result;
  console.log(token);
  return token;
};

export const colorTokenMatcher = (token: TransformedToken): boolean => {
  const { darken, lighten, darkMode } = token as unknown as {
    darken: number | undefined;
    lighten: number | undefined;
    darkMode: boolean;
  };

  if (
    (darken !== undefined && darken > 0) ||
    (lighten !== undefined && lighten > 0) ||
    darkMode
  ) {
    return true;
  } else {
    return false;
  }
};

export const darkModeColorMatcher = (token: TransformedToken): boolean => {
  const { darkMode } = token as unknown as {
    darkMode: null | undefined;
  };

  if (darkMode === null) {
    return true;
  } else {
    return false;
  }
};
