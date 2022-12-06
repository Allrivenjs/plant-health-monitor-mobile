import {Dispatch, FC, SetStateAction, startTransition, useState} from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {useTheme} from '../../hooks';
import {IDayOfWeek} from '../../interfaces/schedule';
import { Day } from './Day';


interface WeekScheduleProps {
  weekSchedule: IDayOfWeek[];
  setWeekSchedule: Dispatch<SetStateAction<IDayOfWeek[]>>;
};

export const WeekSchedule: FC<WeekScheduleProps> = ({weekSchedule, setWeekSchedule}) => {
  const {colors} = useTheme();


  const onPressDay = (dayPressedId: number) => {
    setWeekSchedule(prevState =>
      prevState.map(day => {
        if (day.id === dayPressedId) {
          return {
            ...day,
            active: !day.active,
          };
        } else {
          return day;
        }
      }),
    );
  };

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      paddingHorizontal: 20,
    },
  });

  return (
    <View style={styles.container}>
      <View style={{ width: '100%', position: 'absolute', alignItems: 'center'}}>
        <View
          style={{
            backgroundColor: colors.lightGray,
            width: '80%',
            height: 3,
          }}
        />
      </View>
      {weekSchedule.map(({id, name, active}) => (
        <Day
          key={id}
          id={id}
          name={name}
          active={active}
          notActiveColor={colors.gray}
          activeColor={colors.blue}
          onPress={onPressDay}
        />
      ))}
    </View>
  );
};

