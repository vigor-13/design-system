import { type DOMElements } from '../utils';
import { styled } from './system';
import {
  type As,
  type VigorComponent,
  type HTMLVigorComponents,
} from './system.type';

type VigorFactory = <Element extends As, Props extends object = {}>(
  element: Element,
  options?: any, // TODO: 나중에 확인
) => VigorComponent<Element, Props>;

class Factory {
  private readonly _cache = new Map<DOMElements, VigorComponent<DOMElements>>();

  public build = (): VigorFactory & HTMLVigorComponents => {
    return new Proxy(styled, {
      /**
       * @example const Div = vigor('div');
       */
      apply(target, thisArg, args: [DOMElements, unknown]) {
        // TODO: unknown 나중에 확인
        return styled(...args);
      },

      /**
       * @example <vigor.div>
       */
      get: (_, element: DOMElements) => {
        if (!this._cache.has(element)) {
          this._cache.set(element, styled(element));
        }

        return this._cache.get(element);
      },
    }) as VigorFactory & HTMLVigorComponents;
  };
}

const factory = new Factory();

export const vigor = factory.build();
