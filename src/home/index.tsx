import React from 'react';
import {View, SafeAreaView, StatusBar} from 'react-native';

import {StartedScreen} from '../components/Elements';
import {colors} from '../theme/';
import styles from './styles';
import {startedScreen} from '../utils';

const Home: Function = () => {
  return {};
};

export default () => {
  const {} = Home();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <View style={styles.SafeAreaView}>
        <StartedScreen data={startedScreen} />
      </View>
    </SafeAreaView>
  );
};
