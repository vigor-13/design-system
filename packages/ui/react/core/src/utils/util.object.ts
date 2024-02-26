import { type AnyObject } from './util.type';

export type Dict<T = any> = Record<string, T>;
type FilterFn<T> = (value: any, key: string, object: T) => boolean;

export function objectFilter<T extends Dict>(
  object: T,
  fn: FilterFn<T>,
): AnyObject[] {
  const result: Dict = {};
  const other: Dict = {};

  Object.keys(object).forEach((key) => {
    const value = object[key];
    const shouldPass = fn(value, key, object);
    if (shouldPass) {
      result[key] = value;
    } else {
      other[key] = value;
    }
  });

  return [result, other];
}
