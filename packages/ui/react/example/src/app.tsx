import React from 'react';
import { Button } from '@react-ui/react';
import * as stylex from '@stylexjs/stylex';

export function App(): React.ReactNode {
  const styles = stylex.create({
    button: {
      width: '100px',
      height: '100px',
    },
  });

  return (
    <>
      <Button styles={styles}>Button Label</Button>
    </>
  );
}
