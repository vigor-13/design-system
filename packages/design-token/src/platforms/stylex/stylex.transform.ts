import {
  type Named,
  type Transform,
  type TransformGroup,
} from 'style-dictionary';
import tinycolor from 'tinycolor2';

export const stylexTransformName: Named<Transform> = {
  type: `name`,
  name: `stylex-transform-name`,
  matcher: (_) => true,
  transformer: (token) => {
    return token.path.join('.');
  },
};

export const stylexTransformColorValue: Named<Transform> = {
  type: `value`,
  name: 'stylex-transform-color-value',
  transitive: true,
  matcher: (token) => {
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
  },
  transformer: (token) => {
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
  },
};

export const stylexTransformGroup: Named<TransformGroup> = {
  name: 'stylex',
  transforms: [stylexTransformName.name, stylexTransformColorValue.name],
};
