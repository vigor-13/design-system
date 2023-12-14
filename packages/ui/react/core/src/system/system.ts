import React from 'react';
import { type AnyObject } from '../utils';
import { type VigorComponent, type As } from './system.type';

export function styled<Element extends As, Props = AnyObject>(
  element: Element,
  options?: unknown, // TODO: 나중에 확인
): VigorComponent<Element, Props> {
  let _element = element;

  const vigorComponent = React.forwardRef((props: AnyObject, ref) => {
    const asElement = props.as as Element;
    if (asElement !== undefined) _element = asElement;

    return React.createElement(_element, { ref, ...props });
  });

  // TODO: 확인 필요
  vigorComponent.displayName = '';

  return vigorComponent as VigorComponent<Element, Props>;
}
