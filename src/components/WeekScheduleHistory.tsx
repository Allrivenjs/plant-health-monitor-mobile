import {FC} from 'react';
import {StyleSheet, View} from 'react-native';

import {Day} from '../home/components';

import {DayOfSchedule} from '../interfaces/schedule';

import {useTheme} from '../hooks';
import {maxWaterCuantity, minWaterCuantity} from '../constants';

const minWeekScheduleBarHeight = 0;
const maxWeekScheduleBarHeight = 100;

export const mapWaterValuesToHeightValues = (value: number) => {
  return (
    ((value - minWaterCuantity) / (maxWaterCuantity - minWaterCuantity)) *
      (maxWeekScheduleBarHeight - minWeekScheduleBarHeight) +
    0
  );
};

interface WeekScheduleProps {
  weekSchedule: DayOfSchedule[];
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
      {weekSchedule.map(
        ({id, name, active, cuantity, keyName, abbreviation}) => (
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
                  height: mapWaterValuesToHeightValues(cuantity),
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
              keyName={keyName}
              abbreviation={abbreviation}
              disabled
            />
          </View>
        ),
      )}
    </View>
  );
};
