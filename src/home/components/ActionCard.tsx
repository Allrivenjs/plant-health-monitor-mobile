import { FC } from 'react';

import {Image, StyleSheet, View} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {Typography} from '../../components';

import {useTheme} from '../../hooks';

import { Action } from '../../interfaces/action';

interface Props {
  action: Action;
};

export const ActionCard: FC<Props> = ({ action }) => {
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
        <Typography style={{fontFamily: 'Lato-Bold'}}>{action.garden.name}</Typography>
        <Typography style={{fontSize: 14}}>
          {action.description}{' '}
        </Typography>
        <Typography style={{fontSize: 12, color: colors.gray}}>
          {action.lastTime}
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
