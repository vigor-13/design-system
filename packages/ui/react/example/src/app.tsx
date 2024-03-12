import React from 'react';
import { Button, useColorMode, Input } from '@react-ui/react';

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
      <Input ml="20px" label="Label" placeholder="Placeholder" />
    </>
  );
}
