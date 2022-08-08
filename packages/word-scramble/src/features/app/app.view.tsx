import type { ReactElement } from 'react';
import DictionaryErrorFallback from '../../components/dictionary-error-fallback';
import DictionaryLoadingFallback from '../../components/dictionary-loading-fallback';
import DictionaryProvider from '../../components/dictionary-provider';
import Game from '../game';

export default function App(): ReactElement {
  return (
    <DictionaryProvider
      ErrorFallback={DictionaryErrorFallback}
      LoadingFallback={DictionaryLoadingFallback}
    >
      <Game />
    </DictionaryProvider>
  );
}
