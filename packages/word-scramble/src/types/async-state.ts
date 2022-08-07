import type AsyncStateInit from './async-state-init';

/* eslint-disable @typescript-eslint/no-type-alias */
interface AsyncStateError {
  readonly response: Error;
  readonly type: 'error';
}

interface AsyncStateLoading {
  readonly response: null;
  readonly type: 'loading';
}

interface AsyncStateSuccess<T> {
  readonly response: T;
  readonly type: 'success';
}

type AsyncState<T> =
  | AsyncStateError
  | AsyncStateInit
  | AsyncStateLoading
  | AsyncStateSuccess<T>;

export default AsyncState;
