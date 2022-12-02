import {FC, ReactElement} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { useTheme } from '../hooks';

interface InputProps {
  placeholder?: string;
  defaultValue?: string;
  leftIcon?: string;
}

export const Input: FC<InputProps> = ({
  placeholder = '',
  defaultValue = '',
  leftIcon
}) => {
  const { colors, textStyles, shadow } = useTheme();

  const styles = StyleSheet.create({
    input: {
      fontSize: textStyles.body.fontSize,
      color: colors.black,
      backgroundColor: 'white',
      height: '100%',
      borderRadius: 10,
      flex: 1,
      marginHorizontal: 20,
      paddingHorizontal: 20,
      paddingLeft: leftIcon ? 52 : 20,
      ...shadow,
    }
  });

  return (
    <View
      style={{ flex: 1, height: 52, justifyContent: 'center' }}
    >
      <TextInput
        style={ styles.input }
        placeholderTextColor={colors.lightGray}
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
      {
        leftIcon && (
          <View style={{ position:'absolute', left: 38, }}>
            <Icon name={leftIcon} size={24} color={colors.black} />
          </View>
        )
      }
    </View>
  );
};
