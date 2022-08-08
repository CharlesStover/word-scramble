import type { ReactElement } from 'react';
import validateString from '../../utils/validate-string';
import styles from './dictionary-loading-fallback.module.scss';

const ANIMATION_DELAY_MS = 10;
const letterClassName: string = validateString(styles.letter);
const phraseClassName: string = validateString(styles.phrase);
const rootClassName: string = validateString(styles.root);
const TEXT = 'Loading the dictionary...';

const TEXT_LETTERS: string[] = TEXT.split('');

const mapToAnimationDelay = (letter: string, index: number): ReactElement => {
  if (letter === ' ') {
    return <>&nbsp;</>;
  }

  const animationDelayMs: number = index * ANIMATION_DELAY_MS;
  const animationDelay = `${animationDelayMs}ms`;
  return (
    <span className={letterClassName} style={{ animationDelay }}>
      {letter}
    </span>
  );
};

// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
export default function DictionaryLoadingFallback(): ReactElement {
  return (
    <div className={rootClassName}>
      <div className={phraseClassName}>
        {TEXT_LETTERS.map(mapToAnimationDelay)}
      </div>
    </div>
  );
}
