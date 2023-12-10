import React from 'react';
import { Button } from '@react-ui/components';
import * as stylex from '@stylexjs/stylex';
// import { vigor } from '@react-ui/core/src';

const styles = stylex.create({
  button: {
    width: '200px',
    height: '200px',
    borderRadius: '10px',
  },
});

export function App(): React.ReactNode {
  return (
    <>
      <Button styles={styles.button}>HELLO</Button>
    </>
  );
}
