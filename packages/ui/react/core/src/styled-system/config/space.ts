import type * as CSS from 'csstype';

/**
 * Types for space related CSS properties
 */
export interface SpaceProps {
  /**
   * Margin on top, left, bottom and right
   */
  m?: CSS.Property.Margin;
  margin?: CSS.Property.Margin;
  /**
   * Margin on left
   */
  ml?: CSS.Property.MarginLeft;
  marginLeft?: CSS.Property.MarginLeft;
  /**
   * Margin on right
   */
  mr?: CSS.Property.MarginRight;
  marginRight?: CSS.Property.MarginRight;
  /**
   * Margin on top
   */
  mt?: CSS.Property.MarginTop;
  marginTop?: CSS.Property.MarginTop;
  /**
   * Margin on bottom
   */
  mb?: CSS.Property.MarginBottom;
  marginBottom?: CSS.Property.MarginBottom;
  /**
   * Margin on left and right
   */
  mx?: CSS.Property.MarginInline;
  marginX?: CSS.Property.MarginInline;
  marginInline?: CSS.Property.MarginInline;
  /**
   * Margin on top and bottom
   */
  my?: CSS.Property.MarginBlock;
  marginY?: CSS.Property.MarginBlock;
  marginBlock?: CSS.Property.MarginBlock;
  /**
   * Padding on top, left, bottom and right
   */
  p?: CSS.Property.Padding;
  padding?: CSS.Property.Padding;
  /**
   * Padding on top
   */
  pt?: CSS.Property.PaddingTop;
  paddingTop?: CSS.Property.PaddingTop;
  /**
   * Padding on bottom
   */
  pb?: CSS.Property.PaddingBottom;
  paddingBottom?: CSS.Property.PaddingBottom;
  /**
   * Padding on left
   */
  pl?: CSS.Property.PaddingLeft;
  paddingLeft?: CSS.Property.PaddingLeft;
  /**
   * Padding on right
   */
  pr?: CSS.Property.PaddingRight;
  paddingRight?: CSS.Property.PaddingRight;
  /**
   * Padding on left and right
   */
  px?: CSS.Property.PaddingInline;
  paddingX?: CSS.Property.PaddingInline;
  paddingInline?: CSS.Property.PaddingInline;
  /**
   * Padding on top and bottom
   */
  py?: CSS.Property.PaddingBlock;
  paddingY?: CSS.Property.PaddingBlock;
  paddingBlock?: CSS.Property.PaddingBlock;
}

export const space = {
  m: '',
  margin: '',
  ml: '',
  marginLeft: '',
  mr: '',
  marginRight: '',
  mt: '',
  marginTop: '',
  mb: '',
  marginBottom: '',
  mx: '',
  marginX: '',
  marginInline: '',
  my: '',
  marginY: '',
  marginBlock: '',
  p: '',
  padding: '',
  pt: '',
  paddingTop: '',
  pb: '',
  paddingBottom: '',
  pl: '',
  paddingLeft: '',
  pr: '',
  paddingRight: '',
  px: '',
  paddingX: '',
  paddingInline: '',
  py: '',
  paddingY: '',
  paddingBlock: '',
};
