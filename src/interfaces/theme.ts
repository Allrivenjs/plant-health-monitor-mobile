import { TextStyle, ViewStyle } from 'react-native';

export interface Theme {
  currentTheme: 'default',
  dark: false,
  colors: Colors;
  textStyles: TextStyles;
  shadow: ViewStyle;
};

export interface TextStyles {
  body: TextStyle,
  heading1: TextStyle,
  heading3: TextStyle,
};

export interface Colors {
  background: string;
  primary: string;
  text: string;
  black: string;
  gray: string;
  lightGray: string;
  green: string;
  blue: string;
  red: string;
  yellow: string;
};
