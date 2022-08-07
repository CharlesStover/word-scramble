import type { Context } from 'react';
import { createContext } from 'react';

const Dictionary: Context<readonly string[]> = createContext<readonly string[]>(
  [],
);

export default Dictionary;
