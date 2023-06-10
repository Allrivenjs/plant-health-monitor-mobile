import {Alert} from 'react-native';
import create from 'zustand';

import {Garden} from '../interfaces/garden';
import {axiosClient} from '../lib/axiosClient';

interface GardensState {
  gardens: Garden[];
  loading: boolean;
  fetchGardens: () => void;
  addGarden: (garden: Garden) => void;
  getGardenById: (gardenId: number) => Garden | undefined;
  setGardens: (gardens: Garden[]) => void;
  setLoading: (loading: boolean) => void;
  deleteGardenById: (gardenId: number) => void;
}

export const useGardensStore = create<GardensState>((set, get) => ({
  gardens: [],
  loading: true,
  fetchGardens: async () => {
    set({loading: true});
    try {
      const res = await axiosClient.get('garden');

      set({gardens: res.data.gardens});
    } catch (e) {
      Alert.alert(
        'Error al conectar con el servidor',
        'Error al intentar obtener los jardines del servidor, por favor ingrese de nuevo',
      );
      console.log('error on login request: ', e);
    }
    set({loading: false});
  },
  addGarden: (garden: Garden) => {
    const gardens = get().gardens;
    gardens.push(garden);
    set({gardens});
  },
  getGardenById: (gardenId: number) => {
    return get().gardens.find(garden => garden.id === gardenId);
  },
  deleteGardenById: async (gardenId: number) => {
    set({loading: true});
    try {
      await axiosClient.delete(`garden/${gardenId}`);
      get().fetchGardens();

    } catch (e) {
      Alert.alert(
        'Error al conectar con el servidor',
        'Error al intentar obtener los jardines del servidor, por favor ingrese de nuevo',
      );
      console.log('error on login request: ', e);
    }
    set({loading: false});
  },
  setGardens: (gardens: Garden[]) => set(state => ({gardens})),
  setLoading: (loading: boolean) => set(state => ({loading})),
}));
