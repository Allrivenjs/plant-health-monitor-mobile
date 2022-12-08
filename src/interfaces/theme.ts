import { TextStyle, ViewStyle } from 'react-native';

export interface Theme {
  currentTheme: 'default',
  dark: false,
  colors: Colors;
  textStyles: TextStyles;
  shadow: ViewStyle;
};

export interface TextStyles {
  body: TextStyle;
  heading1: TextStyle;
  heading2: TextStyle;
  heading3: TextStyle;
};

export interface Colors {
  background: string;
  primary: string;
  text: string;
  black: string;
  gray: string;
  lightGray: string;
  lightGreen: string;
  lightBlue: string;
  lightRed: string;
  lightYellow: string;
  blue: string;
  red: string;
  yellow: string;
  white: string;
};
