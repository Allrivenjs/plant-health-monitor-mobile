import {ScrollView, StatusBar, StyleSheet, View} from 'react-native';

import {Button, Input, Typography} from '../../components';
import {weekdays} from '../../constants';

import {WeekSchedule} from '../../home/components/WeekSchedule';
import {useEditSchedule} from '../../home/hooks/useEditSchedule';

import {useTheme} from '../../hooks';

export const AddGardenWaterScheduleScreen = () => {
  const {colors} = useTheme();

  const {
    loading,
    editScheduleFormState,
    toggleADay,
    changeDayCuantity,
    onSubmit,
  } = useEditSchedule(1);

  const style = StyleSheet.create({
    screenContainer: {
      flex: 1,
      paddingBottom: 56,
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
            weekSchedule={editScheduleFormState}
            toggleScheduleDay={toggleADay}
          />
        </View>

        <View style={style.formContainer}>
          <Typography
            style={{alignSelf: 'flex-start', marginBottom: 32, marginTop: 18}}
            size='heading2'>
            Días de regado
          </Typography>

          {weekdays.map(
            ({keyName, name}) =>
              editScheduleFormState[keyName].active && (
                <Input
                  name={`${name} cantidad`}
                  value={String(editScheduleFormState[keyName].cuantity)}
                  onChange={e => changeDayCuantity(keyName, Number(e))}
                  nameOnTop
                  leftIcon='opacity'
                  iconColor={colors.lightBlue}
                  placeholder='2'
                  containerStyles={{marginBottom: 20}}
                  props={{
                    keyboardType: 'numeric',
                  }}
                />
              ),
          )}

          {/*
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
          */}

          <Button size='large' buttonStyles={{marginBottom: 20, marginTop: 4}}>
            Hecho
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};
