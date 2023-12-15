import React from 'react';
import { ColorModeContext } from './color-mode.context';
import { type ColorModeContextProps } from './color-mode.type';

export function useColorMode(): ColorModeContextProps {
  const context = React.useContext(ColorModeContext);

  if (context === undefined) {
    throw new Error('useColorMode must be used within a ColorModeProvider');
  }

  return context;
}
