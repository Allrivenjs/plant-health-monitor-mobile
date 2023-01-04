import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {Typography} from '../../components';

import {PlantImage} from '../../components/PlantImage';
import {WeekScheduleHistory} from '../../components/WeekScheduleHistory';
import {InfoCard} from '../../home/components/InfoCard';

import {useTheme} from '../../hooks';
import {IDayOfWeekWithWateringCuantity} from '../../interfaces/schedule';
import {HomeStackParams} from '../../navigator';
import {HomeScreenNavigationType} from './HomeScreen';

const chartLabels = ['LU', 'MA', 'MI', 'JU', 'VI', 'SA', 'DO'];

const defaultWeekScheduleValue: IDayOfWeekWithWateringCuantity[] = [
  {
    id: 1,
    name: 'LU',
    day: 'Lunes',
    active: false,
    cuantity: 0,
  },
  {
    id: 2,
    name: 'MA',
    day: 'Martes',
    active: true,
    cuantity: 70,
  },
  {
    id: 3,
    name: 'MI',
    day: 'Miercoles',
    active: false,
    cuantity: 0,
  },
  {
    id: 4,
    name: 'JU',
    day: 'Jueves',
    active: false,
    cuantity: 0,
  },
  {
    id: 5,
    name: 'VI',
    day: 'Viernes',
    active: true,
    cuantity: 50,
  },
  {
    id: 6,
    name: 'SA',
    day: 'Sabado',
    active: false,
    cuantity: 0,
  },
  {
    id: 7,
    name: 'DO',
    day: 'Domingo',
    active: false,
    cuantity: 0,
  },
];

export type GardenScreenNavigationType = NativeStackNavigationProp<
  HomeStackParams,
  'GardenScreen'
>;

export const GardenScreen = () => {
  const {colors} = useTheme();

  const {navigate} = useNavigation<HomeScreenNavigationType>();

  const onClickInfoSettings = () => {
    navigate('AddNewGardenScreen');
  };

  const onClickScheduleSettings = () => {
    navigate('AddGardenWaterScheduleScreen', {gardenId: 11});
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

  return (
    <ScrollView style={{flex: 1}}>
      <StatusBar backgroundColor={colors.white} barStyle='dark-content' />
      <View style={style.screenContainer}>
        <View style={style.plantContainer}>
          <PlantImage source={'https://res.cloudinary.com/dyuhuguiq/image/upload/v1672598755/plant1_iovkrr.png'} />
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
            <Typography size='heading2'>Garden #1</Typography>
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
            content='22%'
            icon='opacity'
            name='Humedad'
            color={colors.blue}
            lightColor={colors.lightBlue}
            prefix='%'
            labels={chartLabels}
            datasets={[
              {
                data: [
                  Math.floor(Math.random() * 100),
                  Math.floor(Math.random() * 100),
                  Math.floor(Math.random() * 100),
                  Math.floor(Math.random() * 100),
                  Math.floor(Math.random() * 100),
                  Math.floor(Math.random() * 100),
                  Math.floor(Math.random() * 100),
                ],
              },
            ]}
          />

          <InfoCard
            content='22°C'
            icon='device-thermostat'
            name='Temp'
            color={colors.red}
            lightColor={colors.lightRed}
            prefix='°C'
            labels={chartLabels}
            datasets={[
              {
                data: [
                  Math.floor(Math.random() * 100),
                  Math.floor(Math.random() * 100),
                  Math.floor(Math.random() * 100),
                  Math.floor(Math.random() * 100),
                  Math.floor(Math.random() * 100),
                  Math.floor(Math.random() * 100),
                  Math.floor(Math.random() * 100),
                ],
              },
            ]}
          />

          <InfoCard
            content='22%'
            icon='wb-sunny'
            name='Luz'
            color={colors.yellow}
            lightColor={colors.lightYellow}
            prefix='%'
            labels={chartLabels}
            datasets={[
              {
                data: [
                  Math.floor(Math.random() * 100),
                  Math.floor(Math.random() * 100),
                  Math.floor(Math.random() * 100),
                  Math.floor(Math.random() * 100),
                  Math.floor(Math.random() * 100),
                  Math.floor(Math.random() * 100),
                  Math.floor(Math.random() * 100),
                ],
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

          <WeekScheduleHistory weekSchedule={defaultWeekScheduleValue} />

          <View style={{paddingBottom: 48}} />
        </View>
      </View>
    </ScrollView>
  );
};
