import {FC, useEffect, useState} from 'react';

import {
  FlatList,
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

import {Input, Typography} from '../../components';
import {AppMenu} from '../../components/AppMenu';

import {CreateGardenCard, GardenCard, LastActions} from '../../home/components';
import {useHomeScreen} from '../../home/hooks/useHomeScreen';

import {useTheme} from '../../hooks';

import {HomeStackParams} from '../../navigator';
import {Garden} from '../../interfaces/garden';
import { socket } from '../../lib/socketIOClient';
import { useActionsStore } from '../../store/useActionsStore';

export type HomeScreenNavigationType = NativeStackNavigationProp<
  HomeStackParams,
  'HomeScreen'
>;

interface Props extends NativeStackScreenProps<HomeStackParams, 'HomeScreen'> {}

export const HomeScreen: FC<Props> = ({navigation}) => {
  const {colors} = useTheme();

  const {gardens, actions, loadingActions, fetchActions} = useHomeScreen();

  const [filteredGardens, setFilteredGardens] = useState<Garden[]>(gardens);
  const [searchValue, setSearchValue] = useState('');

  const onClickCreateNewGarden = () => {
    navigation.navigate('AddNewGardenScreen', {isEditing: false});
  };

  const onSearchInputChange = (value: string) => {
    setSearchValue(value);
  };

  useEffect(() => {
    socket.on('new-action', action => {
      fetchActions();
    });
  }, [])

  useEffect(() => {
    setFilteredGardens(gardens);
    if (searchValue.length > 0) {
      setFilteredGardens(
        gardens.filter(({name}) =>
          name.toLowerCase().includes(searchValue.toLowerCase()),
        ),
      );
    }
  }, [searchValue, gardens]);

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
          <Input
            value={searchValue}
            onChange={onSearchInputChange}
            leftIcon='search'
            placeholder='Buscar planta'
          />
        </View>

        <FlatList
          horizontal
          style={{
            paddingHorizontal: 20,
            flexDirection: 'row',
            flexGrow: 0,
          }}
          data={filteredGardens}
          renderItem={({item}) => (
            <GardenCard
              name={item.name}
              gardenId={item.id}
              source={item.image}
            />
          )}
          keyExtractor={item => String(item.id)}
          ListFooterComponent={
            <View style={{flexDirection: 'row'}}>
              <CreateGardenCard onPress={onClickCreateNewGarden} />
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

            {/* @ts-ignore */}
            <TouchableOpacity onPress={() => navigation.navigate('Action')}>
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

          <LastActions actions={actions} loading={loadingActions} limit={5} />
        </View>
      </View>
    </ScrollView>
  );
};
