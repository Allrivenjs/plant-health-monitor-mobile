import React from 'react';
import {ScrollView, StatusBar, StyleSheet, TextInput, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {Button, Input} from '../../components';

import {PlantImage} from '../../components/PlantImage';

import {useTheme} from '../../hooks';
import {HomeScreenNavigationType} from './';
import {useCreateNewGarden} from '../../home/hooks/useCreateNewGarden';
import {Controller} from 'react-hook-form';

export const AddNewGardenScreen = () => {
  const {colors, textStyles} = useTheme();

  const {navigate} = useNavigation<HomeScreenNavigationType>();

  const {imageUrl, loading, register, control, onSubmit} = useCreateNewGarden();

  const onClickNext = async () => {
    await onSubmit();
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
          <PlantImage source={imageUrl} />
        </View>

        <View style={style.formContainer}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderBottomWidth: 3,
              borderColor: colors.primary,
              marginVertical: 32,
            }}>
            <Controller
              name='name'
              control={control}
              render={({field: {value, onChange}}) => (
                <TextInput
                  style={{
                    ...textStyles.heading1,
                    padding: 0,
                    paddingBottom: 6,
                    marginRight: 6,
                    color: colors.black,
                  }}
                  placeholder='Nombra tu jardín'
                  value={value}
                  onChange={e => onChange(e.nativeEvent.text)}
                />
              )}
            />

            <Icon name='edit' size={28} color={colors.lightGray} />
          </View>

          <Controller
            name='plant_type'
            control={control}
            render={({field: {value, onChange}}) => (
              <Input
                name='Tipo de planta'
                value={value}
                onChange={onChange}
                nameOnTop
                leftIcon='assignment'
                iconColor={colors.lightGreen}
                placeholder='Veranera'
                containerStyles={{marginBottom: 16}}
              />
            )}
          />

          <Controller
            name='min_temperature'
            control={control}
            render={({field: {value, onChange}}) => (
              <Input
                name='Temperatura minima'
                value={value}
                onChange={onChange}
                nameOnTop
                leftIcon='device-thermostat'
                iconColor={colors.lightBlue}
                placeholder='0'
                containerStyles={{marginBottom: 16}}
                props={{
                  keyboardType: 'numeric',
                }}
              />
            )}
          />

          <Controller
            name='max_temperature'
            control={control}
            render={({field: {value, onChange}}) => (
              <Input
                name='Temperatura maxima'
                value={value}
                onChange={onChange}
                nameOnTop
                leftIcon='device-thermostat'
                iconColor={colors.lightRed}
                placeholder='0'
                containerStyles={{marginBottom: 16}}
                props={{
                  keyboardType: 'numeric',
                }}
              />
            )}
          />

          <Controller
            name='water_levels'
            control={control}
            render={({field: {value, onChange}}) => (
              <Input
                name='Niveles de agua'
                value={value}
                onChange={onChange}
                nameOnTop
                leftIcon='opacity'
                iconColor={colors.lightBlue}
                placeholder='0'
                containerStyles={{marginBottom: 16}}
              />
            )}
          />

          <Controller
            name='sun_levels'
            control={control}
            render={({field: {value, onChange}}) => (
              <Input
                name='Niveles de sol'
                value={value}
                onChange={onChange}
                nameOnTop
                leftIcon='wb-sunny'
                iconColor={colors.lightYellow}
                placeholder='0'
                containerStyles={{marginBottom: 16}}
              />
            )}
          />

          <Button
            size='large'
            buttonStyles={{marginBottom: 20, marginTop: 4}}
            onPress={onClickNext}>
            Siguiente
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};
