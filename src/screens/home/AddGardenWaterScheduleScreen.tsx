import {FC, useState} from 'react';

import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {Button, SliderInput, Typography} from '../../components';
import {maxSecondsCuantity, minSecondsCuantity, weekdays} from '../../constants';

import {WeekSchedule} from '../../home/components/WeekSchedule';
import {
  EditScheduleForm,
  useEditSchedule,
} from '../../home/hooks/useEditSchedule';

import {useTheme} from '../../hooks';
import {HomeStackParams} from '../../navigator';

import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import moment from 'moment';

interface Props
  extends NativeStackScreenProps<
    HomeStackParams,
    'AddGardenWaterScheduleScreen'
  > {}

export const AddGardenWaterScheduleScreen: FC<Props> = ({route}) => {
  const {colors, textStyles} = useTheme();

  const [show, setShow] = useState(false);
  const [selectedDay, setSelectedDay] =
    useState<keyof EditScheduleForm>('monday');

  const {
    loading,
    editScheduleFormState,
    toggleADay,
    changeDayCuantity,
    changeHourAndMinutes,
    onSubmit,
  } = useEditSchedule(route.params.scheduleId, route.params.isEditing);

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

    waterScheduleContainer: {
      width: '100%',
      justifyContent: 'center',
      marginBottom: 20,
      flex: 1,
      backgroundColor: 'white',
      borderRadius: 10,
      marginHorizontal: 20,
      paddingHorizontal: 20,
      paddingVertical: 10,
    },
    text: {
      ...textStyles.body,
      color: colors.lightGray,
    },
  });

  const onPressChangeHour = (keyName: keyof EditScheduleForm) => {
    setSelectedDay(keyName);
    setShow(true);
  };

  const onChangeDatePicker = (e: DateTimePickerEvent) => {
    const date = new Date(e.nativeEvent.timestamp!);

    changeHourAndMinutes(selectedDay, date.getHours(), date.getMinutes());

    setShow(false);
  };

  const onPressSubmit = () => {
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
                <View
                  style={style.waterScheduleContainer}
                  key={weekdays[index].dayNumber}>
                  <SliderInput
                    primaryColor={colors.lightBlue}
                    value={editScheduleFormState[keyName].cuantity}
                    label={`${name} cantidad`}
                    maximumValue={maxSecondsCuantity}
                    minimunValue={minSecondsCuantity}
                    onChange={e => changeDayCuantity(keyName, Number(e))}
                    unit='segundos'
                  />
                  <View
                    style={{
                      marginTop: 16,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <Text style={style.text}>
                      Hora de regado:{' '}
                      {moment({
                        hour: editScheduleFormState[keyName].hour,
                        minutes: editScheduleFormState[keyName].minutes,
                      }).format('H:mm A')}
                    </Text>
                    <Button
                      onPress={() => onPressChangeHour(keyName)}
                      size='small'
                      loading={loading}>
                      Cambiar hora
                    </Button>
                  </View>
                </View>
              ),
          )}

          <Button
            onPress={onPressSubmit}
            size='large'
            buttonStyles={{marginBottom: 20, marginTop: 4}}
            loading={loading}>
            Hecho
          </Button>
        </View>
      </View>

      {show && (
        <DateTimePicker
          testID='dateTimePicker'
          value={new Date()}
          mode={'time'}
          is24Hour={true}
          onChange={e => onChangeDatePicker(e)}
        />
      )}
    </ScrollView>
  );
};
