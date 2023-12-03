import { type DOMElements } from '../utils';
import { styled } from './core.styled';

class VigorFactory {
  private readonly _cache = new Map<DOMElements, DOMElements>();

  public init = (): any => {
    return new Proxy(styled, {
      get: (_, element: DOMElements) => {
        if (!this._cache.has(element)) this._cache.set(element, element);

        return this._cache.get(element);
      },
    });
  };
}

const vigorFactory = new VigorFactory();

export const vigor = vigorFactory.init();
