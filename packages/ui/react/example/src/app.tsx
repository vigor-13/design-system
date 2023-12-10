import React from 'react';
import * as stylex from '@stylexjs/stylex';
import { vigor } from '@react-ui/core/src';
import { Button } from '@react-ui/components';

const styles = stylex.create({
  root: {
    width: '100px',
    height: '100px',
    backgroundColor: 'red',
  },
  second: {
    width: '100px',
    height: '100px',
    backgroundColor: 'coral',
  },
  test: {
    borderRadius: '10px',
  },
});

export function App(): React.ReactNode {
  return (
    <>
      <vigor.div as="button" {...stylex.props([styles.second, styles.test])}>
        example
      </vigor.div>
      <Button />
    </>
  );
}
