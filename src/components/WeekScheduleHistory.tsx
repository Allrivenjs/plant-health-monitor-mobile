import {FC} from 'react';
import {StyleSheet, View} from 'react-native';

import {Day} from '../home/components';

import {IDayOfWeekWithWateringCuantity} from '../interfaces/schedule';

import {useTheme} from '../hooks';

interface WeekScheduleProps {
  weekSchedule: IDayOfWeekWithWateringCuantity[];
}

export const WeekScheduleHistory: FC<WeekScheduleProps> = ({weekSchedule}) => {
  const {colors} = useTheme();

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
      {weekSchedule.map(({id, name, active, cuantity}) => (
        <View key={id} style={{alignItems: 'center'}}>
          <View
            style={{
              height: 100,
              width: 10,
              backgroundColor: colors.gray,
              borderRadius: 10,
              marginBottom: 10,
            }}
          />

          {active && (
            <View
              style={{
                height: cuantity,
                width: 10,
                backgroundColor: colors.lightBlue,
                borderRadius: 10,
                marginBottom: 10,
                position: 'absolute',
                bottom: 29,
              }}
            />
          )}

          <Day
            id={id}
            name={name}
            active={active}
            notActiveColor={colors.gray}
            activeColor={colors.lightBlue}
          />
        </View>
      ))}
    </View>
  );
};
