export type AnyObject = Record<string, unknown>;

export type Assign<T, U> = Omit<T, keyof U> & U;
