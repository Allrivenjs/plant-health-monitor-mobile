export interface Theme {
  currentTheme: 'default',
  dark: false,
  colors: Colors;
};

export interface Colors {
  background: string;
  primary: string;
  text: string;
  black: string;
  gray: string;
};
