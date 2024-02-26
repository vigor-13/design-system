import type * as CSS from 'csstype';

export interface ColorProps {
  /**
   * The CSS `color` property
   */
  color?: CSS.Property.Color;
  /**
   * The CSS `fill` property for icon svgs and paths
   */
  fill?: CSS.Property.Color;
  /**
   * The CSS `stroke` property for icon svgs and paths
   */
  stroke?: CSS.Property.Color;
}

export const color = {
  color: '',
  fill: '',
  stroke: '',
};
