import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from './context';

import {defaultTheme} from './themes/defaultTheme';
import { HomeStackNavigator } from './navigator';

export const App = () => {
  return (
    <NavigationContainer>
      <ThemeProvider theme={defaultTheme}>
        <SafeAreaView style={{flex: 1}}>
          <HomeStackNavigator />
        </SafeAreaView>
      </ThemeProvider>
    </NavigationContainer>
  );
};
