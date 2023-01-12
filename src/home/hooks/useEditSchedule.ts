import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';

import {Alert} from 'react-native';
import {Garden} from '../../interfaces/garden';

import {axiosClient} from '../../lib/axiosClient';
import {HomeScreenNavigationType} from '../../screens/home';
import {useGardensStore} from '../../store';

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

const defaultSchedule = {
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
};

export const useEditSchedule = (gardenId: number) => {
  const [editScheduleFormState, setEditScheduleFormState] =
    useState<EditScheduleForm>(defaultSchedule);

  const [loading, setLoading] = useState(false);

  const {navigate} = useNavigation<HomeScreenNavigationType>();

  const [test, setTest] = useState<any>();

  const [garden, setGarden] = useState<Garden | undefined>();

  const fetchGardens = useGardensStore(
    gardensStore => gardensStore.fetchGardens,
  );

  const getGardenById = useGardensStore(
    gardenStore => gardenStore.getGardenById,
  );

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
      fetchGardens();

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

    if (!garden) return; 

    setEditScheduleFormState({
      monday: {
        active: garden!.schedule.daysOfSchedule[0].active,
        dayNumber: garden!.schedule.daysOfSchedule[0].dayNumber,
        cuantity: garden!.schedule.daysOfSchedule[0].cuantity,
      },
      tuesday: {
        active: garden!.schedule.daysOfSchedule[1].active,
        dayNumber: garden!.schedule.daysOfSchedule[1].dayNumber,
        cuantity: garden!.schedule.daysOfSchedule[1].cuantity,
      },
      wednesday: {
        active: garden!.schedule.daysOfSchedule[2].active,
        dayNumber: garden!.schedule.daysOfSchedule[2].dayNumber,
        cuantity: garden!.schedule.daysOfSchedule[2].cuantity,
      },
      thursday: {
        active: garden!.schedule.daysOfSchedule[3].active,
        dayNumber: garden!.schedule.daysOfSchedule[3].dayNumber,
        cuantity: garden!.schedule.daysOfSchedule[3].cuantity,
      },
      friday: {
        active: garden!.schedule.daysOfSchedule[4].active,
        dayNumber: garden!.schedule.daysOfSchedule[4].dayNumber,
        cuantity: garden!.schedule.daysOfSchedule[4].cuantity,
      },
      saturday: {
        active: garden!.schedule.daysOfSchedule[5].active,
        dayNumber: garden!.schedule.daysOfSchedule[5].dayNumber,
        cuantity: garden!.schedule.daysOfSchedule[5].cuantity,
      },
      sunday: {
        active: garden!.schedule.daysOfSchedule[6].active,
        dayNumber: garden!.schedule.daysOfSchedule[6].dayNumber,
        cuantity: garden!.schedule.daysOfSchedule[6].cuantity,
      },
    });
  }, [garden]);

  return {
    loading,
    editScheduleFormState,
    garden,

    onSubmit,
    toggleADay,
    changeDayCuantity,
  };
};
