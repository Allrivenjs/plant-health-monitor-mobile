import { useContext } from 'react';
import { ThemeContext } from '../context';

export const useTheme = () => {
  const { colors } = useContext(ThemeContext);
  return {
    colors,
  };
};
