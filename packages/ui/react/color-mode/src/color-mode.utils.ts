import { type ColorMode } from './color-mode.type';

export class ColorModeUtils {
  private readonly classNames = {
    light: 'vigor-ui-light',
    dark: 'vigor-ui-dark',
  };

  private readonly _query = (): MediaQueryList => {
    return window.matchMedia('(prefers-color-scheme: dark)');
  };

  public getSystemTheme = (fallback?: ColorMode): ColorMode => {
    const dark = this._query().matches ?? fallback === 'dark';
    return dark ? 'dark' : 'light';
  };

  public setClassName = (dark: boolean): void => {
    document.body.classList.add(
      dark ? this.classNames.dark : this.classNames.light,
    );
    document.body.classList.remove(
      dark ? this.classNames.light : this.classNames.dark,
    );
  };

  public setDataset = (value: ColorMode): void => {
    document.documentElement.dataset.theme = value;
    document.documentElement.style.colorScheme = value;
  };

  public addListener = (fn: (cm: ColorMode) => unknown): any => {
    const mql = this._query();
    const listener = (e: MediaQueryListEvent): any => {
      fn(e.matches ? 'dark' : 'light');
    };

    if (typeof mql.addListener === 'function') mql.addListener(listener);
    else mql.addEventListener('change', listener);

    return () => {
      if (typeof mql.removeListener === 'function')
        mql.removeListener(listener);
      else mql.removeEventListener('change', listener);
    };
  };

  // TODO:
  // public preventTransition = (): void => {};
}
