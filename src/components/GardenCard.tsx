import {FC} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {useTheme} from '../hooks';
import {Typography} from './Typography';

interface GardenCardProps {
  name: string;
  source: any;
}

export const GardenCard: FC<GardenCardProps> = ({name, source}) => {
  const {shadow, colors, textStyles} = useTheme();

  const styles = StyleSheet.create({
    gardenCardContainer: {
      backgroundColor: 'white',
      alignSelf: 'flex-start',
      justifyContent: 'center',
      paddingHorizontal: 24,
      paddingVertical: 16,
      marginRight: 10,
      borderRadius: 10,
      width: 200,
      height: 290,
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
      bottom: 48,
      alignSelf: 'center',
      width: 50,
      height: 30,
      transform: [{scaleX: 2}],
    },
    cardTitle: {
      alignSelf: 'center',
      textAlign: 'center'
    },
  });

  return (
    <View style={styles.gardenCardContainer}>
      <View style={{ flex: 8}}>
        <View style={styles.shadowEllipse} />
        <View style={styles.decorationCircle} />
        <Image
          source={source}
          style={{
            height: 220,
            width: 146,
          }}
        />
      </View>
      <View style={{ flex: 2 }}>
        <Typography style={styles.cardTitle} size='heading3'>
          {name}
        </Typography>
      </View>
    </View>
  );
};
