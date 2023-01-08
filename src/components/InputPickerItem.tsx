import { FC } from 'react';

import { TouchableOpacity, Text } from 'react-native';
import { useTheme } from '../hooks';

import { IInputPickerItem } from './';

interface InputPickerItemProps {
  item: IInputPickerItem;
  active: boolean;
  onPress: (item: IInputPickerItem) => void;
};

export const InputPickerItem: FC<InputPickerItemProps> = ({item, onPress, active}) => {
  const {colors, textStyles} = useTheme();

  return (
    <TouchableOpacity
      style={{
        paddingVertical: 8,
        paddingHorizontal: 10,
        backgroundColor: active ? colors.lightGray : colors.white,
        borderRadius: 10,
      }}
      onPress={() => onPress(item)}
    >
      <Text 
        style={{
          ...textStyles.body,
          color: active ? colors.white : colors.lightGray,
          fontFamily: 'Lato-Medium',
        }}
      >
        {item.label}
      </Text>
    </TouchableOpacity>
  );
};
