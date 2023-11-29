import {
  type Named,
  type Transform,
  type TransformGroup,
} from 'style-dictionary';
import { transformColorToken, colorTokenMatcher } from '../../lib';

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

export const stylexTransformGroup: Named<TransformGroup> = {
  name: 'stylex',
  transforms: [stylexTransformName.name, stylexTransformColorValue.name],
};
