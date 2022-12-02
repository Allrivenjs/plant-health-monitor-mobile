import { useContext } from 'react';
import { ThemeContext } from '../context';

export const useTheme = () => {
  const { colors, textStyles, shadow } = useContext(ThemeContext);
  return {
    colors,
    textStyles,
    shadow,
  };
};
