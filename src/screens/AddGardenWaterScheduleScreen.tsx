import {useEffect, useMemo, useState} from 'react';
import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';

import {Button, Input, Typography} from '../components';

import {WeekSchedule} from '../home/components/WeekSchedule';

import {useTheme} from '../hooks';
import {IDayOfWeek} from '../interfaces/schedule';

const defaultWeekScheduleValue: IDayOfWeek[] = [
  {
    id: 1,
    name: 'LU',
    day: 'Lunes',
    active: false,
  },
  {
    id: 2,
    name: 'MA',
    day: 'Martes',
    active: true,
  },
  {
    id: 3,
    name: 'MI',
    day: 'Miercoles',
    active: false,
  },
  {
    id: 4,
    name: 'JU',
    day: 'Jueves',
    active: false,
  },
  {
    id: 5,
    name: 'VI',
    day: 'Viernes',
    active: false,
  },
  {
    id: 6,
    name: 'SA',
    day: 'Sabado',
    active: false,
  },
  {
    id: 7,
    name: 'DO',
    day: 'Domingo',
    active: false,
  },
];

export const AddGardenWaterScheduleScreen = () => {
  const {colors} = useTheme();

  const [weekSchedule, setWeekSchedule] = useState<IDayOfWeek[]>(
    defaultWeekScheduleValue,
  );

  const style = StyleSheet.create({
    screenContainer: {
      flex: 1,
      backgroundColor: 'white',
    },
    plantContainer: {
      height: 260,
      backgroundColor: colors.white,
      justifyContent: 'center',
      alignItems: 'center',
    },
    formContainer: {
      alignItems: 'center',
      backgroundColor: colors.background,
      borderTopRightRadius: 32,
      borderTopLeftRadius: 32,
      paddingHorizontal: 20,
    },
  });

  return (
    <ScrollView style={{flex: 1}}>
      <StatusBar backgroundColor={colors.white} barStyle='dark-content' />
      <View style={style.screenContainer}>
        <View style={style.plantContainer}>
          <WeekSchedule
            weekSchedule={weekSchedule}
            setWeekSchedule={setWeekSchedule}
          />
        </View>

        <View style={style.formContainer}>
          <Input
            defaultValue={1}
            placeholder='Regados por semana'
            leftIcon='opacity'
            iconColor={colors.lightBlue}
            nameOnTop
            containerStyles={{marginVertical: 16}}
          />

          <Typography
            style={{alignSelf: 'flex-start', marginBottom: 18, marginTop: 8}}
            size='heading2'>
            Días de regado
          </Typography>

          {weekSchedule.map(
            ({id, day, active}) =>
              active && (
                <Input
                  key={id}
                  defaultValue={day}
                  placeholder='Día de regado'
                  nameOnTop
                  containerStyles={{marginBottom: 16}}
                />
              ),
          )}

          <Button size='large' buttonStyles={{marginBottom: 20, marginTop: 4}}>
            Hecho
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};
