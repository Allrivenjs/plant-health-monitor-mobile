import {SafeAreaView, StatusBar} from 'react-native';
import {ThemeProvider} from './context';
import {HomeScreen} from './screens/HomeScreen';
import { defaultTheme } from './themes/defaultTheme';

export const App = () => {
  return (
    <ThemeProvider
      theme={ defaultTheme }
    >
      <SafeAreaView style={{flex: 1}}>
        <HomeScreen />
      </SafeAreaView>
    </ThemeProvider>
  );
};
