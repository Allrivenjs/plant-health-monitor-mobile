import { Theme } from '../interfaces';

export const defaultTheme: Theme = {
  currentTheme: 'default',
  dark: false,
  colors: {
    background: '#F5F8FE',
    primary: '#66B992',
    text: '#1A1D1C',
    black: '#1A1D1C',
    gray: '#898989',
    lightGray: 'rgba(26, 29, 28, 0.36)',
  },
  textStyles: {
    body: {
      fontSize: 16,
      fontFamily: 'Lato-Regular',
    },
    heading1: {
      fontSize: 30,
      fontFamily: 'Lato-Bold',
    },
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.04,
    shadowRadius: 1.41,
    elevation: 1,
  },
};
