import {FC} from 'react';
import {Image, StyleSheet, View} from 'react-native';

import {Typography} from '../../components';

import {useTheme} from '../../hooks';

interface GardenCardProps {
  name: string;
  source: any;
}

export const GardenCard: FC<GardenCardProps> = ({name, source}) => {
  const {shadow, colors} = useTheme();

  const styles = StyleSheet.create({
    gardenCardContainer: {
      backgroundColor: 'white',
      alignSelf: 'flex-start',
      justifyContent: 'center',
      marginRight: 20,
      borderRadius: 10,
      width: 220,
      height: 275,
      marginVertical: 20,
      ...shadow,
    },
    decorationCircle: {
      backgroundColor: '#D8E7B4',
      borderRadius: 100,
      position: 'absolute',
      alignSelf: 'center',
      width: 133,
      height: 133,
    },
    shadowEllipse: {
      backgroundColor: colors.background,
      borderRadius: 50,
      position: 'absolute',
      bottom: 0,
      alignSelf: 'center',
      width: 50,
      height: 30,
      transform: [{scaleX: 2}],
    },
    cardTitle: {
      alignSelf: 'center',
      textAlign: 'center',
    },
  });

  return (
    <View style={styles.gardenCardContainer}>
      <View style={{flex: 8, justifyContent: 'center', alignItems: 'center'}}>
        <View style={styles.shadowEllipse} />
        <View style={styles.decorationCircle} />
        <Image
          source={source}
          style={{
            height: 210,
            width: 136,
          }}
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
