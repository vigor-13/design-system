import React from 'react';
import { type ColorModeContextProps } from './color-mode.type';

export const ColorModeContext = React.createContext(
  {} as unknown as ColorModeContextProps,
);

ColorModeContext.displayName = 'ColorModeContext';
