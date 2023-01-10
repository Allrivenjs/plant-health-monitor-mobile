import {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {Garden} from '../../interfaces/garden';
import {axiosClient} from '../../lib/axiosClient';

export const useGardenScreen = (gardenId: number) => {
  const [loading, setLoading] = useState(true);
  const [garden, setGarden] = useState<Garden>({
    id: 0,
    name: '',
    plant_type: '',
    image:
      'https://res.cloudinary.com/dyuhuguiq/image/upload/v1672598755/plant1_iovkrr.png',
    min_temperature: 0,
    max_temperature: 0,
    sun_levels: 0,
    water_levels: 0,
    created_at: new Date(),
    updated_at: new Date(),
    schedule: {
      id: 0,
      daysOfSchedule: [],
      created_at: '',
      updated_at: '',
    }
  });

  const getGarden = async () => {
    setLoading(true);
    try {
      const res = await axiosClient.get(`garden/${gardenId}`);
      setGarden(res.data.garden);
    } catch (e) {
      Alert.alert(
        'Error al conectar con el servidor',
        'Error al intentar obtener los datos del jardin desde servidor, por favor ingrese de nuevo',
      );
      console.log('error on login request: ', e);
    }
    setLoading(false);
  };

  useEffect(() => {
    getGarden();
  }, []);

  return {
    loading,
    garden,
  };
};
