import React from 'react';
import {View, SafeAreaView} from 'react-native';

import {StartedScreen} from '../components/Elements';
import {images, colors} from '../theme/';
import styles from './styles';

const Home: Function = () => {
  const data: any[] = [
    {
      title: 'Mengatur performa dengan mudah',
      desc: 'Lihat performa anda anjay mabar banget',
      image: images.Onboarding.image3,
      color: colors.primary2,
    },
    {
      title: 'Anjay',
      desc: 'Lihat performa anda anjay mabar banget',
      image: images.Onboarding.image2,
      color: colors.like,
    },
  ];
  return {data};
};

export default () => {
  const {data} = Home();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.SafeAreaView}>
        <StartedScreen data={data} />
      </View>
    </SafeAreaView>
  );
};
