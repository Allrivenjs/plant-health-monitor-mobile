import {FC, ReactNode} from 'react';
import {ActivityIndicator, StyleSheet, Text, TouchableOpacity, View, ViewStyle} from 'react-native';
import {useTheme} from '../hooks';
import { Spinner } from './Spinner';

interface ButtonProps {
  children: ReactNode;
  size: 'large' | 'medium' | 'small';
  buttonStyles?: ViewStyle;
  onPress?: () => void;
  loading?: boolean;
}

export const Button: FC<ButtonProps> = ({children, size, buttonStyles, onPress, loading}) => {
  const {colors} = useTheme();

  const sizeValue =
    size === 'small' ? 1 : size === 'medium' ? 1.3 : size === 'large' ? 1.7 : 1;

  const styles = StyleSheet.create({
    button: {
      backgroundColor: colors.primary,
      paddingVertical: 8 * sizeValue,
      paddingHorizontal: 22 * sizeValue,
      borderRadius: 10,
      justifyContent: 'center', 
      alignItems: 'center',
      ...buttonStyles,
    },
    buttonText: {
      fontFamily: 'Lato-Bold',
      fontSize: 12 * sizeValue,
      color: loading ? colors.primary : colors.white,
    },
  });

  return (
    <TouchableOpacity style={styles.button} onPress={onPress} disabled={loading}>
      {
        loading && (
          <ActivityIndicator
            style={{
              position:'absolute',
              zIndex: 9999,
            }} 
            size='large' 
            color='white' 
          />
        )
      }
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
};
