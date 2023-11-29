import StyleDictionary from 'style-dictionary';
import { platforms } from '../platforms';
import { config } from './config';

export class StyleDictionaryFactory {
  private readonly _styleDictionary = StyleDictionary;

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
    } = platforms.stylex;

    this._styleDictionary.registerTransform(stylexTransformName);
    this._styleDictionary.registerTransform(stylexTransformColorValue);
    this._styleDictionary.registerTransformGroup(stylexTransformGroup);
  };

  private readonly _registerPlatforms = (): void => {
    this._registerJsModule();
    this._registerStyleX();
  };

  public build = (): void => {
    this._registerPlatforms();
    this._styleDictionary.extend(config).buildAllPlatforms();
  };
}
