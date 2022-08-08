import { useCallback, useMemo, useState } from 'react';
import useDictionary from '../../hooks/use-dictionary';
import filterByMaxLengthLetters from '../../utils/filter-by-max-length-letters';

interface State {
  readonly reset: VoidFunction;
  readonly words: readonly string[];
}

export default function useGame(): State {
  const dictionary: readonly string[] = useDictionary();

  const maxLengthLetterWords: readonly string[] =
    useMemo((): readonly string[] => {
      return dictionary.filter(filterByMaxLengthLetters);
    }, [dictionary]);

  const maxLengthLetterWordsCount: number = maxLengthLetterWords.length;

  const getSeed = useCallback((): number => {
    return Math.floor(Math.random() * maxLengthLetterWordsCount);
  }, [maxLengthLetterWordsCount]);

  const [seed, setSeed] = useState(getSeed);

  const words: readonly string[] = useMemo((): readonly string[] => {
    const targetMaxLengthLetterWord: string = maxLengthLetterWords[seed];
    const letters: Set<string> = new Set(targetMaxLengthLetterWord.split(''));
    const targetWords: string[] = dictionary.filter((word: string): boolean => {
      // We want the target max length letter word to be at the start of the
      //   array of words, because it should never be a bonus word. To do this,
      //   we explicitly return it as the first item instead of using this
      //   filter.
      if (word === targetMaxLengthLetterWord) {
        return false;
      }
      for (const letter of word.split('')) {
        if (!letters.has(letter)) {
          return false;
        }
      }
      return true;
    });
    return [targetMaxLengthLetterWord, ...targetWords];
  }, [dictionary, maxLengthLetterWords, seed]);

  return {
    reset: useCallback((): void => {
      setSeed(getSeed());
    }, [getSeed]),

    words,
  };
}
