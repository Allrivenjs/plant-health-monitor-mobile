import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HomeScreen} from '../screens/HomeScreen';
import {AddNewGardenScreen} from '../screens/AddNewGardenScreen';
import { AddGardenWaterScheduleScreen } from '../screens/AddGardenWaterScheduleScreen';
import { GardenScreen } from '../screens/GardenScreen';

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
      }}>
      <Screen name='HomeScreen' component={HomeScreen} />
      <Screen name='AddNewGardenScreen' component={AddNewGardenScreen} />
      <Screen name='AddGardenWaterScheduleScreen' component={AddGardenWaterScheduleScreen} />
      <Screen name='GardenScreen' component={GardenScreen} />
    </Navigator>
  );
};
