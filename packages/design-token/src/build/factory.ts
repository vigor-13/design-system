import StyleDictionary from 'style-dictionary';
import { platforms } from '../platforms';
import { config } from './config';

export const FORMAT_STYLEX = 'stylex';

export class StyleDictionaryFactory {
  private readonly _styleDictionary = StyleDictionary;

  /* Custom Format */
  private readonly _registerFormat = (): void => {
    const { stylex, jsModule } = platforms;
    this._styleDictionary.registerFormat(stylex.format);
    this._styleDictionary.registerFormat(jsModule.format);
  };

  /* Transform */
  private readonly _registerJsModule = (): void => {
    const { jsModuleTransformColorValue, jsModuleTransformGroup } =
      platforms.jsModule;

    this._styleDictionary.registerTransform(jsModuleTransformColorValue);
    this._styleDictionary.registerTransformGroup(jsModuleTransformGroup);
  };

  private readonly _registerStyleX = (): void => {
    const {
      stylexTransformGroup,
      stylexTransformName,
      stylexTransformColorValue,
      stylexTransformDarkModeColor,
    } = platforms.stylex;

    this._styleDictionary.registerTransform(stylexTransformName);
    this._styleDictionary.registerTransform(stylexTransformColorValue);
    this._styleDictionary.registerTransform(stylexTransformDarkModeColor);
    this._styleDictionary.registerTransformGroup(stylexTransformGroup);
  };

  private readonly _registerPlatforms = (): void => {
    this._registerJsModule();
    this._registerStyleX();
  };

  /* Build */
  public build = (): void => {
    this._registerFormat();
    this._registerPlatforms();
    this._styleDictionary.extend(config).buildAllPlatforms();
  };
}
