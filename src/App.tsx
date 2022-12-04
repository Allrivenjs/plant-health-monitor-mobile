import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ThemeProvider} from './context';
import {AddNewGardenScreen} from './screens/AddNewGardenScreen';
import {HomeScreen} from './screens/HomeScreen';

import {defaultTheme} from './themes/defaultTheme';

export type RootStackParams = {
  HomeScreen: undefined;
  AddNewGardenScreen: undefined;
};

const {Screen, Navigator} = createNativeStackNavigator<RootStackParams>();

export const App = () => {
  return (
    <NavigationContainer>
      <ThemeProvider theme={defaultTheme}>
        <SafeAreaView style={{flex: 1}}>
          <Navigator initialRouteName='HomeScreen'
            screenOptions={{
              headerShadowVisible: false,
            }}
          >
            <Screen name='HomeScreen' component={HomeScreen} />
            <Screen name='AddNewGardenScreen' component={AddNewGardenScreen} />
          </Navigator>
        </SafeAreaView>
      </ThemeProvider>
    </NavigationContainer>
  );
};
