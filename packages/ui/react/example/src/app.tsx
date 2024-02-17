import React from 'react';
import { Button, useColorMode } from '@react-ui/react';
import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({});

export function App(): React.ReactNode {
  // const { toggleColorMode } = useColorMode();
  // const [size, setSize] = React.useState<'md' | 'sm'>('md');
  return (
    <>
      <Button disabled variant="ghost" styles={styles}>
        Button Label
      </Button>
    </>
  );
}
