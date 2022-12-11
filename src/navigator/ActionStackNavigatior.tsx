import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { ActionScreen } from '../screens/actions';

export type ActionStackParams = {
  ActionScreen: undefined;
};

const {Screen, Navigator} = createNativeStackNavigator<HomeStackParams>();

export const ActionStackNavigator = () => {
  return (
    <Navigator
      initialRouteName='ActionScreen'
      screenOptions={{
        headerShadowVisible: false,
        headerShown: false,
      }}
    >
      <Screen name='ActionScreen' component={ActionScreen} />
    </Navigator>
  );
};
