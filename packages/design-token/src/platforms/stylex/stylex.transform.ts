import {
  type Named,
  type Transform,
  type TransformGroup,
} from 'style-dictionary';
import {
  transformColorToken,
  colorTokenMatcher,
  darkModeColorMatcher,
  transformDarkColorToken,
} from '../../lib';

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
  matcher: colorTokenMatcher,
  transformer: transformColorToken,
};

export const stylexTransformDarkModeColor: Named<Transform> = {
  type: 'attribute',
  name: 'stylex-transform-dark-mode-color',
  matcher: darkModeColorMatcher,
  transformer: transformDarkColorToken,
};

export const stylexTransformGroup: Named<TransformGroup> = {
  name: 'stylex',
  transforms: [
    stylexTransformName.name,
    stylexTransformColorValue.name,
    stylexTransformDarkModeColor.name,
  ],
};
