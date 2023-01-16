import create from 'zustand';

import {Alert} from 'react-native';

import {Action} from '../interfaces/action';

import {axiosClient} from '../lib/axiosClient';

interface ActionsStore {
  actions: Action[];
  loading: boolean;
  fetchActions: () => void;
  addAction: (action: Action) => void;
  setLoading: (loading: boolean) => void;
}

export const useActionsStore = create<ActionsStore>((set, get) => ({
  actions: [],
  loading: true,
  fetchActions: async () => {
    set({loading: true});
    try {
      const res = await axiosClient.get('action');

      set({actions: res.data.actions});
    } catch (e) {
      Alert.alert(
        'Error al conectar con el servidor',
        'Error al intentar obtener las acciones de los jardines del servidor, por favor ingrese de nuevo',
      );
      console.log('error on actions request: ', e);
    }
    set({loading: false});
  },
  addAction: (action: Action) => {
    const actions = get().actions;
    actions.push(action);
    set({actions});
  },
  setLoading: (loading: boolean) => set(state => ({loading})),
}));
