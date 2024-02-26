import React from 'react';
import {
  vigor,
  forwardRef,
  createStylexProps,
  extractStyleProps,
  type HTMLVigorProps,
} from '@react-ui/core';
import * as stylex from '@stylexjs/stylex';
import { cx } from '../../utils';
import { styles as _styles } from './button.style';

export interface ButtonProps extends HTMLVigorProps<'button'> {
  size?: 'md' | 'sm';
  variant?: 'primary' | 'secondary' | 'ghost';
}

export const Button = forwardRef<ButtonProps, 'button'>((props, ref) => {
  const {
    size = 'md',
    variant = 'primary',
    children,
    as,
    styles,
    className,
    ...otherProps
  } = props;

  const [styleProps, rest] = extractStyleProps(otherProps);
  const stylexProps = createStylexProps(styleProps);

  return (
    <vigor.button
      className={cx('jefa-button', className)}
      ref={ref}
      as={as}
      {...rest}
      {...stylex.props([
        _styles.reset,
        _styles.common,
        _styles[size],
        _styles[variant],
        styles,
        ...stylexProps,
      ])}
    >
      {children}
    </vigor.button>
  );
});

Button.displayName = 'Button';
