import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Controller} from 'react-hook-form';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import {Button, Input, Typography} from '../../components';

import {useTheme} from '../../hooks';
import {useLogin} from '../../hooks/auth/useLogin';

import {AuthStackParams} from '../../navigator';

export type LoginScreenNavigationType = NativeStackNavigationProp<
  AuthStackParams,
  'LoginScreen'
>;

export const LoginScreen = () => {
  const {colors} = useTheme();

  const {navigate} = useNavigation<LoginScreenNavigationType>();

  const {control, onSubmit} = useLogin();

  const styles = StyleSheet.create({
    screenContainer: {
      flex: 1,
      height: '100%',
      paddingBottom: 56,
      justifyContent: 'space-between',
      backgroundColor: 'blue',
    },
    headerContainer: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 32,
      marginBottom: 16,
    },
    headerDecorator: {
      width: '100%',
      backgroundColor: colors.primary,
      height: 3,
      marginTop: 2,
    },
  });

  return (
    <ScrollView contentContainerStyle={{justifyContent: 'space-around'}}>
      <StatusBar backgroundColor={colors.background} barStyle='dark-content' />

      <View style={{marginTop: 98, marginBottom: 42}}>
        <View style={styles.headerContainer}>
          <Typography size='heading1'>Bienvenido de vuelta a </Typography>
          <View
            style={{
              flexDirection: 'column',
              width: '100%',
              alignItems: 'center',
            }}>
            <Typography
              size='heading1'
              style={{
                color: colors.primary,
                borderBottomWidth: 3,
                borderBottomColor: colors.primary,
              }}>
              P.H.M
            </Typography>
          </View>
        </View>

        <Typography
          size='body'
          style={{
            color: colors.gray,
            textAlign: 'center',
            paddingHorizontal: 68,
          }}>
          Inicia sesión para empezar a gestionar tus plantas
        </Typography>
      </View>

      <View
        style={{
          paddingHorizontal: 20,
          alignItems: 'center',
          flex: 1,
        }}>
        <Controller
          name='email'
          control={control}
          render={({field: {value, onChange}}) => (
            <Input
              name='Email'
              value={value}
              onChange={onChange}
              nameOnTop
              leftIcon='person'
              iconColor={colors.primary}
              placeholder='Pepito'
              containerStyles={{marginBottom: 20, marginTop: 32}}
            />
          )}
        />

        <Controller
          name='password'
          control={control}
          render={({field: {value, onChange}}) => (
            <Input
              name='Contraseña'
              value={value}
              onChange={onChange}
              nameOnTop
              leftIcon='lock'
              iconColor={colors.primary}
              placeholder='*********'
              containerStyles={{marginBottom: 20}}
              props={{secureTextEntry: true}}
            />
          )}
        />

        <Button size='large' onPress={onSubmit}>
          Iniciar sesión
        </Button>
      </View>

      {/* Move this view inside the ScrollView container */}
      <View
        style={{
          marginTop: 32,
        }}>
        <View style={styles.headerContainer}>
          <Typography
            size='body'
            style={{
              color: colors.gray,
              textAlign: 'center',
            }}>
            ¿No tienes cuenta de P.H.M?
          </Typography>
          <TouchableOpacity onPress={() => navigate('RegisterScreen')}>
            <Typography
              size='body'
              style={{
                color: colors.primary,
                textAlign: 'center',
              }}>
              {' '}
              Registrate
            </Typography>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
