import {FC} from 'react';

import {Image, StyleSheet, View} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import moment from 'moment';
import 'moment/locale/es.js';

import {Typography} from '../../components';

import {useTheme} from '../../hooks';

import {Action, ActionTypes} from '../../interfaces/action';

interface Props {
  action: Action;
}

export const ActionCard: FC<Props> = ({action}) => {
  const {shadow, colors} = useTheme();

  moment.locale('es');

  const styles = StyleSheet.create({
    actionCardContainer: {
      marginTop: 10,
      flexDirection: 'row',
      backgroundColor: 'white',
      width: '100%',
      height: 80,
      borderRadius: 10,
      padding: 8,
      // ...shadow,
    },
  });

  const actionIcon =
    action.actionType.type === ActionTypes.WATERING
      ? 'opacity'
      : action.actionType.type === ActionTypes.LOW_TEMPERTURE ||
        action.actionType.type === ActionTypes.HIGH_TEMPERTURE
      ? 'device-thermostat'
      : action.actionType.type === ActionTypes.LOW_SUN ||
        action.actionType.type === ActionTypes.HIGH_SUN
      ? 'wb-sunny'
      : 'opacity';

  const actionColor =
    action.actionType.type === ActionTypes.WATERING
      ? colors.lightBlue
      : action.actionType.type === ActionTypes.LOW_TEMPERTURE ||
        action.actionType.type === ActionTypes.LOW_SUN ||
        action.actionType.type === ActionTypes.LOW_WATER ||
        action.actionType.type === ActionTypes.LOW_HUMIDITY
      ? colors.lightBlue
      : action.actionType.type === ActionTypes.HIGH_TEMPERTURE ||
        action.actionType.type === ActionTypes.HIGH_SUN ||
        action.actionType.type === ActionTypes.HIGH_HUMIDITY
      ? colors.lightRed
      : colors.primary;

  return (
    <View style={{...styles.actionCardContainer}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View
          style={{
            backgroundColor: colors.lightGreen,
            width: 55,
            height: 55,
            borderRadius: 100,
          }}
        />
        <Image
          source={{
            uri: action.garden.image,
            width: 700,
            height: 700,
          }}
          style={{
            transform: [{scale: 0.07}],
            position: 'absolute',
            borderRadius: 1000,
          }}
        />
      </View>
      <View
        style={{
          flex: 3,
          justifyContent: 'space-evenly',
          paddingHorizontal: 10,
        }}>
        <Typography style={{fontFamily: 'Lato-Bold'}}>
          {action.garden.name}
        </Typography>
        <Typography style={{fontSize: 14}}>
          {action.actionType.description}
        </Typography>
        <Typography style={{fontSize: 12, color: colors.gray}}>
          Creado {moment(action.created_at).subtract(5, 'hours').calendar()}
        </Typography>
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View
          style={{
            backgroundColor: actionColor,
            width: 55,
            height: 55,
            borderRadius: 100,
          }}
        />
        <Icon
          name={actionIcon}
          size={32}
          color='white'
          style={{position: 'absolute'}}
        />
      </View>
    </View>
  );
};
