import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { Button, Input, Typography } from '../components';

import {PlantImage} from '../components/PlantImage';
import { InfoCard } from '../home/components/InfoCard';

import {useTheme} from '../hooks';
import { HomeStackParams } from '../navigator';
import { HomeScreenNavigationType } from './HomeScreen';

export type GardenScreenNavigationType = NativeStackNavigationProp<
  HomeStackParams,
  'GardenScreen'
>;

export const GardenScreen = () => {
  const {colors, textStyles} = useTheme();

  const {navigate} = useNavigation<HomeScreenNavigationType>();

  const onClickNext = () => {
    navigate('AddGardenWaterScheduleScreen')
  };

  const style = StyleSheet.create({
    screenContainer: {
      flex: 1,
      backgroundColor: 'white',
    },
    plantContainer: {
      height: 260,
      backgroundColor: colors.white,
      justifyContent: 'center',
      alignItems: 'center',
    },
    formContainer: {
      alignItems: 'center',
      backgroundColor: colors.background,
      borderTopRightRadius: 32,
      borderTopLeftRadius: 32,
      paddingHorizontal: 20,
    },
  });

  return (
    <ScrollView style={{flex: 1}}>
      <StatusBar backgroundColor={colors.white} barStyle='dark-content' />
      <View style={style.screenContainer}>
        <View style={style.plantContainer}>
          <PlantImage source={require('../../assets/images/plant1.png')} />
        </View>

        <View style={style.formContainer}>
          <Typography
            style={{alignSelf: 'flex-start', marginBottom: 18, marginTop: 32}}
            size='heading2'>
            Días de regado
          </Typography>


          <InfoCard 
            content='22%'
            icon='opacity'
            name='Humedad'
            color={colors.blue}
          />

          <InfoCard 
            content='22°C'
            icon='opacity'
            name='Temp'
            color={colors.red}
          />

          <InfoCard 
            content='22%'
            icon='opacity'
            name='Luz'
            color={colors.yellow}
          />

        </View>
      </View>
    </ScrollView>
  );
};
