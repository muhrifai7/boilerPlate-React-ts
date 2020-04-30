import 'react-native-gesture-handler';

import React from 'react';
// import {connect} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MyTabs from './navbar';

import Home from '../screens/home/';
import Login from '../screens/login/';
import Settings from '../screens/settings/';

function Private() {
  const PrivateStack = createStackNavigator();
  return (
    <NavigationContainer>
      <PrivateStack.Navigator initialRouteName="Settings" headerMode="none">
        <PrivateStack.Screen
          options={{
            title: 'Profile',
            ...TransitionPresets.SlideFromRightIOS,
          }}
          name="Home"
          component={Home}
        />
        <PrivateStack.Screen name="Login" component={Login} />
        <PrivateStack.Screen name="Settings" component={Settings} />
        <PrivateStack.Screen name="MyTabs" component={MyTabs} />
      </PrivateStack.Navigator>
    </NavigationContainer>
  );
}

export default Private;
