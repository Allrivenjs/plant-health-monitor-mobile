import {FC, ReactNode} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {useTheme} from '../hooks';

interface ButtonProps {
  children: ReactNode;
  size: 'large' | 'medium' | 'small';
  buttonStyles?: ViewStyle;
  onPress?: () => void;
  loading?: boolean;
  colorScheme?: 'primary' | 'warning' | 'secondary';
  icon?: string;
}

export const Button: FC<ButtonProps> = ({
  children,
  size,
  buttonStyles,
  onPress,
  loading,
  colorScheme = 'primary',
  icon,
}) => {
  const {colors} = useTheme();

  const sizeValue =
    size === 'small' ? 1 : size === 'medium' ? 1.3 : size === 'large' ? 1.7 : 1;

  const buttonColor = 
        colorScheme === 'primary'
          ? colors.primary
          : colorScheme === 'warning'
          ? colors.red
          : colorScheme === 'secondary'
          ? colors.blue
          : colors.white;

  const textColor = loading ? colors.primary : colors.white;

  const styles = StyleSheet.create({
    button: {
      backgroundColor: buttonColor,
      paddingVertical: 8 * sizeValue,
      paddingHorizontal: 22 * sizeValue,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      ...buttonStyles,
    },
    buttonText: {
      fontFamily: 'Lato-Bold',
      fontSize: 12 * sizeValue,
      color: textColor,
    },
  });

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      disabled={loading}>
      {loading && (
        <ActivityIndicator
          style={{
            position: 'absolute',
            zIndex: 9999,
          }}
          size='large'
          color='white'
        />
      )}
      {icon && <Icon name={icon} style={{marginRight: 8,}} size={14 * sizeValue} color={textColor} />}
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
};
