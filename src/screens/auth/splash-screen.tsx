import React from 'react';
import {View, SafeAreaView, StatusBar, Image} from 'react-native';

import {Text} from '../../components/Elements';
import styles from './styles';
import {images} from '../../theme/';

const Home: Function = () => {
  return {};
};

export default () => {
  const {} = Home();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={styles.SafeAreaView}>
        <Image source={images.Logo} style={styles.image} />
      </View>
      <Text type="bold" color="white" style={styles.textVersion}>
        v.1.0.0
      </Text>
    </SafeAreaView>
  );
};
