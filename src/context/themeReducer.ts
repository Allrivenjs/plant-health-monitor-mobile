import { Theme } from '../interfaces';

import { ThemeState } from './ThemeProvider';

type EntriesActionType = 
  | { type: 'Theme/ChangeTheme'; payload: Theme };

export const themeReducer = ( state: ThemeState, action: EntriesActionType ): ThemeState => {

  switch (action.type) {
    case 'Theme/ChangeTheme':
      return {
       ...state,
      };
    default:
      return state;
  };
};
