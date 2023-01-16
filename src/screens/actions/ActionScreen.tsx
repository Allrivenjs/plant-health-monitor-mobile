import {ScrollView, StatusBar, StyleSheet, View} from 'react-native';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {useTheme} from '../../hooks';

import {useActionScreen} from '../../action/hooks';

import {Input, Spinner, Typography} from '../../components';

import {LastActions} from '../../home/components';

import {ActionStackParams} from '../../navigator';

export type ActionScreenNavigationType = NativeStackNavigationProp<
  ActionStackParams,
  'ActionScreen'
>;

export const ActionScreen = () => {
  const {colors} = useTheme();

  const {loading, actions} = useActionScreen();

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
      {loading ? (
        <Spinner />
      ) : (
        <ScrollView style={{flex: 1}}>
          <StatusBar
            backgroundColor={colors.background}
            barStyle='dark-content'
          />

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
              <Input leftIcon='search' placeholder='Buscar acciones' />
            </View>

            <View style={{paddingHorizontal: 20, marginVertical: 20}}>
              <LastActions actions={actions} loading={loading} />
            </View>
          </View>
        </ScrollView>
      )}
    </>
  );
};
