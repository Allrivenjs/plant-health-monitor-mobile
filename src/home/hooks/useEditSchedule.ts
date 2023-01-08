import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';

import {Alert} from 'react-native';

import {axiosClient} from '../../lib/axiosClient';
import {HomeScreenNavigationType} from '../../screens/home';

export interface DayOfWeek {
  dayNumber: number;
  active: boolean;
  cuantity: number;
}

export interface EditScheduleForm {
  monday: DayOfWeek;
  tuesday: DayOfWeek;
  wednesday: DayOfWeek;
  thursday: DayOfWeek;
  friday: DayOfWeek;
  saturday: DayOfWeek;
  sunday: DayOfWeek;
}

const defaultDayOfWeek = {
  dayNumber: 1,
  active: false,
  cuantity: 0,
};

export const useEditSchedule = (gardenId: number) => {
  const [editScheduleFormState, setEditScheduleFormState] =
    useState<EditScheduleForm>({
      monday: {
        ...defaultDayOfWeek,
      },
      tuesday: {
        ...defaultDayOfWeek,
      },
      wednesday: {
        ...defaultDayOfWeek,
      },
      thursday: {
        ...defaultDayOfWeek,
      },
      friday: {
        ...defaultDayOfWeek,
      },
      saturday: {
        ...defaultDayOfWeek,
      },
      sunday: {
        ...defaultDayOfWeek,
      },
    });

  const [loading, setLoading] = useState(false);

  const {navigate} = useNavigation<HomeScreenNavigationType>();

  const [test, setTest] = useState<any>();

  const toggleADay = (day: keyof EditScheduleForm) => {
    setEditScheduleFormState(prevState => ({
      ...prevState,
      [day]: {
        ...prevState[day],
        active: !prevState[day].active,
      },
    }));
  };

  const changeDayCuantity = (day: keyof EditScheduleForm, cuantity: number) => {
    setEditScheduleFormState(prevState => ({
      ...prevState,
      [day]: {
        ...prevState[day],
        cuantity,
      },
    }));
  };

  const onSubmit = async () => {
    setLoading(true);

    console.log(gardenId);
    console.log({...editScheduleFormState});

    try {
      const res = await axiosClient.put<EditScheduleForm>(
        `schedule/${gardenId}`,
        {
          ...editScheduleFormState,
        },
      );

      console.log('res: ', res);

      Alert.alert(
        'Horario actualizado',
        'Horario de regado del jardín actualizado correctamente.',
      );

      navigate('HomeScreen');
    } catch (e) {
      console.log('Error trying to edit garden schedule: ', e);
      Alert.alert(
        'Ha ocurrido un error con los datos',
        'Por favor, revisa los datos ingresados e intente nuevamente.',
      );
    }
    setLoading(false);
  };

  return {
    loading,
    editScheduleFormState,

    onSubmit,
    toggleADay,
    changeDayCuantity,
  };
};
