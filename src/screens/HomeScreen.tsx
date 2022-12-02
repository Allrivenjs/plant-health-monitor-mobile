import {StatusBar, StyleSheet, Text, View} from 'react-native';
import { Input } from '../components/Input';
import {Typography} from '../components/Typography';


import {useTheme} from '../hooks';

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
      <StatusBar 
        backgroundColor={colors.background}
        barStyle='dark-content'
      />

      <View style={styles.screenContainer}>
        <View style={styles.headerContainer}>
          <Typography size='heading1'>Manage your </Typography>
          <View>
            <Typography size='heading1' style={{color: colors.primary}}>
              gardens
            </Typography>
            <View
              style={styles.headerDecorator}
            />
          </View>
        </View>

        <View
          style={ styles.searchInputContainer }
        >
          <Input
            leftIcon='search'
            placeholder='Search'
          />
        </View>

        

      </View>
    </>
  );
};
