import React from 'react';
import { ColorModeContext } from './color-mode.context';
import { StorageManager } from './storage-manager';
import {
  type ColorModeProviderOptions,
  type ColorMode,
  type ColorModeWithSystem,
} from './color-mode.type';
import { ColorModeUtils } from './color-mode.utils';

const noop = (): any => {};

const localStorageManager = new StorageManager({
  storageManagerType: 'localStorage',
});

const _getColorModeFromStorage = (
  manager: StorageManager,
  fallback?: ColorMode,
): ColorMode | undefined => {
  return manager.type === 'cookie' && manager.ssr
    ? manager.get(fallback)
    : fallback;
};

export interface ColorModeProviderProps {
  children: React.ReactNode;
  value?: ColorMode;
  options?: ColorModeProviderOptions;
  colorModeManager?: StorageManager;
}

export function ColorModeProvider(props: ColorModeProviderProps): any {
  const {
    children,
    value,
    options = {},
    colorModeManager = localStorageManager,
  } = props;

  const colorModeUtils = React.useMemo(() => new ColorModeUtils(), []);

  const defaultColorMode = React.useMemo(
    () => (options.initialColorMode === 'dark' ? 'dark' : 'light'),
    [options],
  );

  const [colorMode, setRawColorMode] = React.useState(
    _getColorModeFromStorage(colorModeManager, defaultColorMode),
  );

  const [resolvedColorMode, setResolvedColorMode] = React.useState(
    _getColorModeFromStorage(colorModeManager),
  );

  const resolvedValue =
    options.initialColorMode === 'system' && colorMode === undefined
      ? resolvedColorMode
      : colorMode;

  const setColorMode = React.useCallback(
    (value: ColorModeWithSystem) => {
      const resolved =
        value === 'system' ? colorModeUtils.getSystemTheme() : value;
      setRawColorMode(resolved);

      console.log('resolved: ', resolved);
      colorModeUtils.setClassName(resolved === 'dark');
      colorModeUtils.setDataset(resolved);
      colorModeManager.set(resolved);
    },
    [colorModeManager, colorModeUtils],
  );

  const toggleColorMode = React.useCallback(() => {
    setColorMode(resolvedValue === 'dark' ? 'light' : 'dark');
  }, [resolvedValue, setColorMode]);

  // 옵션에서 초기 컬러 모드를 system으로 설정한 경우 앱 마운트시 시스템에서 컬러모드 확인하여 설정함.
  React.useLayoutEffect(() => {
    if (options.initialColorMode === 'system')
      setResolvedColorMode(colorModeUtils.getSystemTheme());
  }, []);

  // TODO:
  React.useEffect(() => {
    const valueFromStorage = colorModeManager.get();

    if (valueFromStorage !== undefined) {
      setColorMode(valueFromStorage);
      return;
    }

    if (options.initialColorMode === 'system') {
      setColorMode('system');
      return;
    }

    setColorMode(defaultColorMode);
  }, [
    colorModeManager,
    defaultColorMode,
    options.initialColorMode,
    setColorMode,
  ]);

  // TODO:
  React.useEffect(() => {
    if (options.useSystemColorMode !== true) return;
    return colorModeUtils.addListener(setColorMode);
  }, [options.useSystemColorMode, colorModeUtils, setColorMode]);

  const contextValue = React.useMemo(
    () => ({
      colorMode: value ?? resolvedValue ?? 'light',
      toggleColorMode: value !== undefined ? noop : toggleColorMode,
      setColorMode: value !== undefined ? noop : setColorMode,
      forced: value !== undefined,
    }),
    [value, resolvedValue, toggleColorMode, setColorMode],
  );

  // React.useEffect(() => {
  //   console.log('<><><><><><><><><><><><><><><><><><><><>');
  //   console.log('systemTheme', colorModeUtils.getSystemTheme());
  //   console.log('value: ', value);
  //   console.log('defaultColorMode: ', defaultColorMode);
  //   console.log('colodrMode: ', colorMode);
  //   console.log('resolvedColorMode: ', resolvedColorMode);
  //   console.log('resolvedValue: ', resolvedValue);
  //   console.log('FINAL COLOR MODE: ', value ?? resolvedValue ?? 'light');
  // }, [
  //   colorModeUtils,
  //   value,
  //   defaultColorMode,
  //   colorMode,
  //   resolvedColorMode,
  //   resolvedValue,
  // ]);

  return (
    <ColorModeContext.Provider value={contextValue}>
      {children}
    </ColorModeContext.Provider>
  );
}
