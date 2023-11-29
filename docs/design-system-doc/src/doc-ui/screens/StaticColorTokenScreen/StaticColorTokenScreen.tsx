import React from 'react';
import token from 'design-token/dist/token';
import { ColorTokenList } from '../../components';

export const StaticColorTokenScreen = (): React.ReactNode => {
  return (
    <>
      <h1>Static Color Token</h1>
      <ColorTokenList token={token.vg.static.color} />
    </>
  );
};
