import React from 'react';
import {View, SafeAreaView, StatusBar} from 'react-native';

import {Text, Button, TextInput} from '../components/Elements';
import styles from './styles';
import {colors} from '../theme';
import Icon from 'react-native-vector-icons/Feather';

const Login: Function = () => {
  return {};
};

export default () => {
  const {} = Login();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
      <View style={styles.SafeAreaView}>
        <Button style={styles.backButton}>
          <Icon name="arrow-left" size={24} />
        </Button>
        <Text type="semibold" size={24} style={styles.headerLogin}>
          Wellcome Login
        </Text>
        <View style={styles.containerForm}>
          <TextInput
            usage="Username"
            placeholder="Username"
            handle={(text: any) => console.log(text)}
            containerStyle={styles.textInput}
          />
          <TextInput
            usage="Password"
            placeholder="Password"
            handle={(text: any) => console.log(text)}
            containerStyle={styles.textInput}
            isPassword
          />
          <Button title="Masuk" type="primary" style={styles.button} />
          <Text
            type="semibold"
            color={colors.primary}
            style={styles.forgotPassword}>
            Lupa Kata Sandi ?
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
