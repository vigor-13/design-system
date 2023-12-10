import React from 'react';
import { vigor } from '@react-ui/core/src';
import * as stylex from '@stylexjs/stylex';
import { styles } from './button.style';

export function Button(): React.ReactNode {
  return (
    <>
      <vigor.button {...stylex.props([styles.button])}>button</vigor.button>
    </>
  );
}
