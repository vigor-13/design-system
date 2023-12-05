import { type AnyObject, type DOMElements } from '../utils';
import { styled } from './core.system';
import {
  type As,
  type VigorComponent,
  type HTMLVigorComponents,
} from './core.system.type';

type VigorFactory = (<Element extends As, Props = AnyObject>(
  element: Element,
  options?: any, // TODO: 나중에 확인
) => VigorComponent<Element, Props>) &
  HTMLVigorComponents;

class Factory {
  private readonly _cache = new Map<DOMElements, VigorComponent<DOMElements>>();

  public build = (): VigorFactory => {
    return new Proxy(styled, {
      /**
       * @example const Div = vigor('div');
       */
      apply(_, __, args: [DOMElements, any]) {
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
    }) as VigorFactory;
  };
}

const factory = new Factory();

export const vigor = factory.build();
