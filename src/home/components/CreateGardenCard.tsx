import { useNavigation } from '@react-navigation/native';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Typography } from '../../components';

import { useTheme } from '../../hooks';


export const CreateGardenCard = () => {
  const {navigate} = useNavigation();
  const {colors } = useTheme();

  const styles = StyleSheet.create({
    gardenCardContainer: {
      alignSelf: 'flex-start',
      justifyContent: 'center',
      marginRight: 20,
      marginVertical: 20,
      width: 220,
      height: 275,
    },
    cardTitle: {
      alignSelf: 'center',
      textAlign: 'center',
      color: colors.gray,
      fontFamily: 'Lato-Regular'
    },
  });

  return (
    <TouchableOpacity
      onPress={() => navigate('AddNewGardenScreen')}
    >
      <View style={styles.gardenCardContainer}>
        <View style={{flex: 8, justifyContent: 'center', alignItems: 'center'}}>

          <Image
            source={require('../../../assets/images/plantsiloutte.png')}
            style={{
              height: 210,
              width: 136,
            }}
          />

          <View style={{ position:'absolute' }}>
            <Icon name='add' size={100} color='white' />
          </View>

        </View>
        <View
          style={{
            flex: 2,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 10,
          }}>
          <Typography style={styles.cardTitle} size='heading1'>
            Añadir un nuevo jardin
          </Typography>
        </View>
      </View>
    </TouchableOpacity>
  );
};
