import { useContext } from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '../hooks';

export const HomeScreen = () => {
  const { colors } = useTheme();

  return (
    <View style={{ backgroundColor: colors.background, flex: 1, }}>
      <Text style={{ fontFamily: 'Lato-Bold' }}>Manage your plants</Text>
    </View>
  )
}
