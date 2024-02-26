import mergeWith from 'lodash.mergewith';
import { flexbox, layout, space } from './config';
import { type AnyObject } from '../utils';

export const systemProps: AnyObject = mergeWith({}, layout, space, flexbox);

export const propNames = [...Object.keys(systemProps)];
const styleProps = { ...systemProps };

export const isStyleProp = (prop: string): boolean => prop in styleProps;
