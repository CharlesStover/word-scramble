import type { ComponentType, PropsWithChildren, ReactElement } from 'react';
import { useEffect, useState } from 'react';
import ASYNC_STATE_INIT from '../../constants/async-state-init';
import DICTIONARY_TYPE_ERROR from '../../constants/dictionary-type-error';
import Dictionary from '../../contexts/dictionary';
import type AsyncState from '../../types/async-state';
import type Json from '../../types/json';
import filterByString from '../../utils/filter-by-string';
import mapUnknownToError from '../../utils/map-unknown-to-error';

interface ErrorFallbackProps {
  readonly children: Error;
}

interface Props {
  readonly ErrorFallback: ComponentType<ErrorFallbackProps>;
  readonly LoadingFallback: ComponentType<unknown>;
}

// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
export default function DictionaryProvider({
  ErrorFallback,
  LoadingFallback,
  children,
}: Readonly<PropsWithChildren<Props>>): ReactElement {
  const [dictionary, setDictionary] =
    useState<AsyncState<readonly string[]>>(ASYNC_STATE_INIT);

  useEffect((): void => {
    import('../../constants/dictionary.json')
      .then(({ default: response }: Json): void => {
        if (!Array.isArray(response)) {
          throw new Error(
            `Expected the dictionary to be an array, but received: ${typeof response}`,
          );
        }

        if (!response.every(filterByString)) {
          throw DICTIONARY_TYPE_ERROR;
        }

        setDictionary({
          response,
          type: 'success',
        });
      })
      .catch((err: unknown): void => {
        setDictionary({
          response: mapUnknownToError(err),
          type: 'error',
        });
      });
  }, []);

  if (dictionary.type === 'init' || dictionary.type === 'loading') {
    return <LoadingFallback />;
  }

  if (dictionary.type === 'error') {
    return <ErrorFallback>{dictionary.response}</ErrorFallback>;
  }

  return (
    <Dictionary.Provider value={dictionary.response}>
      {children}
    </Dictionary.Provider>
  );
}
