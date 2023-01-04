import { FC } from 'react';

import {View} from 'react-native';

import {Typography} from '../../components';

import {useTheme} from '../../hooks';
import { Action, ActionOld } from '../../interfaces/action';

import {ActionCard} from './';

interface Props {
  actions: Action[];
};
export const LastActions: FC<Props> = ({ actions }) => {
  const {colors} = useTheme();
  return (
    <View>
      {
        actions.map((action) => (
          <ActionCard
            key={action.id}
            action={action}
          />
        ))
      }
    </View>
  );
};
