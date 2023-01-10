import {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {Action} from '../../interfaces/action';

import {axiosClient} from '../../lib/axiosClient';
import {useGardensStore} from '../../store';

export const useHomeScreen = () => {
  const [loading, setLoading] = useState(true);

  const [actions, setActions] = useState<Action[]>([]);

  const gardens = useGardensStore(gardensStore => gardensStore.gardens);
  const fetchGardens = useGardensStore(gardensStore => gardensStore.fetchGardens);
  const loadingGardens = useGardensStore(gardensStore => gardensStore.loading);

  const getActions = async () => {
    setLoading(true);
    try {
      const res = await axiosClient.get('action');
      setActions(res.data.actions);
    } catch (e) {
      Alert.alert(
        'Error al conectar con el servidor',
        'Error al intentar obtener las acciones del servidor, por favor ingrese de nuevo',
      );
      console.log('error on login request: ', e);
    }
    setLoading(false);
  };


  useEffect(() => {
    fetchGardens();
    getActions();
  }, []);

  return {
    loadingGardens,
    gardens,
    actions,
  };
};
