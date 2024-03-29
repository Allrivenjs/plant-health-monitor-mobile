import {FC} from 'react';

import {
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

import Icon from 'react-native-vector-icons/MaterialIcons';

import moment from 'moment';
import 'moment/locale/es.js';

import {
  Button,
  Spinner,
  Typography,
  PlantImage,
  WeekScheduleHistory,
} from '../../components';

import {InfoCard} from '../../home/components';

import {useGardenScreen} from '../../home/hooks';

import {useTheme} from '../../hooks';

import {HomeStackParams} from '../../navigator';

import {ReloadButton} from '../../components/ReloadButton';

// const chartLabels = ['LU', 'MA', 'MI', 'JU', 'VI', 'SA', 'DO'];

export type GardenScreenNavigationType = NativeStackNavigationProp<
  HomeStackParams,
  'GardenScreen'
>;

interface Props
  extends NativeStackScreenProps<HomeStackParams, 'GardenScreen'> {}

export const GardenScreen: FC<Props> = ({navigation, route}) => {
  const {colors} = useTheme();

  const {garden, getGardenInformation, deleteGardenById, deviceData} =
    useGardenScreen(route.params.gardenId);

  let {gardenInformations} = useGardenScreen(route.params.gardenId);

  const onClickInfoSettings = () => {
    navigation.navigate('AddNewGardenScreen', {
      isEditing: true,
      gardenId: garden!.id,
    });
  };

  const onClickScheduleSettings = () => {
    navigation.navigate('AddGardenWaterScheduleScreen', {
      scheduleId: garden!.schedule.id,
      isEditing: true,
    });
  };

  const onClickDeleteGarden = () => {
    deleteGardenById(route.params.gardenId);
    navigation.navigate('HomeScreen');
  };

  const style = StyleSheet.create({
    screenContainer: {
      flex: 1,
      paddingBottom: 56,
    },
    plantContainer: {
      height: 300,
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
      zIndex: -80,
    },
  });

  moment.locale('es');

  const chartLabels = gardenInformations.map(({created_at}) =>
    String(moment(created_at).format('LT')),
  );

  return (
    <>
      {!garden ? (
        <Spinner />
      ) : (
        <ScrollView style={{flex: 1}}>
          <StatusBar backgroundColor={colors.white} barStyle='dark-content' />
          <View style={style.screenContainer}>
            <View style={style.plantContainer}>
              <ReloadButton onTouch={() => getGardenInformation(garden.id)} />
              <PlantImage source={garden!.image} />
              <View
                style={{
                  position: 'absolute',
                  backgroundColor: 'white',
                  borderColor: colors.primary,
                  borderWidth: 3,
                  borderRadius: 10,
                  paddingVertical: 8,
                  paddingHorizontal: 22,
                  bottom: 0,
                  marginBottom: -24,
                  zIndex: 100,
                }}>
                <Typography size='heading2'>{garden!.name}</Typography>
              </View>
            </View>

            <View style={style.formContainer}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 18,
                  marginTop: 48,
                  width: '100%',
                }}>
                <Typography size='heading2'>Información del jardín</Typography>

                <TouchableOpacity onPress={() => onClickInfoSettings()}>
                  <Icon name='settings' size={28} color={colors.gray} />
                </TouchableOpacity>
              </View>

              <InfoCard
                disable={gardenInformations.length > 0}
                content={`${deviceData.humedad}%`}
                icon='opacity'
                name='Humedad'
                color={colors.blue}
                lightColor={colors.lightBlue}
                prefix='%'
                labels={chartLabels}
                datasets={[
                  {
                    data: gardenInformations.map(({humidity}) => humidity),
                  },
                ]}
              />

              <InfoCard
                disable={gardenInformations.length > 0}
                content={`${deviceData.temperatura}°C`}
                icon='device-thermostat'
                name='Temp'
                color={colors.red}
                lightColor={colors.lightRed}
                prefix='°C'
                labels={chartLabels}
                datasets={[
                  {
                    data: gardenInformations.map(
                      ({temperature}) => temperature,
                    ),
                  },
                ]}
              />

              <InfoCard
                disable={gardenInformations.length > 0}
                content={`${deviceData.luz}%`}
                icon='wb-sunny'
                name='Luz'
                color={colors.yellow}
                lightColor={colors.lightYellow}
                prefix='%'
                labels={chartLabels}
                datasets={[
                  {
                    data: gardenInformations.map(({sun_level}) => sun_level),
                  },
                ]}
              />

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 18,
                  marginTop: 32,
                  width: '100%',
                }}>
                <Typography size='heading2'>Historial de regado</Typography>

                <TouchableOpacity onPress={() => onClickScheduleSettings()}>
                  <Icon name='settings' size={28} color={colors.gray} />
                </TouchableOpacity>
              </View>

              <WeekScheduleHistory
                weekSchedule={garden!.schedule.daysOfSchedule}
              />

              <Button
                colorScheme='warning'
                icon='delete'
                buttonStyles={{marginTop: 48}}
                size='medium'
                onPress={onClickDeleteGarden}>
                Eliminar jardín
              </Button>

              <View style={{paddingBottom: 48}} />
            </View>
          </View>
        </ScrollView>
      )}
    </>
  );
};
