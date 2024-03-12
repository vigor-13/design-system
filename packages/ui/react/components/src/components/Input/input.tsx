import React from 'react';
import { IconAlertCircle, IconAlertTriangle } from '@tabler/icons-react';
import {
  forwardRef,
  vigor,
  type HTMLVigorProps,
  extractStyleProps,
  createStylexProps,
} from '@react-ui/core';
import * as stylex from '@stylexjs/stylex';
import { styles as _styles } from './input.style';

export interface InputProps extends HTMLVigorProps<'input'> {
  label?: string;
  wrapStyles?: any;
  labelStyles?: any;
  type?: 'warning' | 'error';
}

export const Input = forwardRef<InputProps, 'input'>((props, ref) => {
  const {
    as,
    styles,
    wrapStyles,
    labelStyles,
    className,
    id,
    disabled,
    label,
    type,
    ...otherProps
  } = props;
  const [styleProps, rest] = extractStyleProps(otherProps);
  const stylexProps = createStylexProps(styleProps);

  return (
    <vigor.div {...stylex.props([_styles.wrap, wrapStyles, ...stylexProps])}>
      {label !== undefined && (
        <vigor.label
          {...stylex.props([
            _styles.label,
            disabled === true && _styles.diabedLabel,
            labelStyles,
          ])}
        >
          {label}
        </vigor.label>
      )}
      <vigor.input
        disabled={disabled}
        id={id}
        ref={ref}
        as={as}
        {...rest}
        {...stylex.props([
          _styles.input,
          disabled !== true && type !== undefined && _styles[type],
          disabled !== undefined && _styles.disabledInput,
          styles,
        ])}
      />
      {disabled !== true && type !== undefined && (
        <vigor.div {...stylex.props([_styles.typeDescWrapp])}>
          {type === 'warning' ? (
            <IconAlertCircle
              {...stylex.props([
                _styles.typeDescSvgWarning,
                _styles.typeDescSvg,
              ])}
            />
          ) : (
            <IconAlertTriangle
              {...stylex.props([_styles.typeDescSvgError, _styles.typeDescSvg])}
            />
          )}
          <vigor.p {...stylex.props([_styles.typeDescText])}>
            {type === 'warning' ? 'Warning label' : 'Error label'}
          </vigor.p>
        </vigor.div>
      )}
    </vigor.div>
  );
});

Input.displayName = 'Input';
