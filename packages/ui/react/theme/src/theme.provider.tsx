import React from 'react';
import * as stylex from '@stylexjs/stylex';
import { darkTokens } from './token.stylex.ts';
import { useColorMode } from '@react-ui/color-mode';
import { ThemeContext } from './theme.context';

export interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider(props: ThemeProviderProps): any {
  const { children } = props;
  const { colorMode } = useColorMode();
  const contextValue = React.useMemo(() => null, []);

  return (
    <ThemeContext.Provider value={contextValue}>
      <div {...stylex.props(colorMode === 'dark' && darkTokens)}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
