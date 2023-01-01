import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';

import {useForm} from 'react-hook-form';

import {Alert} from 'react-native';
import {Garden} from '../../interfaces/garden';

import {axiosClient} from '../../lib/axiosClient';
import {HomeScreenNavigationType} from '../../screens/home';
import {useUserStore} from '../../store/useUserStore';

interface NewGardenForm {
  name: string;
  plant_type: string;
  max_temperature: string;
  min_temperature: string;
  water_levels: number;
  sun_levels: number;
}

export const useCreateNewGarden = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<NewGardenForm>({
    defaultValues: {
      name: '',
      plant_type: '',
      max_temperature: '',
      min_temperature: '',
      water_levels: 0,
      sun_levels: 0,
    },
  });

  const [imageUrl, setImageUrl] = useState(
    'https://res.cloudinary.com/dyuhuguiq/image/upload/v1672598755/plant1_iovkrr.png',
  );

  const [loading, setLoading] = useState(false);

  const {navigate} = useNavigation<HomeScreenNavigationType>();

  const user = useUserStore(userStore => userStore.user);

  const onSubmit = handleSubmit(async (newGarden: NewGardenForm) => {
    console.log({image: imageUrl});
    setLoading(true);

    try {
      const res = await axiosClient.post<Garden>('garden', {
        ...newGarden,
        user_id: user!.id,
        image: imageUrl,
      });
      console.log('res: ', res);

      navigate('AddGardenWaterScheduleScreen');
    } catch (e) {
      console.log('Error creating new garden: ', e);
      Alert.alert(
        'Ha ocurrido un error con los datos',
        'Por favor, revisa los datos ingresados e intente nuevamente.',
      );
    }
    setLoading(false);
  });

  return {
    control,
    loading,
    register,
    imageUrl,

    onSubmit,
  };
};
