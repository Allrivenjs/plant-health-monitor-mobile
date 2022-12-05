import {FC, ReactNode} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, ViewStyle} from 'react-native';
import {useTheme} from '../hooks';

interface ButtonProps {
  children: ReactNode;
  size: 'large' | 'medium' | 'small';
  buttonStyles?: ViewStyle;
}

export const Button: FC<ButtonProps> = ({children, size, buttonStyles}) => {
  const {colors} = useTheme();

  const sizeValue =
    size === 'small' ? 1 : size === 'medium' ? 1.3 : size === 'large' ? 1.7 : 1;

  const styles = StyleSheet.create({
    button: {
      backgroundColor: colors.primary,
      paddingVertical: 8 * sizeValue,
      paddingHorizontal: 22 * sizeValue,
      borderRadius: 10,
      ...buttonStyles,
    },
    buttonText: {
      fontFamily: 'Lato-Bold',
      fontSize: 12 * sizeValue,
      color: colors.white,
    },
  });

  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
};
