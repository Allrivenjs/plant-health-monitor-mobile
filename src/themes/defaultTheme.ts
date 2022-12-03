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
    green: '#D8E7B4',
    blue: '#B4CFE7',
    red: '#E7B7B4',
    yellow: '#E6E7B4'
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
    heading3: {
      fontSize: 23,
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
    shadowRadius: 0.5,
    elevation: 1,
  },
};
