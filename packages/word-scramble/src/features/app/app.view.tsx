import type { ReactElement } from 'react';
import DictionaryErrorFallback from '../../components/dictionary-error-fallback';
import DictionaryLoadingFallback from '../../components/dictionary-loading-fallback';
import DictionaryProvider from '../../components/dictionary-provider';
import Home from '../home';

export default function App(): ReactElement {
  return (
    <DictionaryProvider
      ErrorFallback={DictionaryErrorFallback}
      LoadingFallback={DictionaryLoadingFallback}
    >
      <Home />
    </DictionaryProvider>
  );
}
