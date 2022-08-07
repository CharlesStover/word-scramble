import { useContext } from 'react';
import Dictionary from '../contexts/dictionary';

const EMPTY = 0;

export default function useDictionary(): readonly string[] {
  const dictionary = useContext(Dictionary);

  if (dictionary.length === EMPTY) {
    throw new Error('The dictionary is empty.');
  }

  return dictionary;
}
