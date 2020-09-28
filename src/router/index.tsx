import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  HomeScreen,
  Profiles,
  SplashScreen,
  OnBoarding,
  Register,
  Login,
} from '../pages';
import MyTabBar from '../components/BottomTabNavigator';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = (): any => {
  return (
    <Tab.Navigator
      tabBar={props => <MyTabBar {...props} />}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Discover" component={HomeScreen} />
      <Tab.Screen name="Profiles" component={Profiles} />
    </Tab.Navigator>
  );
};

const Routes = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OnBoarding"
        component={OnBoarding}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Routes;

const styes = StyleSheet.create({});
