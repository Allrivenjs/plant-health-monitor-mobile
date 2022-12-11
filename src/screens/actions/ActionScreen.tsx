import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {FlatList, ScrollView, StatusBar, StyleSheet, View} from 'react-native';

import {Input, Typography} from '../../components';

import {CreateGardenCard, GardenCard, LastActions} from '../../home/components';

import {useTheme} from '../../hooks';
import {Action} from '../../interfaces/action';
import {Garden} from '../../interfaces/garden';

import { ActionStackParams } from '../../navigator';

const mockGardenCardData: Garden[] = [
  {
    id: '1',
    name: 'Veraneras',
    source: require('../../../assets/images/plant1.png'),
  },
  {
    id: '2',
    name: 'Mataratones',
    source: require('../../../assets/images/plant1.png'),
  },
  {
    id: '3',
    name: 'Veraneras',
    source: require('../../../assets/images/plant1.png'),
  },
  {
    id: '4',
    name: 'Mataratones',
    source: require('../../../assets/images/plant1.png'),
  },
];

const mockActionData: Action[] = [
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

export type ActionScreenNavigationType = NativeStackNavigationProp<
  ActionStackParams,
  'ActionScreen'
>;

export const ActionScreen = () => {
  const {colors} = useTheme();

  const styles = StyleSheet.create({
    screenContainer: {
      flex: 1,
      backgroundColor: colors.background,
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

      <View style={styles.screenContainer}>
        <View style={styles.headerContainer}>
          <Typography size='heading1'>Acciones en tus </Typography>
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

        <View style={{paddingHorizontal: 20, marginVertical: 20}}>
          <LastActions actions={mockActionData} />
        </View>
      </View>
    </ScrollView>
  );
};
