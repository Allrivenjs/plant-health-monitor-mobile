import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  HomeScreen,
  AddNewGardenScreen,
  AddGardenWaterScheduleScreen,
  GardenScreen,
} from '../screens/home';

import { useWateringSockets } from '../home/hooks';

export type HomeStackParams = {
  HomeScreen: undefined;
  AddNewGardenScreen: {isEditing?: boolean; gardenId?: number};
  AddGardenWaterScheduleScreen: {isEditing: boolean; scheduleId: number};
  GardenScreen: {gardenId: number};
};

const {Screen, Navigator} = createNativeStackNavigator<HomeStackParams>();

export const HomeStackNavigator = () => {
  const hello = useWateringSockets();
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
