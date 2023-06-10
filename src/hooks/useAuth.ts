import { useState } from 'react';
import { axiosClient } from '../lib/axiosClient';
import { useUserStore } from '../store/useUserStore';

import { getLocalValue, storeLocalValue } from '../localStore';
import { Alert } from 'react-native';


export const useAuth = () => {
  const status = useUserStore((userStore) => userStore.status);
  const setStatus = useUserStore((userStore) => userStore.setStatus);

  const user = useUserStore((userStore) => userStore.user);
  const setUser = useUserStore((userStore) => userStore.setUser);

  const verifyUserAuthentication = async () => {
    const token = await getLocalValue('token');

    if (!token) {
      console.log('no token: ', token);
      setStatus('not-logged');
      setUser(null);
      Alert.alert('No hay sesión', 'Inicia sesión para continuar');

      return;
    }

    try {
      const data = await axiosClient.get('auth/verify');
      setUser({
        id: data.data.user.id,
        name: data.data.user.name,
        email: data.data.user.email,
      });
      setStatus('logged');
      Alert.alert('Sesión iniciada', 'Sesión iniciada exitosamente');
    } catch(e) {
      console.log('error verifiying user: ', e);
      setStatus('not-logged');
      setUser(null);
      Alert.alert('Error al iniciar sesión', 'Vuelva a intentar más tarde');
    }
  };

  const logout = async () => {
    await storeLocalValue('token', '');
    setUser(null);
    setStatus('not-logged');

    Alert.alert('Sesión cerrada', 'Se ha cerrado sesión exitosamente');
  };

  return {
    user,
    status,

    verifyUserAuthentication,
    logout,
  };
};
