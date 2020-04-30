import React from 'react';
import {StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {strings} from '../locales/i18n';

import {images, colors} from '../theme/';

import Home from '../screens/home/';
import Login from '../screens/login/';
import Settings from '../screens/settings/';

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  icon: {height: 23, width: 23},
});

const BottomTab = ({route}: any) => ({
  tabBarIcon: ({focused}: any) => {
    let iconName;

    if (route.name === strings('menu.home')) {
      iconName = focused ? images.navbar.homeActive : images.navbar.home;
    } else if (route.name === strings('menu.account')) {
      iconName = focused ? images.navbar.accountActive : images.navbar.account;
    }

    // You can return any component that you like here!
    return <FastImage source={iconName} style={styles.icon} />;
  },
});

const tabBarOptions: any = {
  activeTintColor: colors.primary,
  inactiveTintColor: colors.gray5,
  style: {
    height: 55,
    justifyContent: 'center',
  },
  labelStyle: {fontFamily: 'Poppins-Regular'},
};

function MyTabs() {
  return (
    <Tab.Navigator tabBarOptions={tabBarOptions} screenOptions={BottomTab}>
      <Tab.Screen name={strings('menu.home')} component={Home} />
      <Tab.Screen name={strings('menu.account')} component={Settings} />
    </Tab.Navigator>
  );
}

export default MyTabs;
