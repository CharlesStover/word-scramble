const MAX_WORD_LENGTH = 7;

/*
Find words with 7 unique letters.
*/

export default function filterByMaxLengthLetters(word: string): boolean {
  return (
    word.length === MAX_WORD_LENGTH &&
    new Set(word.split('')).size === MAX_WORD_LENGTH
  );
}
