import React from 'react';
import { type AnyObject } from '../utils';
import { type VigorComponent, type As } from './system.type';

export function styled<Element extends As, Props extends object = {}>(
  element: Element,
  options?: unknown, // TODO: 확인 필요
): VigorComponent<Element, Props> {
  let _element = element;

  const vigorComponent = React.forwardRef(function VigorComponent(
    props: AnyObject,
    ref,
  ) {
    const asElement = props.as as Element;
    if (asElement !== undefined) {
      _element = asElement;
    } else {
      _element = element;
    }

    return React.createElement(_element, { ref, ...props });
  });

  vigorComponent.displayName = '';

  return vigorComponent as VigorComponent<Element, Props>;
}
