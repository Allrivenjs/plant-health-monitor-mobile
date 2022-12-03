import {FlatList, StatusBar, StyleSheet, Text, View} from 'react-native';

import {GardenCard} from '../components/GardenCard';
import {Input} from '../components/Input';
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
    <>
      <StatusBar backgroundColor={colors.background} barStyle='dark-content' />

      <View style={styles.screenContainer}>
        <View style={styles.headerContainer}>
          <Typography size='heading1'>Manage your </Typography>
          <View>
            <Typography size='heading1' style={{color: colors.primary}}>
              gardens
            </Typography>
            <View style={styles.headerDecorator} />
          </View>
        </View>

        <View style={styles.searchInputContainer}>
          <Input leftIcon='search' placeholder='Search' />
        </View>

        <FlatList
          horizontal
          style={{marginTop: 32, paddingHorizontal: 20, flexDirection: 'row'}}
          data={mockGardenCardData}
          renderItem={({item}) => (
            <GardenCard name={item.name} source={item.source} />
          )}
          keyExtractor={item => item.id}
          ListFooterComponent={
            <>
              <GardenCard
                name='Create new garden'
                source={require('../../assets/images/plant1.png')}
              />
              <View style={{ width: 40, height: 40 }} />
            </>
          }
        />
      </View>
    </>
  );
};
