import {FC, useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  View,
  ViewStyle,
  TextInputProps,
  TouchableWithoutFeedback,
  Text,
  Animated,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {useTheme} from '../hooks';

import { InputPickerItem } from './';


export interface IInputPickerItem {
  label: string;
  value: string;
  active: boolean;
}; 

interface InputPickerProps {
  name?: string;
  value: number;
  onChange?: (value: string) => void;
  placeholder?: string;
  leftIcon?: string;
  iconColor?: string;
  nameOnTop?: boolean;
  containerStyles?: ViewStyle;
  props?: TextInputProps;
  items: IInputPickerItem[],
}

export const InputPicker: FC<InputPickerProps> = ({
  placeholder = '',
  name = placeholder,
  onChange = () => {},
  leftIcon,
  iconColor,
  nameOnTop,
  containerStyles,
  items,
  value,
}) => {
  const {colors, textStyles} = useTheme();
  const [open, setOpen] = useState(false);

  const [inputValue, setInputValue] = useState<IInputPickerItem>(items[value]);

  iconColor = iconColor ? iconColor : colors.black;

  const dropdownScaleValue = useRef(new Animated.Value(0)).current;

  const onPressInputPickerItem = (item: IInputPickerItem) => {
    setInputValue(item);
    onChange(item.value);
    togglePickerOpen();
  };

  const togglePickerOpen = async () => {
    Animated.timing(dropdownScaleValue, {
      toValue: open ? 0 : 100,
      duration: 100,
      useNativeDriver: true,
    }).start();
    
    if(open) {
      setTimeout(() => {
        setOpen(prevState => !prevState);
      }, 100);
      return;
    };
    setOpen(prevState => !prevState);
  };

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'center', 
      flex: 1,
      backgroundColor: 'white',
      borderRadius: 10,
      borderBottomLeftRadius: open ? 0 : 10,
      borderBottomRightRadius: open ? 0 : 10,
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
      paddingLeft: 10,
    },
    input: {
      fontSize: textStyles.body.fontSize,
      color: colors.black,
      fontFamily: 'Lato-Regular',
      padding: 0,
      paddingLeft: 10,
      paddingVertical: 4,
    },
  });

  useEffect(() => {
    setInputValue(items[value]);
  }, [value]);

  return (
    <>
      <TouchableWithoutFeedback 
        onPress={togglePickerOpen}
      >
        <View
          style={styles.container}
        >
          <View style={{justifyContent: 'center'}}>
            {leftIcon && (
              <View>
                <Icon name={leftIcon} size={24} color={iconColor} />
              </View>
            )}
          </View>

          <View style={styles.inputContainer}>
            {nameOnTop && (
              <Text
                style={{
                  ...styles.name,
                }}>
                {name}
              </Text>
            )}

            <Text
              style={styles.input}
            >
              {inputValue.label}
            </Text>

          </View>

          <View style={{justifyContent: 'center'}}>
            {leftIcon && (
              <View>
                {
                  open ? (
                    <Icon name='keyboard-arrow-up' size={24} color={colors.lightGray} />
                  ) : (
                    <Icon name='keyboard-arrow-down' size={24} color={colors.lightGray} />
                  )
                }
              </View>
            )}
          </View>


        </View>

      </TouchableWithoutFeedback>

      {
        open && (
          <Animated.View
            style={{
              backgroundColor: 'white', 
              width: '100%',
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              padding: 10,
              transform: [
                {
                  scaleY: dropdownScaleValue.interpolate({
                    inputRange: [0, 25, 50, 75, 100],
                    outputRange: [0, .5, 0.75, 0.9, 1]
                  })
                },
              ]
            }}
          >
            {
              items.map((item) => (
                <InputPickerItem
                  active={item.value === inputValue.value}
                  key={item.value}
                  item={item}
                  onPress={onPressInputPickerItem}
                />
              ))
            }
          </Animated.View>
        )
      }
    </>
  );
};

