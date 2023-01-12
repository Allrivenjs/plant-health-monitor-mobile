import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';

import {useForm} from 'react-hook-form';

import {Alert} from 'react-native';

import {axiosClient} from '../../lib/axiosClient';
import {HomeScreenNavigationType} from '../../screens/home';
import {useGardensStore} from '../../store';
import {useUserStore} from '../../store/useUserStore';

interface NewGardenForm {
  name: string;
  plant_type: string;
  max_temperature: string;
  min_temperature: string;
  water_levels: string;
  sun_levels: string;
}

export const useCreateNewGarden = (
  isEditing: boolean = false,
  gardenId: number,
) => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: {errors},
  } = useForm<NewGardenForm>({
    defaultValues: {
      name: '',
      plant_type: '',
      max_temperature: '',
      min_temperature: '',
      water_levels: '0',
      sun_levels: '0',
    },
  });

  const [imageUrl, setImageUrl] = useState(
    'https://res.cloudinary.com/dyuhuguiq/image/upload/v1672598755/plant1_iovkrr.png',
  );

  const [loading, setLoading] = useState(false);

  const {navigate} = useNavigation<HomeScreenNavigationType>();

  const user = useUserStore(userStore => userStore.user);

  const addGarden = useGardensStore(gardensStore => gardensStore.addGarden);
  const getGardenById = useGardensStore(
    gardensStore => gardensStore.getGardenById,
  );
  const fetchGardens = useGardensStore(
    gardensStore => gardensStore.fetchGardens,
  );

  const postNewGarden = async (newGarden: NewGardenForm) => {
    setLoading(true);

    try {
      const res = await axiosClient.post('garden', {
        ...newGarden,
        user_id: user!.id,
        image: imageUrl,
      });

      addGarden(res.data.garden);

      navigate('AddGardenWaterScheduleScreen', {
        scheduleId: res.data.garden.schedule.id,
      });
    } catch (e) {
      console.log('Error creating new garden: ', e);
      Alert.alert(
        'Ha ocurrido un error con los datos',
        'Por favor, revisa los datos ingresados e intente nuevamente.',
      );
    }

    setLoading(false);
  };

  const editAGarden = async (newGarden: NewGardenForm) => {
    setLoading(true);
    try {
      const res = await axiosClient.put(`garden/${gardenId}`, {
        ...newGarden,
        user_id: user!.id,
        image: imageUrl,
      });

      fetchGardens();

      navigate('HomeScreen');
    } catch (e) {
      console.log('Error creating new garden: ', e);
      Alert.alert(
        'Ha ocurrido un error con los datos',
        'Por favor, revisa los datos ingresados e intente nuevamente.',
      );
    }

    setLoading(false);
  };

  const onSubmit = handleSubmit(isEditing ? editAGarden : postNewGarden);

  useEffect(() => {
    console.log(gardenId);
    const garden = getGardenById(gardenId);
    console.log(garden);

    if (garden && isEditing) {
      setValue('name', garden!.name);
      setValue('plant_type', garden!.plant_type);
      setValue('max_temperature', String(garden!.max_temperature));
      setValue('min_temperature', String(garden!.min_temperature));
      setValue('sun_levels', String(garden!.sun_levels));
      setValue('water_levels', String(garden!.water_levels));
    }
  }, []);

  return {
    control,
    loading,
    imageUrl,

    onSubmit,
  };
};
