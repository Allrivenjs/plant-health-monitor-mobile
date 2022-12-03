import {FlatList, ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {CreateGardenCard} from '../components/CreateGardenCard';

import {GardenCard} from '../components/GardenCard';
import {Input} from '../components/Input';
import {LastActions} from '../components/LastActions';
import {Typography} from '../components/Typography';

import {useTheme} from '../hooks';

const mockGardenCardData = [
  {
    id: '1',
    name: 'Veraneras',
    source: require('../../assets/images/plant1.png'),
  },
  {
    id: '2',
    name: 'Mataratones',
    source: require('../../assets/images/plant1.png'),
  },
  {
    id: '3',
    name: 'Veraneras',
    source: require('../../assets/images/plant1.png'),
  },
  {
    id: '4',
    name: 'Mataratones',
    source: require('../../assets/images/plant1.png'),
  },
];

export const HomeScreen = () => {
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
  <ScrollView>
      <StatusBar backgroundColor={colors.background} barStyle='dark-content' />

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
          <Input leftIcon='search' placeholder='Search' />
        </View>

        <FlatList
          horizontal
          style={{
            paddingHorizontal: 20,
            flexDirection: 'row',
            flexGrow: 0,
          }}
          data={mockGardenCardData}
          renderItem={({item}) => (
            <GardenCard name={item.name} source={item.source} />
          )}
          keyExtractor={item => item.id}
          ListFooterComponent={
            <View style={{flexDirection: 'row'}}>
              <CreateGardenCard />
              <View style={{width: 30}} />
            </View>
          }
        />

        <View style={{paddingHorizontal: 20, marginVertical: 20, }}>
          <LastActions />
        </View>
      </View>
    </ScrollView>
  );
};
