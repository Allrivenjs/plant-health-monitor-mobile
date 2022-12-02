import { createContext } from 'react';

import { Theme } from '../interfaces';

interface ThemeContextProps extends Theme {
  changeTheme: (theme: Theme) => void;
};

export const ThemeContext = createContext({} as ThemeContextProps);
