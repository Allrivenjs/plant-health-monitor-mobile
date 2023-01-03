import {FC} from 'react';

import {StyleSheet, View} from 'react-native';

import { weekdays } from '../../constants';

import {useTheme} from '../../hooks';

import { EditScheduleForm } from '../hooks/useEditSchedule';

import { Day } from './Day';

interface WeekScheduleProps {
  weekSchedule: EditScheduleForm;
  toggleScheduleDay: (day: keyof EditScheduleForm) => void;
};

export const WeekSchedule: FC<WeekScheduleProps> = ({weekSchedule, toggleScheduleDay}) => {
  const {colors} = useTheme();

  const onPressDay = (day: keyof EditScheduleForm) => {
    toggleScheduleDay(day);
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

      {weekdays.map(({dayNumber, keyName, name, abbreviation}) => (
        <Day
          key={dayNumber}
          id={dayNumber}
          name={name}
          abbreviation={abbreviation}
          active={weekSchedule[keyName ].active}
          keyName={keyName}
          notActiveColor={colors.gray}
          activeColor={colors.lightBlue}
          onPress={onPressDay}
        />
      ))}
    </View>
  );
};

