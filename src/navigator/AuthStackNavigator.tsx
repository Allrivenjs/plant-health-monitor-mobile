import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { LoginScreen, RegisterScreen } from '../screens/auth';

export type AuthStackParams = {
  LoginScreen: undefined;
  RegisterScreen: undefined;
};

const {Screen, Navigator} = createNativeStackNavigator<AuthStackParams>();

export const AuthStackNavigator = () => {
  return (
    <Navigator
      initialRouteName='LoginScreen'
      screenOptions={{
        headerShadowVisible: false,
        headerShown: false,
      }}
    >
      <Screen name='LoginScreen' component={LoginScreen} />
      <Screen name='RegisterScreen' component={RegisterScreen} />
    </Navigator>
  );
};
