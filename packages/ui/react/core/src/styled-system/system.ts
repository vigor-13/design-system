import mergeWith from 'lodash.mergewith';
import { color, flexbox, layout, space } from './config';
import { type AnyObject } from '../utils';
import { background } from './config/background';

export const systemProps: AnyObject = mergeWith(
  {},
  layout,
  space,
  flexbox,
  color,
  background,
);

export const propNames = [...Object.keys(systemProps)];
const styleProps = { ...systemProps };

export const isStyleProp = (prop: string): boolean => prop in styleProps;
