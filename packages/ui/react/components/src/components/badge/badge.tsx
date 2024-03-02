import React from 'react';
import {
  vigor,
  forwardRef,
  type HTMLVigorProps,
  extractStyleProps,
  createStylexProps,
} from '@react-ui/core';
import * as stylex from '@stylexjs/stylex';
import { cx } from '../../utils';
import {
  styles as _styles,
  primaryStyles as _primaryStyles,
  secondaryStyles as _secondaryStyles,
  ghostStyles as _ghostStyles,
} from './badge.style';

export interface BadgeProps extends HTMLVigorProps<'div'> {
  variant?: 'primary' | 'secondary' | 'ghost';
  status?: 'default' | 'warning' | 'success' | 'error' | 'neutral';
}

export const Badge = forwardRef<BadgeProps, 'div'>((props, ref) => {
  const {
    children,
    as,
    styles,
    className,
    variant = 'primary',
    status = 'default',
    ...otherProps
  } = props;
  const [styleProps, rest] = extractStyleProps(otherProps);
  const stylexProps = createStylexProps(styleProps);

  return (
    <vigor.div
      className={cx('jefa-badge', className)}
      ref={ref}
      as={as}
      {...stylex.props([
        _styles.common,
        _styles[variant],
        variant === 'primary' && _primaryStyles[status],
        variant === 'secondary' && _secondaryStyles[status],
        variant === 'ghost' && _ghostStyles[status],
        styles,
        ...stylexProps,
      ])}
      {...rest}
    >
      {children}
    </vigor.div>
  );
});

Badge.displayName = 'Badge';
