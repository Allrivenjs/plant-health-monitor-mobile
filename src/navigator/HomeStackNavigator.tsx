import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  HomeScreen,
  AddNewGardenScreen,
  AddGardenWaterScheduleScreen,
  GardenScreen,
} from '../screens/home';

export type HomeStackParams = {
  HomeScreen: undefined;
  AddNewGardenScreen: undefined;
  AddGardenWaterScheduleScreen: undefined;
  GardenScreen: undefined;
};

const {Screen, Navigator} = createNativeStackNavigator<HomeStackParams>();

export const HomeStackNavigator = () => {
  return (
    <Navigator
      initialRouteName='HomeScreen'
      screenOptions={{
        headerShadowVisible: false,
        headerShown: false,
      }}>
      <Screen
        name='HomeScreen'
        component={HomeScreen}
      />
      <Screen
        options={{headerShown: true, headerTitle: ''}}
        name='AddNewGardenScreen'
        component={AddNewGardenScreen}
      />
      <Screen
        options={{headerShown: true, headerTitle: ''}}
        name='AddGardenWaterScheduleScreen'
        component={AddGardenWaterScheduleScreen}
      />
      <Screen
        options={{headerShown: true, headerTitle: ''}}
        name='GardenScreen'
        component={GardenScreen}
      />
    </Navigator>
  );
};
