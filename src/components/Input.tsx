import {FC, useState} from 'react';
import {
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TextInput,
  TextInputChangeEventData,
  View,
  ViewStyle,
  TextInputProps,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {useTheme} from '../hooks';

interface InputProps {
  defaultValue?: string;
  name?: string;
  placeholder?: string;
  leftIcon?: string;
  iconColor?: string;
  nameOnTop?: boolean;
  containerStyles?: ViewStyle;
  props?: TextInputProps;
}

export const Input: FC<InputProps> = ({
  defaultValue = '',
  name = '',
  placeholder = '',
  leftIcon,
  iconColor,
  nameOnTop,
  containerStyles,
  props,
}) => {
  const {colors, textStyles} = useTheme();

  const [value, setValue] = useState(defaultValue);

  const [isFocus, setIsFocus] = useState(false);

  iconColor = iconColor ? iconColor : colors.black;

  const onFocus = () => setIsFocus(true);
  const onBlur = () => setIsFocus(false);

  const isActive = value.length > 0 || isFocus;

  const onChangeValue = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setValue(e.nativeEvent.text);
  };

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      width: '100%',
      flex: 1,
      backgroundColor: 'white',
      borderRadius: 10,
      marginHorizontal: 20,
      paddingHorizontal: 20,
      paddingVertical: 10,
      ...containerStyles,
    },
    icon: {},
    inputContainer: {
      flex: 1,
      marginLeft: leftIcon ? 20 : 0,
      width: '100%',
    },
    name: {
      ...textStyles.body,
      color: colors.lightGray,
      transform: [
        {translateY: isActive ? 0 : 14},
        {scale: isActive ? 1 : 1.05},
      ],
    },
    input: {
      fontSize: textStyles.body.fontSize,
      color: colors.black,
      fontFamily: 'Lato-Regular',
      padding: 0,
    },
  });

  return (
    <View style={styles.container}>
      <View style={{justifyContent: 'center'}}>
        {leftIcon && (
          <View>
            <Icon name={leftIcon} size={24} color={iconColor} />
          </View>
        )}
      </View>

      <View style={styles.inputContainer}>
        {nameOnTop && <Text style={styles.name}>{placeholder}</Text>}
        <TextInput
          nativeID={name}
          style={styles.input}
          placeholderTextColor={colors.lightGray}
          placeholder={nameOnTop ? isFocus ? placeholder : '' : placeholder}
          defaultValue={defaultValue}
          onFocus={onFocus}
          onBlur={onBlur}
          value={value}
          onChange={onChangeValue}
          {...props}
        />
      </View>
    </View>
  );
};
