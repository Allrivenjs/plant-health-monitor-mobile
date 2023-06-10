import { useEffect } from 'react';

import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {ThemeProvider} from './context';

import {defaultTheme} from './themes/defaultTheme';
import {AuthStackNavigator, HomeStackNavigator} from './navigator';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ActionStackNavigator} from './navigator/ActionStackNavigatior';

import {DefaultTheme} from '@react-navigation/native';
import { useAuth } from './hooks/useAuth';
import { Spinner } from './components/Spinner';


const stackTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: defaultTheme.colors.background,
  },
};

export type TabStackParams = {
  Home: undefined;
  Action: undefined;
};

const Tab = createBottomTabNavigator<TabStackParams>();

export const App = () => {
  const {status, verifyUserAuthentication} = useAuth();


  useEffect(() => {
    verifyUserAuthentication();
  }, []);

  return (
    <NavigationContainer theme={stackTheme}>
      <ThemeProvider theme={defaultTheme}>
        <SafeAreaView style={{flex: 1}}>
          {status === 'logged' ? (
            <Tab.Navigator
              screenOptions={({route}) => ({
                tabBarIcon: ({focused, color}) => {
                  const iconName =
                    route.name === 'Home'
                      ? 'home'
                      : route.name === 'Action'
                      ? 'notifications'
                      : '';

                  return <Icon name={iconName} size={28} color={color} />;
                },
                headerShown: false,
                tabBarActiveTintColor: '#66B992',
                tabBarShowLabel: false,
                tabBarStyle: {
                  position: 'absolute',
                  left: 10,
                  right: 10,
                  bottom: 10,
                  backgroundColor: '#fff',
                  borderRadius: 15,
                  elevation: 1,
                },
              })}
            >
              <Tab.Screen name='Home' component={HomeStackNavigator} />

              <Tab.Screen name='Action' component={ActionStackNavigator} />

            </Tab.Navigator>
          ) : status === 'not-logged' ? (
            <AuthStackNavigator />
          ) : (
            <Spinner />
          )}
        </SafeAreaView>
      </ThemeProvider>
    </NavigationContainer>
  );
};
