import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ScrollView, StatusBar, StyleSheet, TouchableOpacity, View} from 'react-native';

import {Button, Input, Typography} from '../../components';

import {useTheme} from '../../hooks';

import {AuthStackParams} from '../../navigator';

export type RegisterScreenNavigationType = NativeStackNavigationProp<
  AuthStackParams,
  'RegisterScreen'
>;

export const RegisterScreen = () => {
  const {colors} = useTheme();

  const {navigate} = useNavigation<RegisterScreenNavigationType>();

  const styles = StyleSheet.create({
    screenContainer: {
      flex: 1,
      height: '100%',
      paddingBottom: 56,
      justifyContent: 'space-between',
      backgroundColor: 'blue',
    },
    headerContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
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
          <Typography size='heading1'>Bienvenido a </Typography>
          <View>
            <Typography size='heading1' style={{color: colors.primary}}>
              P.H.M
            </Typography>
            <View style={styles.headerDecorator} />
          </View>
        </View>

        <Typography
          size='body'
          style={{
            color: colors.gray,
            textAlign: 'center',
            paddingHorizontal: 68,
          }}>
          Registrate para empezar a gestionar tus plantas
        </Typography>
      </View>

      <View
        style={{
          paddingHorizontal: 20,
          alignItems: 'center',
          flex: 1,
        }}>
        <Input
          name='Nombre completo'
          nameOnTop
          leftIcon='person'
          iconColor={colors.primary}
          placeholder='Pepito'
          containerStyles={{marginBottom: 20, marginTop: 32}}
        />

        <Input
          name='Usuario'
          nameOnTop
          leftIcon='person'
          iconColor={colors.primary}
          placeholder='Pepito'
          containerStyles={{marginBottom: 20}}
        />

        <Input
          name='Contraseña'
          nameOnTop
          leftIcon='lock'
          iconColor={colors.primary}
          placeholder='*******'
          containerStyles={{marginBottom: 20}}
        />
        <Button
          size='large'
        >
          Registrarse
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
            ¿Ya tienes cuenta de P.H.M?
          </Typography>
          <TouchableOpacity
            onPress={() => navigate('LoginScreen')}
          >
            <Typography
              size='body'
              style={{
                color: colors.primary,
                textAlign: 'center',
              }}>
              {" "}Inicia sesión
            </Typography>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
