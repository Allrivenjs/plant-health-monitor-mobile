import { FC } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { useTheme } from '../hooks';

interface PlantImageProps {
  source: any;
};

export const PlantImage: FC<PlantImageProps> = ({ source }) => {
  const {colors} = useTheme();

  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
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
      alignSelf: 'center',
      bottom: -6,
      width: 50,
      height: 30,
      transform: [{scaleX: 2}],
    },
  });

  return (
    <View style={styles.container}>
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
  );
};
