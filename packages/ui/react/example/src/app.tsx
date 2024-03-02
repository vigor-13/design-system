import React from 'react';
import * as stylex from '@stylexjs/stylex';
import { Button, Box, Badge } from '@react-ui/react';
// import { tokens } from '@react-ui/react/node_modules/@react-ui/theme/src/token.stylex.ts';

const styles = stylex.create({
  box: {},
});

export function App(): React.ReactNode {
  return (
    <>
      <Box styles={styles.box} p="20px" m="20px">
        <Button w="200px">Button Label</Button>
        <Badge ml="20px">Label</Badge>
      </Box>
    </>
  );
}
