import React from 'react';
import { Button } from '@react-ui/components';
import { useColorMode } from '@react-ui/color-mode';
import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  button: {
    width: '200px',
    height: '200px',
    borderRadius: '10px',
  },
});

export function App(): React.ReactNode {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Button
        styles={styles.button}
        onClick={() => {
          toggleColorMode();
        }}
      >
        {colorMode}
      </Button>
    </>
  );
}
