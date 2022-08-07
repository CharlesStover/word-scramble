import type { ReactElement } from 'react';

interface Props {
  readonly children: Readonly<Error>;
}

// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
export default function DictionaryErrorFallback({
  children,
}: Readonly<Props>): ReactElement {
  return <>{children.message}</>;
}
