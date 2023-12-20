import React from 'react';
import {
  type RightJoinProps,
  type As,
  type PropsOf,
  type ComponentWithAs,
} from './system.type';

/**
 * All credit goes to Chance (Reach UI), Haz (Reakit) and (fluentui)
 * for creating the base type definitions upon which we improved on
 */
export function forwardRef<Props extends object, Component extends As>(
  component: React.ForwardRefRenderFunction<
    any,
    RightJoinProps<PropsOf<Component>, Props> & { as?: As }
  >,
): ComponentWithAs<Component, Props> {
  return React.forwardRef(component) as unknown as ComponentWithAs<
    Component,
    Props
  >;
}
