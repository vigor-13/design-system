import React from 'react';
import { Button, useColorMode } from '@react-ui/react';

export function App(): React.ReactNode {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Button
        onClick={() => {
          toggleColorMode();
        }}
      >
        {colorMode}
      </Button>
    </>
  );
}
