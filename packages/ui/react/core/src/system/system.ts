import React from 'react';
import { type AnyObject } from '../utils';
import { type VigorComponent, type As } from './system.type';

export function styled<Element extends As, Props = AnyObject>(
  element: Element,
  options?: any, // TODO: 나중에 확인
): any {
  let _element = element;

  const vigorComponent = React.forwardRef((props: AnyObject, ref) => {
    const asElement = props.as as Element;
    if (asElement !== undefined) _element = asElement;

    return React.createElement(_element, { ref, ...props });
  });

  return vigorComponent as VigorComponent<Element, Props>;
}
