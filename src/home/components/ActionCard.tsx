import {Image, StyleSheet, View} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {Typography} from '../../components';
import {useTheme} from '../../hooks';

export const ActionCard = () => {
  const {shadow, colors} = useTheme();

  const styles = StyleSheet.create({
    actionCardContainer: {
      marginTop: 10,
      flexDirection: 'row',
      backgroundColor: 'white',
      width: '100%',
      height: 80,
      borderRadius: 10,
      padding: 8,
      ...shadow,
    },
  });
  return (
    <View style={styles.actionCardContainer}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View
          style={{
            backgroundColor: colors.green,
            width: 55,
            height: 55,
            borderRadius: 100,
          }}
        />
        <Image
          source={require('../../../assets/images/plant1.png')}
          style={{transform: [{scale: 0.07}], position: 'absolute'}}
        />
      </View>
      <View
        style={{
          flex: 3,
          justifyContent: 'space-evenly',
          paddingHorizontal: 10,
        }}>
        <Typography style={{fontFamily: 'Lato-Bold'}}>Garden #1</Typography>
        <Typography style={{fontSize: 14}}>
          El jardin ha sido regado{' '}
        </Typography>
        <Typography style={{fontSize: 12, color: colors.gray}}>
          El ultimo regado fue hace 6 horas
        </Typography>
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View
          style={{
            backgroundColor: colors.blue,
            width: 55,
            height: 55,
            borderRadius: 100,
          }}
        />
        <Icon
          name='opacity'
          size={32}
          color='white'
          style={{position: 'absolute'}}
        />
      </View>
    </View>
  );
};
