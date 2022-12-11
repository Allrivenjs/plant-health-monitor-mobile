import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { Button, Input } from '../../components';

import {PlantImage} from '../../components/PlantImage';

import {useTheme} from '../../hooks';
import { HomeScreenNavigationType } from './';

export const AddNewGardenScreen = () => {
  const {colors, textStyles} = useTheme();

  const {navigate} = useNavigation<HomeScreenNavigationType>();

  const onClickNext = () => {
    navigate('AddGardenWaterScheduleScreen')
  };

  const style = StyleSheet.create({
    screenContainer: {
      flex: 1,
      paddingBottom: 56,
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
          <PlantImage source={require('../../../assets/images/plant1.png')} />
        </View>

        <View style={style.formContainer}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderBottomWidth: 3,
              borderColor: colors.primary,
              marginVertical: 32,
            }}
          >
            <TextInput
              style={{
                ...textStyles.heading1,
                padding: 0,
                paddingBottom: 6,
                marginRight: 6,
                color: colors.black
              }}
              placeholder='Nombra tu jardín'
            />

            <Icon
              name='edit'
              size={28}
              color={colors.lightGray}
            />
          </View>

          <Input
            placeholder='Tipo de planta'
            leftIcon='assignment'
            iconColor={colors.lightGreen}
            nameOnTop
            containerStyles={{marginBottom: 16,}}
          />

          <Input
            placeholder='Temperatura minima'
            leftIcon='device-thermostat'
            iconColor={colors.lightBlue}
            nameOnTop
            containerStyles={{marginBottom: 16,}}
            props={{
              keyboardType: 'numeric',
            }}
          />

          <Input
            placeholder='Temperatura máxima'
            leftIcon='device-thermostat'
            iconColor={colors.lightRed}
            nameOnTop
            containerStyles={{marginBottom: 16,}}
            props={{
              keyboardType: 'numeric',
            }}
          />

          <Input
            placeholder='Niveles de agua'
            leftIcon='opacity'
            iconColor={colors.lightBlue}
            nameOnTop
            containerStyles={{marginBottom: 16,}}
          />

          <Input
            placeholder='Niveles de luz solar'
            leftIcon='wb-sunny'
            iconColor={colors.lightYellow}
            nameOnTop
            containerStyles={{marginBottom: 16,}}
          />

          <Button
            size='large'
            buttonStyles={{marginBottom: 20, marginTop: 4,}}
            onPress={onClickNext}
          >
            Siguiente
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};
