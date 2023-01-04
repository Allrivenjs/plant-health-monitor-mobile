import { useEffect, useState } from 'react';
import { Alert } from 'react-native';

import { Garden } from '../../interfaces/garden';
import { axiosClient } from '../../lib/axiosClient';

export const useHomeScreen = () => {
  const [loading, setLoading] = useState(true);

  const [gardens, setGardens] = useState<Garden[]>([]);

  const getGardens = async () => {
    setLoading(true);
    try {
      const res = await axiosClient.get('garden');
      setGardens(res.data.gardens);
    } catch (e) {
      Alert.alert(
        'Error al conectar con el servidor',
        'Error al intentar obtener los jardines del servidor, por favor ingrese de nuevo',
      );
      console.log('error on login request: ', e);
    }
    setLoading(false);
  };

  useEffect(() => {
    getGardens();
  }, []);

  return {
    gardens,
  };
};
