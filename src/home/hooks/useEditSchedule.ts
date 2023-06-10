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
  hour: number;
  minutes: number;
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
  hour: 17,
  minutes: 30,
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

export const useEditSchedule = (gardenId: number, isEditing: boolean) => {
  const [editScheduleFormState, setEditScheduleFormState] =
    useState<EditScheduleForm>(defaultSchedule);

  const [loading, setLoading] = useState(false);

  const {navigate} = useNavigation<HomeScreenNavigationType>();

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

  const changeHourAndMinutes = (
    day: keyof EditScheduleForm,
    hour: number,
    minutes: number,
  ) => {
    setEditScheduleFormState(prevState => ({
      ...prevState,
      [day]: {
        ...prevState[day],
        hour: hour,
        minutes: minutes,
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

    if (isEditing && garden) {
      setEditScheduleFormState({
        monday: {
          active: garden!.schedule.daysOfSchedule[0].active,
          dayNumber: garden!.schedule.daysOfSchedule[0].dayNumber,
          cuantity: garden!.schedule.daysOfSchedule[0].cuantity,
          hour: garden!.schedule.daysOfSchedule[0].hour,
          minutes: garden!.schedule.daysOfSchedule[0].minutes,
        },
        tuesday: {
          active: garden!.schedule.daysOfSchedule[1].active,
          dayNumber: garden!.schedule.daysOfSchedule[1].dayNumber,
          cuantity: garden!.schedule.daysOfSchedule[1].cuantity,
          hour: garden!.schedule.daysOfSchedule[1].hour,
          minutes: garden!.schedule.daysOfSchedule[1].minutes,
        },
        wednesday: {
          active: garden!.schedule.daysOfSchedule[2].active,
          dayNumber: garden!.schedule.daysOfSchedule[2].dayNumber,
          cuantity: garden!.schedule.daysOfSchedule[2].cuantity,
          hour: garden!.schedule.daysOfSchedule[2].hour,
          minutes: garden!.schedule.daysOfSchedule[2].minutes,
        },
        thursday: {
          active: garden!.schedule.daysOfSchedule[3].active,
          dayNumber: garden!.schedule.daysOfSchedule[3].dayNumber,
          cuantity: garden!.schedule.daysOfSchedule[3].cuantity,
          hour: garden!.schedule.daysOfSchedule[3].hour,
          minutes: garden!.schedule.daysOfSchedule[3].minutes,
        },
        friday: {
          active: garden!.schedule.daysOfSchedule[4].active,
          dayNumber: garden!.schedule.daysOfSchedule[4].dayNumber,
          cuantity: garden!.schedule.daysOfSchedule[4].cuantity,
          hour: garden!.schedule.daysOfSchedule[4].hour,
          minutes: garden!.schedule.daysOfSchedule[4].minutes,
        },
        saturday: {
          active: garden!.schedule.daysOfSchedule[5].active,
          dayNumber: garden!.schedule.daysOfSchedule[5].dayNumber,
          cuantity: garden!.schedule.daysOfSchedule[5].cuantity,
          hour: garden!.schedule.daysOfSchedule[5].hour,
          minutes: garden!.schedule.daysOfSchedule[5].minutes,
        },
        sunday: {
          active: garden!.schedule.daysOfSchedule[6].active,
          dayNumber: garden!.schedule.daysOfSchedule[6].dayNumber,
          cuantity: garden!.schedule.daysOfSchedule[6].cuantity,
          hour: garden!.schedule.daysOfSchedule[6].hour,
          minutes: garden!.schedule.daysOfSchedule[6].minutes,
        },
      });
    }
  }, [garden]);

  return {
    loading,
    editScheduleFormState,
    garden,

    onSubmit,
    toggleADay,
    changeDayCuantity,
    changeHourAndMinutes,
  };
};
