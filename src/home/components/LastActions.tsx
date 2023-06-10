import React, {FC} from 'react';

import {View, Text} from 'react-native';

import {Action} from '../../interfaces/action';

import {ActionCard} from './';

interface Props {
  actions: Action[];
  loading: boolean;
  limit?: number | undefined;
}
export const LastActions: FC<Props> = ({actions, loading, limit}) => {
  if (loading) {
    return (
      <View>
        <Text>loading actions</Text>
      </View>
    );
  } else {
    return (
      <View>
        {limit
          ? actions
              .slice(0, limit)
              .map((action, index) => (
                <ActionCard key={index} action={action} />
              ))
          : actions.map((action, index) => (
              <ActionCard key={index} action={action} />
            ))}
      </View>
    );
  }
};
