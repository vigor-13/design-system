import React from 'react';
import * as stylex from '@stylexjs/stylex';
import { IconCheck } from '@tabler/icons-react';
import {
  forwardRef,
  vigor,
  type HTMLVigorProps,
  extractStyleProps,
  createStylexProps,
} from '@react-ui/core';
import { styles as _styles } from './checkbox.style';
import { cx } from '../../utils';

export interface CheckboxProps extends HTMLVigorProps<'input'> {
  wrapStyles?: any;
  labelBoxStyles?: any;
  labelTextStyles?: any;
  label?: string;
}

export const Checkbox = forwardRef<CheckboxProps, 'input'>((props, ref) => {
  const {
    id,
    className,
    as,
    styles,
    wrapStyles,
    labelBoxStyles,
    labelTextStyles,
    label,
    ...otherProps
  } = props;
  const [styleProps, rest] = extractStyleProps(otherProps);
  const stylexProps = createStylexProps(styleProps);

  return (
    <vigor.div
      className="jefa-checkbox_wrap"
      {...stylex.props([_styles.wrap, wrapStyles, ...stylexProps])}
    >
      <vigor.input
        id={id}
        type="checkbox"
        className={cx('jefa-checkbox', className)}
        ref={ref}
        as={as}
        {...rest}
        {...stylex.props([_styles.checkbox, styles])}
      />
      <vigor.label
        className="jefa-checkbox_box"
        htmlFor={id}
        {...stylex.props([_styles.labelBox, labelBoxStyles])}
      >
        <IconCheck {...stylex.props([_styles.labelSvg])} />
      </vigor.label>
      {label !== undefined && (
        <vigor.label
          className="jefa-checkbox_label"
          htmlFor={id}
          {...stylex.props([_styles.labelText])}
        >
          {label}
        </vigor.label>
      )}
    </vigor.div>
  );
});

Checkbox.displayName = 'Checkbox';
