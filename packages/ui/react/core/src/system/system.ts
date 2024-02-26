import React from 'react';
import { objectFilter, type AnyObject } from '../utils';
import { type VigorComponent, type As } from './system.type';
import { isStyleProp } from '../styled-system/system';

export const extractStyleProps: any = (props: AnyObject): AnyObject[] => {
  const result = objectFilter(props, (_, prop) => isStyleProp(prop));
  return result;
};

export function styled<Element extends As, Props extends object = {}>(
  element: Element,
  options?: unknown, // TODO: 확인 필요
): VigorComponent<Element, Props> {
  let _element = element;

  const vigorComponent = React.forwardRef(function VigorComponent(
    props: AnyObject,
    ref,
  ) {
    // 엘리먼트 타입 결정
    const asElement = props.as as Element;
    if (asElement !== undefined) {
      _element = asElement;
    } else {
      _element = element;
    }

    // TODO: 스타일 프로퍼티 처리
    // ex) <vigor.div w="200px" />
    const [styleProps, otherProps] = extractStyleProps(props);

    return React.createElement(_element, {
      ref,
      ...otherProps,
    });
  });

  vigorComponent.displayName = '';

  return vigorComponent as VigorComponent<Element, Props>;
}
