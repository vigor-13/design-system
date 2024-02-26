import React from 'react';
import * as stylex from '@stylexjs/stylex';
import {
  type HTMLVigorProps,
  forwardRef,
  vigor,
  extractStyleProps,
  createStylexProps,
} from '@react-ui/core';
import { cx } from '../../utils';

export interface BoxProps extends HTMLVigorProps<'div'> {}

export const Box = forwardRef<BoxProps, 'div'>((props, ref) => {
  const { className, children, as, styles, ...otherProps } = props;

  const [styleProps, rest] = extractStyleProps(otherProps);
  const stylexProps = createStylexProps(styleProps);

  return (
    <vigor.div
      className={cx('jefa-box', className)}
      ref={ref}
      as={as}
      {...rest}
      {...stylex.props([styles, ...stylexProps])}
    >
      {children}
    </vigor.div>
  );
});

Box.displayName = 'Box';
