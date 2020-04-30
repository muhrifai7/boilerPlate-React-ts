import React from 'react';
import {View, SafeAreaView, StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useFocusEffect} from '@react-navigation/native';

import {Text, Button, TextInput} from '../../components/Elements';
import styles from './styles';
import {colors} from '../../theme';
import Icon from 'react-native-vector-icons/Feather';

const Login: Function = () => {
  const navigation = useNavigation();

  const navigateLogin = (): void => {
    navigation.navigate('Home');
  };

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('dark-content');
    }, []),
  );

  return {navigateLogin};
};

export default () => {
  const {navigateLogin} = Login();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <View style={styles.SafeAreaView}>
        <Button style={styles.backButton}>
          <Icon name="arrow-left" size={24} />
        </Button>
        <Text type="semibold" size={24} style={styles.headerLogin}>
          Wellcome Login
        </Text>
        <View style={styles.containerForm}>
          <TextInput
            placeholder="Username"
            handle={(text: any) => console.log(text)}
            containerStyle={styles.textInput}
          />
          <TextInput
            placeholder="Password"
            handle={(text: any) => console.log(text)}
            containerStyle={styles.textInput}
            isPassword
          />
          <Button
            title="Masuk"
            type="primary"
            onPress={navigateLogin}
            style={styles.button}
          />
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
