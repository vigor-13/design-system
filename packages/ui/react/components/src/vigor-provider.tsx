import React from 'react';
import { ColorModeProvider } from '@react-ui/color-mode';
import { ThemeProvider } from '@react-ui/theme';

interface VigorUIProviderProps {
  children: React.ReactNode;
  // colorModeOptions: any // TODO:
  // themeOptions: any // TODO:
}

export function VigorUIProvider(props: VigorUIProviderProps): any {
  const { children } = props;

  return (
    <ColorModeProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </ColorModeProvider>
  );
}
