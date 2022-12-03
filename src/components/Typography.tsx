import { FC, ReactNode } from 'react';

import { StyleProp, Text, TextStyle } from 'react-native';

import { useTheme } from '../hooks';

interface Props {
  size?: 'body' | 'heading1' | 'heading3',
  children: ReactNode;
  style?: TextStyle;
};

export const Typography:FC<Props> = ({ children, size = 'body', style }) => {
  const { textStyles, colors } = useTheme();

  return (
    <Text
      style={{ color: colors.text, ...textStyles[size], ...style }}
    >
      { children }
    </Text>
  )
};
