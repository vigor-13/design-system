import React from 'react';
import { vigor, forwardRef } from '@react-ui/core/src';
import * as stylex from '@stylexjs/stylex';
import { styles } from './button.style';
import { type AnyObject } from '@react-ui/core/src/utils';

export const Button = forwardRef<AnyObject, 'button'>((props, ref) => {
  const { children, as, ...rest } = props;

  return (
    <vigor.button
      ref={ref}
      as={as}
      {...rest}
      {...stylex.props([styles.button()])}
    >
      {children}
    </vigor.button>
  );
});
