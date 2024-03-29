import React, {FC} from 'react';
import {ScrollView, StatusBar, StyleSheet, TextInput, View} from 'react-native';

import {Controller} from 'react-hook-form';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {useTheme} from '../../hooks';

import {Button, Input, PlantImage, InputPicker} from '../../components';

import {useCreateNewGarden} from '../../home/hooks/useCreateNewGarden';

import {levels} from '../../constants';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {HomeStackParams} from '../../navigator';

export type HomeScreenNavigationType = NativeStackNavigationProp<
  HomeStackParams,
  'AddNewGardenScreen'
>;

interface Props
  extends NativeStackScreenProps<HomeStackParams, 'AddNewGardenScreen'> {}

export const AddNewGardenScreen: FC<Props> = ({route}) => {
  const {colors, textStyles} = useTheme();

  const {imageUrl, loading, control, onSubmit} = useCreateNewGarden(
    route.params.isEditing as boolean,
    route.params.gardenId as number,
  );

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
                    textAlign: 'center',
                    flexWrap: 'wrap',
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
            name='device_mac'
            control={control}
            render={({field: {value, onChange}}) => (
              <Input
                name='Mac de dispositivo PHM'
                value={value}
                onChange={onChange}
                nameOnTop
                leftIcon='router'
                iconColor={colors.lightGreen}
                placeholder='123:123:123:123'
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
              <InputPicker
                name='Niveles de agua'
                value={Number(value)}
                onChange={onChange}
                nameOnTop
                leftIcon='opacity'
                iconColor={colors.lightBlue}
                items={levels}
              />
            )}
          />

          <Controller
            name='sun_levels'
            control={control}
            render={({field: {value, onChange}}) => (
              <InputPicker
                name='Niveles de sol'
                value={Number(value)}
                onChange={onChange}
                nameOnTop
                leftIcon='wb-sunny'
                iconColor={colors.lightYellow}
                items={levels}
                containerStyles={{marginTop: 16}}
              />
            )}
          />

          <Button
            size='large'
            buttonStyles={{marginVertical: 20}}
            onPress={onClickNext}
            loading={loading}>
            Siguiente
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};
