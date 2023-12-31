import type React from 'react';
import { type ColorModeWithSystem, type StorageKey } from './color-mode.type';

interface ColorModeInitializerProps {
  storageType?: 'localStorage' | 'cookie';
  initialColorMode?: ColorModeWithSystem;
  storageKey?: StorageKey;
}

const VALID_VALUES = new Set(['dark', 'light', 'system']);

/**
 * runtime safe-guard against invalid color mode values
 */
function normalizeColorMode(
  initialColorMode: ColorModeWithSystem,
): ColorModeWithSystem {
  let value = initialColorMode;
  if (!VALID_VALUES.has(value)) value = 'light';
  return value;
}

const commonScript = (colorMode: ColorModeWithSystem): ColorModeWithSystem => {
  const mediaQuery = '(prefers-color-scheme: dark)';
  const systemColorMode = window.matchMedia(mediaQuery).matches
    ? 'dark'
    : 'light';
  const _colorMode = colorMode === 'system' ? systemColorMode : colorMode;
  const documentElement = document.documentElement;
  const documentBody = document.body;
  const isDarkMode = _colorMode === 'dark';

  documentBody.classList.add(isDarkMode ? 'vigor-ui-dark' : 'vigor-ui-light');
  documentBody.classList.remove(
    isDarkMode ? 'vigor-ui-light' : 'vigor-ui-dark',
  );

  documentElement.style.colorScheme = _colorMode;
  documentElement.dataset.theme = _colorMode;

  return _colorMode;
};

/**
 * run local-storage initialize script
 */
const localStorageScript = (
  initialColorMode: ColorModeWithSystem,
  storageKey: string,
): void => {
  try {
    const prevColorMode = localStorage.getItem(storageKey);

    prevColorMode !== null
      ? commonScript(prevColorMode as ColorModeWithSystem)
      : localStorage.setItem(storageKey, commonScript(initialColorMode));
  } catch (error) {
    console.error(error);
    // TODO: Error handling;
  }
};

/**
 * run cookie-storage initialize script
 */
const cookieStorageScript = (
  initialColorMode: ColorModeWithSystem,
  storageKey: string,
): void => {
  try {
    const prevCookie = document.cookie.match(
      new RegExp('(^| )'.concat(storageKey, '=([^;]+)')),
    );
    const prevCookieValue = prevCookie !== null ? prevCookie[2] : null;

    if (prevCookieValue !== null) {
      commonScript(prevCookieValue as ColorModeWithSystem);
    } else {
      document.cookie = ''
        .concat(storageKey, '=')
        .concat(commonScript(initialColorMode), '; max-age=31536000; path=/');
    }
  } catch (error) {
    console.error(error);
    // TODO: Error handling;
  }
};

/**
 * Color Mode Initializer
 */
export function ColorModeInitializer(
  props: ColorModeInitializerProps = {},
): React.ReactNode {
  const {
    initialColorMode = 'light',
    storageType = 'localStorage',
    storageKey = 'vigor-ui-color-mode',
  } = props;

  const _initialColorMode = normalizeColorMode(initialColorMode);
  const isCookie = storageType === 'cookie';

  isCookie
    ? cookieStorageScript(_initialColorMode, storageKey)
    : localStorageScript(_initialColorMode, storageKey);
  return '';
}
