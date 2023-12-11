import React from 'react';
import { vigor, forwardRef, type HTMLVigorProps } from '@react-ui/core';
import * as stylex from '@stylexjs/stylex';
import { styles as _styles } from './button.style';

export interface ButtonProps extends HTMLVigorProps<'button'> {}

export const Button = forwardRef<ButtonProps, 'button'>((props, ref) => {
  const { children, as, styles, ...rest } = props;

  return (
    <vigor.button
      ref={ref}
      as={as}
      {...rest}
      {...stylex.props([_styles.button, styles])}
    >
      {children}
    </vigor.button>
  );
});
