export type ColorMode = 'light' | 'dark';
export type ColorModeWithSystem = ColorMode | 'system';
export type StorageKey = 'vigor-ui-color-mode';

export interface ColorModeContextProps {
  forced?: boolean;
  colorMode: ColorMode;
  setColorMode: (value: any) => void;
  toggleColorMode: () => void;
}

export interface ColorModeProviderOptions {
  initialColorMode?: ColorModeWithSystem;
  useSystemColorMode?: boolean;
}
