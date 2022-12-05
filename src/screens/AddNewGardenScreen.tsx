import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { Input } from '../components';

import {PlantImage} from '../components/PlantImage';

import {useTheme} from '../hooks';

export const AddNewGardenScreen = () => {
  const {colors, textStyles} = useTheme();

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
            iconColor={colors.green}
            nameOnTop
            containerStyles={{marginBottom: 10,}}
          />

          <Input
            placeholder='Temperatura minima'
            leftIcon='device-thermostat'
            iconColor={colors.blue}
            nameOnTop
            containerStyles={{marginBottom: 10,}}
            props={{
              keyboardType: 'numeric',
            }}
          />

          <Input
            placeholder='Temperatura máxima'
            leftIcon='device-thermostat'
            iconColor={colors.red}
            nameOnTop
            containerStyles={{marginBottom: 10,}}
          />

          <Input
            placeholder='Niveles de agua'
            leftIcon='opacity'
            iconColor={colors.blue}
            nameOnTop
            containerStyles={{marginBottom: 10,}}
          />

          <Input
            placeholder='Niveles de luz solar'
            leftIcon='wb-sunny'
            iconColor={colors.yellow}
            nameOnTop
            containerStyles={{marginBottom: 10,}}
          />
        </View>
      </View>
    </ScrollView>
  );
};
