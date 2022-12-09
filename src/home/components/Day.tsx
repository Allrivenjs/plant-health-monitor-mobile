import { FC } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

interface DayProps {
  notActiveColor: string;
  activeColor: string;
  active?: boolean;
  onPress?: (dayPressedId: number) => void;
  id: number;
  name: string;
}

export const Day: FC<DayProps> = ({
  active,
  notActiveColor,
  activeColor,
  onPress,
  id,
  name,
}) => {
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
    },
    day: {
      backgroundColor: active ? activeColor : notActiveColor,
      width: 30,
      height: 30,
      borderRadius: 100,
    },
    dayText: {
      marginTop: 4,
      color: active ? activeColor : notActiveColor,
      fontFamily: 'Lato-Regular',
      position: 'absolute',
      top: 30,
    },
  });

  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={() => onPress && onPress(id)} underlayColor='#fff'>
        <View style={styles.day} />
      </TouchableHighlight>
      <Text style={styles.dayText}>{name}</Text>
    </View>
  );
};
