import {FC, ReactElement} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {useTheme} from '../hooks';

interface InputProps {
  placeholder?: string;
  defaultValue?: string;
  name?: string;
  leftIcon?: string;
  iconColor?: string;
  nameOnTop?: boolean;
}

export const Input: FC<InputProps> = ({
  placeholder = '',
  defaultValue = '',
  name = '',
  leftIcon,
  iconColor,
  nameOnTop,
}) => {
  const {colors, textStyles, shadow} = useTheme();

  iconColor = iconColor ? iconColor : colors.black;

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      width: '100%',
      flex: 1,
      // height: 52,
      backgroundColor: 'white',
      borderRadius: 10,
      marginHorizontal: 20,
      paddingHorizontal: 20,
      paddingVertical: 10,
    },
    icon: {

    },
    inputContainer: {
      flex: 1,
      marginLeft: leftIcon ? 20 : 0, 
      width: '100%',
    },
    name: {
      ...textStyles.body,
      color: colors.lightGray
      
    },
    input: {
      fontSize: textStyles.body.fontSize,
      color: colors.black,
      padding: 0,
    },
  });

  return (
    <View style={styles.container}>
      <View style={{ justifyContent: 'center', }}>
        {leftIcon && (
          <View >
            <Icon name={leftIcon} size={24} color={iconColor} />
          </View>
        )}
      </View>

      <View style={ styles.inputContainer }>
        {nameOnTop && <Text style={ styles.name }>{name}</Text>}
        <TextInput
          style={styles.input}
          placeholderTextColor={colors.lightGray}
          placeholder={placeholder}
          defaultValue={defaultValue}
        />
      </View>
    </View>
  );
};
