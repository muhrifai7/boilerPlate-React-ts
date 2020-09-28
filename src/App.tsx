import React from 'react';
import firebase from 'react-native-firebase';
import AsyncStorage from '@react-native-community/async-storage';
import {Provider} from 'react-redux';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './router';

import store from './redux/ducks/store';

import Notification from './service/Notification';

const App: React.FC = () => {
  const getToken = async () => {
    let fcmToken = await AsyncStorage.getItem('fcmToken');
    console.log('before fcmToken: ', fcmToken);
    if (!fcmToken) {
      fcmToken = await firebase.messaging().getToken();
      if (fcmToken) {
        console.log('after fcmToken: ', fcmToken);
        await AsyncStorage.setItem('fcmToken', fcmToken);
      }
    }
  };

  const requestPermission = async () => {
    firebase
      .messaging()
      .requestPermission()
      .then(() => {
        getToken();
      })
      .catch(() => {
        console.log('permission rejected');
      });
  };

  const checkPermission = () => {
    firebase
      .messaging()
      .hasPermission()
      .then(enabled => {
        if (enabled) {
          console.log('Permission granted');
          getToken();
        } else {
          console.log('Request Permission');
          requestPermission();
        }
      });
  };

  React.useEffect(() => {
    checkPermission();
  });
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Routes />
        <Notification />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
