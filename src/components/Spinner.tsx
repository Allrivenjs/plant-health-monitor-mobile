import { ActivityIndicator, View } from 'react-native';
import { useTheme } from '../hooks';

export const Spinner = () => {
  const {colors} = useTheme();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
      }}
    >
      <ActivityIndicator color={colors.primary} size='large' />
    </View>
  )
};
