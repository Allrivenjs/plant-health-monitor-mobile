import {useState} from 'react';
import {FieldValues, useForm} from 'react-hook-form';
import {Alert} from 'react-native';
import {axiosClient} from '../../lib/axiosClient';

import {storeLocalValue} from '../../localStore';
import {useUserStore} from '../../store/useUserStore';

interface Login {
  email: string;
  password: string;
}

export const useLogin = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<FieldValues>({
    defaultValues: {
      email: 'test@gmail.com',
      password: 'password',
    },
  });

  const setUser = useUserStore(userStore => userStore.setUser);
  const setStatus = useUserStore(userStore => userStore.setStatus);

  const [loading, setLoading] = useState(false);

  const onSubmit = handleSubmit(async ({email, password}) => {
    setStatus('verifiying');
    setLoading(true);
    try {
      const res = await axiosClient.post('auth/login', {
        username: email,
        password,
      });

      await storeLocalValue('token', res.data.token);
      setUser(res.data.user);
      setStatus('logged');
    } catch (e) {
      Alert.alert(
        'Error al iniciar sesión',
        'Por favor, revisa las crediciales e intenta nuevamente',
      );
      console.log('error on login request: ', e);
      setStatus('not-logged');
    }
    setLoading(false);
  });

  return {
    control,
    register,

    onSubmit,
  };
};
