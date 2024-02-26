import * as stylex from '@stylexjs/stylex';

export const styleProperties = stylex.create({
  // Layout
  display: (value) => ({
    display: value,
  }),
  width: (value) => ({
    width: value,
  }),
  w: (value) => ({
    width: value,
  }),
  maxWidth: (value) => ({
    maxWidth: value,
  }),
  maxW: (value) => ({
    maxWidth: value,
  }),
  minWidth: (value) => ({
    minWidth: value,
  }),
  minW: (value) => ({
    minWidth: value,
  }),
  height: (value) => ({
    height: value,
  }),
  h: (value) => ({
    height: value,
  }),
  maxHeight: (value) => ({
    maxHeight: value,
  }),
  maxH: (value) => ({
    maxHeight: value,
  }),
  minHeight: (value) => ({
    minHeight: value,
  }),
  minH: (value) => ({
    minHeight: value,
  }),
  verticalAlign: (value) => ({
    verticalAlign: value,
  }),
  overflow: (value) => ({
    overflow: value,
  }),
  overflowX: (value) => ({
    overflowX: value,
  }),
  overflowY: (value) => ({
    overflowY: value,
  }),
  boxSizing: (value) => ({
    boxSizing: value,
  }),
  boxDecorationBreak: (value) => ({
    boxDecorationBreak: value,
  }),
  float: (value) => ({
    float: value,
  }),
  objectFit: (value) => ({
    objectFit: value,
  }),
  objectPosition: (value) => ({
    objectPosition: value,
  }),
  overscrollBehavior: (value) => ({
    overscrollBehavior: value,
  }),
  overscroll: (value) => ({
    overscroll: value,
  }),
  overscrollBehaviorX: (value) => ({
    overscrollBehaviorX: value,
  }),
  overscrollX: (value) => ({
    overscrollX: value,
  }),
  overscrollBehaviorY: (value) => ({
    overscrollBehaviorY: value,
  }),
  overscrollY: (value) => ({
    overscrollY: value,
  }),
  visibility: (value) => ({
    visibility: value,
  }),
  isolation: (value) => ({
    isolation: value,
  }),
  aspectRatio: (value) => ({
    aspectRatio: value,
  }),

  // Space
  m: (value) => ({
    mmargin: value,
  }),
  margin: (value) => ({
    margin: value,
  }),
  ml: (value) => ({
    marginLeft: value,
  }),
  marginLeft: (value) => ({
    marginLeft: value,
  }),
  mr: (value) => ({
    marginRight: value,
  }),
  marginRight: (value) => ({
    marginRight: value,
  }),
  mt: (value) => ({
    marginTop: value,
  }),
  marginTop: (value) => ({
    marginTop: value,
  }),
  mb: (value) => ({
    marginBottom: value,
  }),
  marginBottom: (value) => ({
    marginBottom: value,
  }),
  mx: (value) => ({
    marginHorizontal: value,
  }),
  marginX: (value) => ({
    marginHorizontal: value,
  }),
  marginInline: (value) => ({
    marginInline: value,
  }),
  my: (value) => ({
    marginVertical: value,
  }),
  marginY: (value) => ({
    marginVertical: value,
  }),
  marginBlock: (value) => ({
    marginBlock: value,
  }),
  p: (value) => ({
    padding: value,
  }),
  padding: (value) => ({
    padding: value,
  }),
  pt: (value) => ({
    paddingTop: value,
  }),
  paddingTop: (value) => ({
    paddingTop: value,
  }),
  pb: (value) => ({
    paddingBottom: value,
  }),
  paddingBottom: (value) => ({
    paddingBottom: value,
  }),
  pl: (value) => ({
    paddingLeft: value,
  }),
  paddingLeft: (value) => ({
    paddingLeft: value,
  }),
  pr: (value) => ({
    paddingRight: value,
  }),
  paddingRight: (value) => ({
    paddingRight: value,
  }),
  px: (value) => ({
    paddingHorizontal: value,
  }),
  paddingX: (value) => ({
    paddingHorizontal: value,
  }),
  paddingInline: (value) => ({
    paddingInline: value,
  }),
  py: (value) => ({
    paddingVertical: value,
  }),
  paddingY: (value) => ({
    paddingVertical: value,
  }),
  paddingBlock: (value) => ({
    paddingBlock: value,
  }),

  // Flexbox
  alignItems: (value) => ({
    alignItems: value,
  }),
  alignContent: (value) => ({
    alignContent: value,
  }),
  justifyItems: (value) => ({
    justifyItems: value,
  }),
  justifyContent: (value) => ({
    justifyContent: value,
  }),
  flexWrap: (value) => ({
    flexWrap: value,
  }),
  flexFlow: (value) => ({
    flexFlow: value,
  }),
  flexBasis: (value) => ({
    flexBasis: value,
  }),
  flexDirection: (value) => ({
    flexDirection: value,
  }),
  flexDir: (value) => ({
    flexDirection: value,
  }),
  flex: (value) => ({
    flex: value,
  }),
  gap: (value) => ({
    gap: value,
  }),
  rowGap: (value) => ({
    rowGap: value,
  }),
  columnGap: (value) => ({
    columnGap: value,
  }),
  justifySelf: (value) => ({
    justifySelf: value,
  }),
  alignSelf: (value) => ({
    alignSelf: value,
  }),
  order: (value) => ({
    order: value,
  }),
  flexGrow: (value) => ({
    flexGrow: value,
  }),
  flexShrink: (value) => ({
    flexShrink: value,
  }),
  placeItems: (value) => ({
    placeItems: value,
  }),
  placeContent: (value) => ({
    placeContent: value,
  }),
  placeSelf: (value) => ({
    placeSelf: value,
  }),
});

export const createStylexProps = (props: any) => {
  const {
    // Layout
    display,
    width,
    w,
    maxWidth,
    maxW,
    minWidth,
    minW,
    height,
    h,
    maxHeight,
    maxH,
    minHeight,
    minH,
    verticalAlign,
    overflow,
    overflowX,
    overflowY,
    boxSizing,
    boxDecorationBreak,
    float,
    objectFit,
    objectPosition,
    overscrollBehavior,
    overscroll,
    overscrollBehaviorX,
    overscrollX,
    overscrollBehaviorY,
    overscrollY,
    visibility,
    isolation,
    aspectRatio,

    // Space
    m,
    margin,
    ml,
    marginLeft,
    mr,
    marginRight,
    mt,
    marginTop,
    mb,
    marginBottom,
    mx,
    marginX,
    marginInline,
    my,
    marginY,
    marginBlock,
    p,
    padding,
    pt,
    paddingTop,
    pb,
    paddingBottom,
    pl,
    paddingLeft,
    pr,
    paddingRight,
    px,
    paddingX,
    paddingInline,
    py,
    paddingY,
    paddingBlock,

    // Flexbox
    alignItems,
    alignContent,
    justifyItems,
    justifyContent,
    flexWrap,
    flexFlow,
    flexBasis,
    flexDirection,
    flexDir,
    flex,
    gap,
    rowGap,
    columnGap,
    justifySelf,
    alignSelf,
    order,
    flexGrow,
    flexShrink,
    placeItems,
    placeContent,
    placeSelf,
  } = props;

  return [
    // Layout
    display && styleProperties.display(display),
    width && styleProperties.width(width),
    w && styleProperties.w(w),
    maxWidth && styleProperties.maxWidth(maxWidth),
    maxW && styleProperties.maxW(maxW),
    minWidth && styleProperties.minWidth(minWidth),
    minW && styleProperties.minW(minW),
    height && styleProperties.height(height),
    h && styleProperties.h(h),
    maxHeight && styleProperties.maxHeight(maxHeight),
    maxH && styleProperties.maxH(maxH),
    minHeight && styleProperties.minHeight(minHeight),
    minH && styleProperties.minH(minH),
    verticalAlign && styleProperties.verticalAlign(verticalAlign),
    overflow && styleProperties.overflow(overflow),
    overflowX && styleProperties.overflowX(overflowX),
    overflowY && styleProperties.overflowY(overflowY),
    boxSizing && styleProperties.boxSizing(boxSizing),
    boxDecorationBreak &&
      styleProperties.boxDecorationBreak(boxDecorationBreak),
    float && styleProperties.float(float),
    objectFit && styleProperties.objectFit(objectFit),
    objectPosition && styleProperties.objectPosition(objectPosition),
    overscrollBehavior &&
      styleProperties.overscrollBehavior(overscrollBehavior),
    overscroll && styleProperties.overscroll(overscroll),
    overscrollBehaviorX &&
      styleProperties.overscrollBehaviorX(overscrollBehaviorX),
    overscrollX && styleProperties.overscrollX(overscrollX),
    overscrollBehaviorY &&
      styleProperties.overscrollBehaviorY(overscrollBehaviorY),
    overscrollY && styleProperties.overscrollY(overscrollY),
    visibility && styleProperties.visibility(visibility),
    isolation && styleProperties.isolation(isolation),
    aspectRatio && styleProperties.aspectRatio(aspectRatio),

    // Space
    m && styleProperties.m(m),
    margin && styleProperties.margin(margin),
    ml && styleProperties.ml(ml),
    marginLeft && styleProperties.marginLeft(marginLeft),
    mr && styleProperties.mr(mr),
    marginRight && styleProperties.marginRight(marginRight),
    mt && styleProperties.mt(mt),
    marginTop && styleProperties.marginTop(marginTop),
    mb && styleProperties.mb(mb),
    marginBottom && styleProperties.marginBottom(marginBottom),
    mx && styleProperties.mx(mx),
    marginX && styleProperties.marginX(marginX),
    marginInline && styleProperties.marginInline(marginInline),
    my && styleProperties.my(my),
    marginY && styleProperties.marginY(marginY),
    marginBlock && styleProperties.marginBlock(marginBlock),
    p && styleProperties.p(p),
    padding && styleProperties.padding(padding),
    pt && styleProperties.pt(pt),
    paddingTop && styleProperties.paddingTop(paddingTop),
    pb && styleProperties.pb(pb),
    paddingBottom && styleProperties.paddingBottom(paddingBottom),
    pl && styleProperties.pl(pl),
    paddingLeft && styleProperties.paddingLeft(paddingLeft),
    pr && styleProperties.pr(pr),
    paddingRight && styleProperties.paddingRight(paddingRight),
    px && styleProperties.px(px),
    paddingX && styleProperties.paddingX(paddingX),
    paddingInline && styleProperties.paddingInline(paddingInline),
    py && styleProperties.py(py),
    paddingY && styleProperties.paddingY(paddingY),
    paddingBlock && styleProperties.paddingBlock(paddingBlock),

    // Flexbox
    alignItems && styleProperties.alignItems(alignItems),
    alignContent && styleProperties.alignContent(alignContent),
    justifyItems && styleProperties.justifyItems(justifyItems),
    justifyContent && styleProperties.justifyContent(justifyContent),
    flexWrap && styleProperties.flexWrap(flexWrap),
    flexFlow && styleProperties.flexFlow(flexFlow),
    flexBasis && styleProperties.flexBasis(flexBasis),
    flexDirection && styleProperties.flexDirection(flexDirection),
    flexDir && styleProperties.flexDir(flexDir),
    flex && styleProperties.flex(flex),
    gap && styleProperties.gap(gap),
    rowGap && styleProperties.rowGap(rowGap),
    columnGap && styleProperties.columnGap(columnGap),
    justifySelf && styleProperties.justifySelf(justifySelf),
    alignSelf && styleProperties.alignSelf(alignSelf),
    order && styleProperties.order(order),
    flexGrow && styleProperties.flexGrow(flexGrow),
    flexShrink && styleProperties.flexShrink(flexShrink),
    placeItems && styleProperties.placeItems(placeItems),
    placeContent && styleProperties.placeContent(placeContent),
    placeSelf && styleProperties.placeSelf(placeSelf),
  ];
};
