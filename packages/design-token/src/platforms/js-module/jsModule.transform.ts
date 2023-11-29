import {
  type Named,
  type Transform,
  type TransformGroup,
} from 'style-dictionary';
import { transformColorToken, colorTokenMatcher } from '../../lib';

export const jsModuleTransformColorValue: Named<Transform> = {
  type: `value`,
  name: 'jsModule-transform-color-value',
  transitive: true,
  matcher: colorTokenMatcher,
  transformer: transformColorToken,
};

export const jsModuleTransformGroup: Named<TransformGroup> = {
  name: 'jsModule',
  transforms: [jsModuleTransformColorValue.name],
};
