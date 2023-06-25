import {useState} from 'react';
import {FieldValues, useForm} from 'react-hook-form';
import {Alert} from 'react-native';
import {axiosClient} from '../../lib/axiosClient';

import {storeLocalValue} from '../../localStore';
import {useUserStore} from '../../store/useUserStore';

export const useRegister = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const setStatus = useUserStore(userStore => userStore.setStatus);
  const setUser = useUserStore(user => user.setUser);
  const [loading, setLoading] = useState(false);

  const onSubmit = handleSubmit(async ({name, email, password}) => {
    setStatus('verifiying');

    setLoading(true);
    try {
      const res = await axiosClient.post('auth/register', {
        name,
        email,
        password,
      });

      await storeLocalValue('token', res.data.token);
      setUser(res.data.user);
      setStatus('logged');
    } catch (e) {
      Alert.alert(
        'Error al registrarse',
        'Por favor, revisa las crediciales e intenta nuevamente',
      );
      console.log('error on register request: ', e);
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
