import { type StorageKey, type ColorMode } from './color-mode.type';

export type StorageManagerType = 'cookie' | 'localStorage';

// export interface StorageManager {
//   type: StorageManagerType;
//   ssr?: boolean;
//   get: (init?: ColorMode) => ColorMode | undefined;
//   set: (value: ColorMode) => void;
// }

// export interface StorageManagerFactoryProps {
//   type: StorageManagerType;
//   cookie?: string;
// }

export interface StorageManagerProps {
  storageManagerType: StorageManagerType;
  useSSR?: boolean;
  cookie?: string;
}

export class StorageManager {
  private readonly _key: StorageKey = 'vigor-ui-color-mode';
  private readonly _cookie?: string;
  private readonly _isCookie: boolean;

  public readonly type: StorageManagerType;
  public ssr: boolean = false;

  constructor(props: StorageManagerProps) {
    this.type = props.storageManagerType;
    this.ssr = props.useSSR !== undefined && props.useSSR;
    this._cookie = props.cookie;
    this._isCookie = !!(
      typeof this._cookie === 'string' && this._cookie !== ''
    );
    this._resolveSSR();
  }

  private readonly _resolveSSR = (): void => {
    switch (this.type) {
      case 'localStorage':
        this.ssr = false;
        break;
      case 'cookie':
        this.ssr = this._isCookie;
        break;
    }
  };

  private readonly _parseCookie = (cookie: string): ColorMode | undefined => {
    const match = cookie.match(new RegExp(`(^| )${this._key}=([^;]+)`));
    return match?.[2] as ColorMode | undefined;
  };

  private readonly _getValueFromLocalStorage = (
    fallback?: ColorMode,
  ): ColorMode | undefined => {
    let value: ColorMode | undefined;

    try {
      const storageValue = localStorage.getItem(this._key);
      value = storageValue !== null ? (storageValue as ColorMode) : fallback;
    } catch (error) {
      console.error(error);
      // TODO: Error handling.
    }

    return value;
  };

  private readonly _getValueFromCookie = (
    fallback?: ColorMode,
  ): ColorMode | undefined => {
    if (typeof this._cookie === 'string' && this._cookie !== '')
      return this._parseCookie(this._cookie);
    const prevCookie = this._parseCookie(document.cookie);
    if (prevCookie !== undefined) return prevCookie;
    return fallback;
  };

  private readonly _setValueToLocalStorage = (value: ColorMode): void => {
    try {
      localStorage.setItem(this._key, value);
    } catch (error) {
      console.error(error);
      // TODO: Error handling.
    }
  };

  private readonly _setValueToCookie = (value: ColorMode): void => {
    document.cookie = `${this._key}=${value}; max-age=31536000; path=/`;
  };

  public get = (fallback?: ColorMode): ColorMode | undefined => {
    let value;

    switch (this.type) {
      case 'localStorage':
        value = this._getValueFromLocalStorage(fallback);
        break;
      case 'cookie':
        value = this._getValueFromCookie(fallback);
        break;
    }

    return value;
  };

  public set = (value: ColorMode): void => {
    switch (this.type) {
      case 'localStorage':
        this._setValueToLocalStorage(value);
        break;
      case 'cookie':
        this._setValueToCookie(value);
        break;
    }
  };
}
