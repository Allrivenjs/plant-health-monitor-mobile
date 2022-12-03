import {FC} from 'react';
import {View} from 'react-native';
import {useTheme} from '../hooks';
import { ActionCard } from './ActionCard';
import {Typography} from './Typography';

export const LastActions = () => {
  const {colors} = useTheme();
  return (
    <View>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10, }}>
        <Typography
          size='heading3'
          style={{fontFamily: 'Lato-Regular', color: colors.gray}}>
          Ultimas acciones
        </Typography>

        <Typography
          size='body'
          style={{fontFamily: 'Lato-Regular', color: colors.primary, textDecorationLine: 'underline'}}>
          Mostrar más
        </Typography>

      </View>

      <ActionCard />
      <ActionCard />
      <ActionCard />
      <ActionCard />
      <ActionCard />
      <ActionCard />
      <ActionCard />

    </View>
  );
};
