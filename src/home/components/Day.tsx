import { FC } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

import { EditScheduleForm } from '../hooks/useEditSchedule';

interface DayProps {
  notActiveColor: string;
  activeColor: string;
  active?: boolean;
  onPress?: (day: keyof EditScheduleForm) => void;
  id: number;
  name: string;
  keyName: keyof EditScheduleForm;
  abbreviation: string;
}

export const Day: FC<DayProps> = ({
  active,
  notActiveColor,
  activeColor,
  onPress,
  id,
  name,
  keyName,
  abbreviation,
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
      <TouchableHighlight onPress={() => onPress && onPress(keyName)} underlayColor='#fff'>
        <View style={styles.day} />
      </TouchableHighlight>
      <Text style={styles.dayText}>{abbreviation}</Text>
    </View>
  );
};
