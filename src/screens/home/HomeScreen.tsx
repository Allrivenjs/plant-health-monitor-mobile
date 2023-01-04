import { useNavigation } from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {FlatList, ScrollView, StatusBar, StyleSheet, TouchableOpacity, View} from 'react-native';

import {Input, Typography} from '../../components';
import { AppMenu } from '../../components/AppMenu';

import {CreateGardenCard, GardenCard, LastActions} from '../../home/components';
import { useHomeScreen } from '../../home/hooks/useHomeScreen';

import {useTheme} from '../../hooks';
import {ActionOld} from '../../interfaces/action';
import {Garden} from '../../interfaces/garden';
import {HomeStackParams} from '../../navigator';

const mockGardenCardData: Garden[] = [
  {
    id: '1',
    name: 'Veraneras',
    image: 'https://res.cloudinary.com/dyuhuguiq/image/upload/v1672598755/plant1_iovkrr.png',
  },
  {
    id: '2',
    name: 'Mataratones',
    image: 'https://res.cloudinary.com/dyuhuguiq/image/upload/v1672598755/plant1_iovkrr.png',
  },
  {
    id: '3',
    name: 'Veraneras',
    image: 'https://res.cloudinary.com/dyuhuguiq/image/upload/v1672598755/plant1_iovkrr.png',
  },
  {
    id: '4',
    name: 'Mataratones',
    image: 'https://res.cloudinary.com/dyuhuguiq/image/upload/v1672598755/plant1_iovkrr.png',
  },
];

const mockActionData: ActionOld[] = [
  {
    type: 'watering',
    garden: mockGardenCardData[0],
    description: 'El jardín ha sido regado',
    lastTime: 'El ultimo regado fue hace 6 horas',
  },
  {
    type: 'water-refill',
    garden: mockGardenCardData[1],
    description: 'El jardín tiene bajos niveles de agua',
    lastTime: 'La ultima ves que se relleno el agua fue hace 2 días',
  },
];

export type HomeScreenNavigationType = NativeStackNavigationProp<
  HomeStackParams,
  'HomeScreen'
>;

export const HomeScreen = () => {
  const {colors} = useTheme();

  const { navigate } = useNavigation<HomeScreenNavigationType>();

  const { gardens, actions } = useHomeScreen();

  const styles = StyleSheet.create({
    screenContainer: {
      flex: 1,
      paddingBottom: 56,
    },
    headerContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginVertical: 32,
    },
    headerDecorator: {
      width: '100%',
      backgroundColor: colors.primary,
      height: 3,
      marginTop: 2,
    },
    searchInputContainer: {
      width: '100%',
      justifyContent: 'center',
      flexDirection: 'row',
    },
  });


  return (
    <ScrollView style={{flex: 1}}>
      <StatusBar backgroundColor={colors.background} barStyle='dark-content' />

      <AppMenu />

      <View style={styles.screenContainer}>
        <View style={styles.headerContainer}>
          <Typography size='heading1'>Administra tus </Typography>
          <View>
            <Typography size='heading1' style={{color: colors.primary}}>
              jardines
            </Typography>
            <View style={styles.headerDecorator} />
          </View>
        </View>

        <View style={styles.searchInputContainer}>
          <Input leftIcon='search' placeholder='Buscar planta' />
        </View>

        <FlatList
          horizontal
          style={{
            paddingHorizontal: 20,
            flexDirection: 'row',
            flexGrow: 0,
          }}
          data={gardens}
          renderItem={({item}) => (
            <GardenCard name={item.name} source={item.image} />
          )}
          keyExtractor={item => String(item.id)}
          ListFooterComponent={
            <View style={{flexDirection: 'row'}}>
              <CreateGardenCard />
              <View style={{width: 30}} />
            </View>
          }
        />

        <View style={{paddingHorizontal: 20, marginVertical: 20}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 10,
            }}>
            <Typography
              size='heading3'
              style={{fontFamily: 'Lato-Regular', color: colors.gray}}>
              Ultimas acciones
            </Typography>

            <TouchableOpacity
              onPress={() => navigate('ActionScreen') }
            >
              <Typography
                size='body'
                style={{
                  fontFamily: 'Lato-Regular',
                  color: colors.primary,
                  textDecorationLine: 'underline',
                }}>
                Mostrar más
              </Typography>
            </TouchableOpacity>
          </View>

          <LastActions actions={actions} />
        </View>
      </View>
    </ScrollView>
  );
};
