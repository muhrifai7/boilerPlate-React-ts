import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import {Text, Button} from '../../components/Elements';
import {colors} from '../../theme';
import {strings, switchLanguage} from '../../locales/i18n';

const Settings = ({navigation}: any) => {
  const [state, setState] = React.useState({
    lang: false,
    text: 'id',
  });

  const change = () => {
    setState({...state, text: state.lang ? 'id' : 'en'});
    switchLanguage(state.text);
  };
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <Button type="primary" title={strings('menu.home')} onPress={change} />
      <Text type="bold">{strings('menu.home')}</Text>
    </SafeAreaView>
  );
};

export default Settings;
