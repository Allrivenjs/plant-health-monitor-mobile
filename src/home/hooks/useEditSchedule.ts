import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';

import {Alert} from 'react-native';
import { Garden } from '../../interfaces/garden';

import {axiosClient} from '../../lib/axiosClient';
import {HomeScreenNavigationType} from '../../screens/home';
import { useGardensStore } from '../../store';

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

  const [garden, setGarden] = useState<Garden | undefined>();

  const getGardenById = useGardensStore(gardenStore => gardenStore.getGardenById);

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

    try {
      const res = await axiosClient.put<EditScheduleForm>(
        `schedule/${gardenId}`,
        {
          ...editScheduleFormState,
        },
      );

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


  useEffect(() => {
    setGarden(getGardenById(gardenId));
    // TODO
    // setEditScheduleFormState({
    //   monday: {
    //     ...garden?.schedule.daysOfSchedule
    //   }
    // });
  }, []);

  return {
    loading,
    editScheduleFormState,
    garden,

    onSubmit,
    toggleADay,
    changeDayCuantity,
  };
};
