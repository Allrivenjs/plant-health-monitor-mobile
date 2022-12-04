import {FC} from 'react';
import {Image, StyleSheet, View} from 'react-native';

import {Typography} from '../../components';
import { PlantImage } from '../../components/PlantImage';

import {useTheme} from '../../hooks';

interface GardenCardProps {
  name: string;
  source: any;
}

export const GardenCard: FC<GardenCardProps> = ({name, source}) => {
  const {shadow, colors} = useTheme();

  const styles = StyleSheet.create({
    gardenCardContainer: {
      backgroundColor: colors.white,
      alignSelf: 'flex-start',
      justifyContent: 'center',
      marginRight: 20,
      borderRadius: 10,
      width: 220,
      height: 275,
      marginVertical: 20,
    },
    cardTitle: {
      alignSelf: 'center',
      textAlign: 'center',
    },
  });

  return (
    <View style={styles.gardenCardContainer}>

      <View style={{flex: 8, justifyContent: 'center', alignItems: 'center'}}>
        <PlantImage
          source={source}
        />
      </View>
      <View
        style={{
          flex: 2,
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 10,
        }}>
        <Typography style={styles.cardTitle} size='heading3'>
          {name}
        </Typography>
      </View>
    </View>
  );
};
