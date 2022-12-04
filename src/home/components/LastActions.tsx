import { FC } from 'react';

import {View} from 'react-native';

import {Typography} from '../../components';

import {useTheme} from '../../hooks';
import { Action } from '../../interfaces/action';

import {ActionCard} from './';

interface Props {
  actions: Action[];
};
export const LastActions: FC<Props> = ({ actions }) => {
  const {colors} = useTheme();
  return (
    <View>
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

        <Typography
          size='body'
          style={{
            fontFamily: 'Lato-Regular',
            color: colors.primary,
            textDecorationLine: 'underline',
          }}>
          Mostrar más
        </Typography>
      </View>

      {
        actions.map((action) => (
          <ActionCard
            key={action.garden.id}
            action={action}
          />
        ))
      }

    </View>
  );
};
