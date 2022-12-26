import {FC, useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ViewStyle,
  TextInputProps,
  Animated,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {useTheme} from '../hooks';

interface InputProps {
  defaultValue?: string;
  name?: string;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  leftIcon?: string;
  iconColor?: string;
  nameOnTop?: boolean;
  containerStyles?: ViewStyle;
  props?: TextInputProps;
}

export const Input: FC<InputProps> = ({
  defaultValue = '',
  placeholder = '',
  name = placeholder,
  value = '',
  onChange = () => {},
  leftIcon,
  iconColor,
  nameOnTop,
  containerStyles,
  props,
}) => {
  const {colors, textStyles} = useTheme();
  const [isFocus, setIsFocus] = useState(false);

  iconColor = iconColor ? iconColor : colors.black;

  const isActive = value.length > 0 || isFocus;

  const nameYPosition = useRef(new Animated.Value(14)).current;
  const nameScale = useRef(new Animated.Value(2)).current;

  const onFocus = () => setIsFocus(true);
  const onBlur = () => setIsFocus(false);

  useEffect(() => {
    Animated.timing(nameYPosition, {
      toValue: isActive ? 0 : 14,
      duration: 100,
      useNativeDriver: true,
    }).start();

    Animated.timing(nameScale, {
      toValue: isActive ? 1.02 : 1,
      duration: 100,
      useNativeDriver: true,
    }).start();
  }, [nameYPosition, isActive]);

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'center', 
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
        // {translateY: isActive ? 0 : 14},
        // {scale: isActive ? 2 : 1},
      ],

      paddingLeft: 10,
    },
    input: {
      fontSize: textStyles.body.fontSize,
      color: colors.black,
      fontFamily: 'Lato-Regular',
      padding: 0,
      paddingLeft: 10,
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
        {nameOnTop && (
          <Animated.Text
            style={{
              ...styles.name,
              transform: [{translateY: nameYPosition}, {scale: nameScale}],
            }}>
            {name}
          </Animated.Text>
        )}
        <TextInput
          nativeID={name}
          style={styles.input}
          placeholderTextColor={colors.lightGray}
          placeholder={nameOnTop ? (isFocus ? placeholder : '') : placeholder}
          defaultValue={defaultValue}
          onFocus={onFocus}
          onBlur={onBlur}
          value={value}
          onChange={(e) => onChange(e.nativeEvent.text)}
          {...props}
        />
      </View>
    </View>
  );
};
