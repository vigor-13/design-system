import React from 'react';
import { tokens } from 'design-token/dist/stylex/token.stylex.ts';
import { ColorTokenList } from '../../components';

export const StaticColorTokenScreen = (): React.ReactNode => {
  return (
    <>
      <h1>Static Color Token</h1>
      <ColorTokenList token={tokens.vg.static.color} />
    </>
  );
};
