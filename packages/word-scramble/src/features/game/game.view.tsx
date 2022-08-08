import type { ReactElement } from 'react';
import useGame from './game.hook';

export default function Game(): ReactElement {
  const { words } = useGame();

  return (
    <>
      <p>Hello world</p>
      <ul>
        {words.map(
          (word: string): ReactElement => (
            <li key={word}>{word}</li>
          ),
        )}
      </ul>
    </>
  );
}
