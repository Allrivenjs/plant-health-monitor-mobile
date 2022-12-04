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
      flex: 1,
      backgroundColor: colors.white,
      justifyContent: 'center',
      alignItems: 'center',
    },
    formContainer: {
      flex: 2,
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
            }}
          >
            <TextInput
              style={{
                ...textStyles.heading1,
                padding: 0,
                paddingBottom: 6,
                marginRight: 6,
              }}
              placeholder='Nombra tu jardín'
            />

            <Icon
              name='edit'
              size={28}
              color={colors.gray}
            />
          </View>

          <Input
            name='Tipo de planta'
            leftIcon='opacity'
            iconColor={colors.blue}
            placeholder='Tipo de planta'
            nameOnTop
          />

          <Input
            name='Tipo de planta'
            leftIcon='opacity'
            iconColor={colors.blue}
            placeholder='Tipo de planta'
            nameOnTop
          />

          <Input
            name='Tipo de planta'
            leftIcon='opacity'
            iconColor={colors.blue}
            placeholder='Tipo de planta'
            nameOnTop
          />

          <Input
            name='Tipo de planta'
            leftIcon='opacity'
            iconColor={colors.blue}
            placeholder='Tipo de planta'
            nameOnTop
          />

          <Input
            name='Tipo de planta'
            leftIcon='opacity'
            iconColor={colors.blue}
            placeholder='Tipo de planta'
            nameOnTop
          />
        </View>
      </View>
    </ScrollView>
  );
};
