import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  HomeScreen,
  AddNewGardenScreen,
  AddGardenWaterScheduleScreen,
  GardenScreen,
} from '../screens/home';

import {useTheme} from '../hooks';

export type HomeStackParams = {
  HomeScreen: undefined;
  AddNewGardenScreen: undefined;
  AddGardenWaterScheduleScreen: { gardenId: number };
  GardenScreen: undefined;
};

const {Screen, Navigator} = createNativeStackNavigator<HomeStackParams>();

export const HomeStackNavigator = () => {
  const {colors, textStyles} = useTheme();

  return (
    <Navigator
      initialRouteName='HomeScreen'
      screenOptions={{
        headerShadowVisible: false,
        headerShown: false,
      }}>
      <Screen
        options={{headerShown: false, headerTitle: ''}}
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
