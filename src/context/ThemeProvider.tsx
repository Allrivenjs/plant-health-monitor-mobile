import {FC, ReactNode, useReducer} from 'react';

import {Theme} from '../interfaces';
import {defaultTheme} from '../themes/defaultTheme';

import {ThemeContext} from './';
import {themeReducer} from './themeReducer';

export interface ThemeState extends Theme {}

const THEME_INITIAL_STATE: ThemeState = defaultTheme;

interface EntriesProviderProps {
  children: ReactNode;
  theme?: Theme;
}

export const ThemeProvider: FC<EntriesProviderProps> = ({
  children,
  theme = THEME_INITIAL_STATE,
}) => {
  const [state, dispatch] = useReducer(themeReducer, theme);

  const changeTheme = (theme: Theme) => {
    dispatch({type: 'Theme/ChangeTheme', payload: theme});
  };

  return (
    <ThemeContext.Provider
      value={{
        ...state,
        changeTheme,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};
