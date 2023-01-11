import {FC} from 'react';

import {ScrollView, StatusBar, StyleSheet, View} from 'react-native';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {Button, Input, SliderInput, Typography} from '../../components';
import {maxWaterCuantity, weekdays} from '../../constants';

import {WeekSchedule} from '../../home/components/WeekSchedule';
import {useEditSchedule} from '../../home/hooks/useEditSchedule';

import {useTheme} from '../../hooks';
import {HomeStackParams} from '../../navigator';

interface Props
  extends NativeStackScreenProps<
    HomeStackParams,
    'AddGardenWaterScheduleScreen'
  > {}

export const AddGardenWaterScheduleScreen: FC<Props> = ({route}) => {
  const {colors} = useTheme();

  const {
    loading,
    garden,
    editScheduleFormState,
    toggleADay,
    changeDayCuantity,
    onSubmit,
  } = useEditSchedule(route.params.scheduleId);

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

  const onClickSubmit = () => {
    onSubmit();
  };

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
            ({keyName, name}, index) =>
              editScheduleFormState[keyName].active && (
                <SliderInput
                  primaryColor={colors.lightBlue}
                  key={weekdays[index].dayNumber}
                  value={editScheduleFormState[keyName].cuantity}
                  label={`${name} cantidad`}
                  maximumValue={maxWaterCuantity}
                  minimunValue={0}
                  containerStyles={{marginBottom: 20}}
                  onChange={e => changeDayCuantity(keyName, Number(e))}
                  unit='ml'
                />
              ),
          )}

          <Button
            onPress={onClickSubmit}
            size='large'
            buttonStyles={{marginBottom: 20, marginTop: 4}}
            loading={loading}>
            Hecho
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};
