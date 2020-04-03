// Implementation taken from
// https://github.com/es-shims/Promise.allSettled/issues/5#issuecomment-559374432

export function allSettled<T>(iterable: Iterable<Promise<T>>): Promise<PromiseResult<T>[]> {
  const arr = Array.from(iterable, item => {
    return item
      .then(value => ({ status: 'fulfilled', value } as PromiseResolution<T>))
      .catch(reason => ({ status: 'rejected', reason } as PromiseRejection<typeof reason>));
  });
  return Promise.all(arr);
}

// Types are taken from
// https://github.com/DefinitelyTyped/DefinitelyTyped/blob/1d3c224/types/promise.allsettled/types.d.ts

export interface PromiseResolution<T> {
  status: 'fulfilled';
  value: T;
}

export interface PromiseRejection<E> {
  status: 'rejected';
  reason: E;
}

export type PromiseResult<T, E = unknown> = PromiseResolution<T> | PromiseRejection<E>;

export type PromiseTuple<T extends [unknown, ...unknown[]]> = { [P in keyof T]: Promise<T[P]> };
export type PromiseResultTuple<T extends [unknown, ...unknown[]]> = { [P in keyof T]: PromiseResult<T[P]> };
