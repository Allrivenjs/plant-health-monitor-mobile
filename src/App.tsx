import {SafeAreaView, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {ThemeProvider} from './context';

import {defaultTheme} from './themes/defaultTheme';
import {HomeStackNavigator} from './navigator';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ActionStackNavigator} from './navigator/ActionStackNavigatior';

import { DefaultTheme } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const stackTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: defaultTheme.colors.background,
  },
};

export const App = () => {
  return (
    <NavigationContainer
      theme={stackTheme}
    >
      <ThemeProvider theme={defaultTheme}>
        <SafeAreaView style={{flex: 1}}>
          <Tab.Navigator
            screenOptions={({route}) => ({
              tabBarIcon: ({focused, color}) => {
                console.log({name: route.name, focused,})
                const iconName = route.name === 'Home' ? 'home'
                  : route.name === 'Action' ? 'notifications' : '';

                return <Icon name={iconName} size={28} color={color} />;
              },
              headerShown: false,
              tabBarActiveTintColor:'#66B992',
              tabBarShowLabel: false,
              tabBarStyle: {
                position: 'absolute',
                left: 10,
                right: 10,
                bottom: 10,
                backgroundColor: '#fff',
                borderRadius: 15,
                elevation: 1,
              }
            })}
          >
            <Tab.Screen name='Home' component={HomeStackNavigator} />
            <Tab.Screen name='Action' component={ActionStackNavigator} />
          </Tab.Navigator>
        </SafeAreaView>
      </ThemeProvider>
    </NavigationContainer>
  );
};
