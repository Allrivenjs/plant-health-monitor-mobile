import {Theme} from '../interfaces';

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
    lightGreen: '#D8E7B4',
    lightBlue: '#B4CFE7',
    lightRed: '#E7B7B4',
    lightYellow: '#E6E7B4',
    blue: '#6691B9',
    red: '#B9667A',
    yellow: '#B99366',
    white: '#ffffff',
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
    heading2: {
      fontSize: 26,
      fontFamily: 'Lato-Bold',
    },
    heading3: {
      fontSize: 23,
      fontFamily: 'Lato-Bold',
    },
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.04,
    shadowRadius: 0.5,
    elevation: 1,
  },
};
