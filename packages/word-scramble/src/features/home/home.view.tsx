import type { ReactElement } from 'react';
import useDictionary from '../../hooks/use-dictionary';

const MAX_LENGTH = 7;

const filterByMaxLength = (word: string): boolean => word.length === MAX_LENGTH;

export default function Home(): ReactElement {
  const dictionary: readonly string[] = useDictionary();
  return (
    <>
      <p>Hello world</p>
      <ul>
        {dictionary.filter(filterByMaxLength).map(
          (word: string): ReactElement => (
            <li key={word}>{word}</li>
          ),
        )}
      </ul>
    </>
  );
}
