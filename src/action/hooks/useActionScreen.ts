import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { Action } from '../../interfaces/action';
import { axiosClient } from '../../lib/axiosClient';

export const useActionScreen = () => {
  const [actions, setActions] = useState<Action[]>([]);

  const [loading, setLoading] = useState(true);

  const getActions = async () => {
    setLoading(true);

    try {
      const res = await axiosClient.get('action');
      console.log(res.data);

    } catch (e) {
      Alert.alert(
        'Error al conectar con el servidor',
        'Error al intentar obtener los jardines del servidor, por favor ingrese de nuevo',
      );
      console.log('error on login request: ', e);
    };
    setLoading(false);
  };

  useEffect(() => {
    getActions();
  }, []);

  return {
    loading, 
    actions,

    getActions,
  };
};
