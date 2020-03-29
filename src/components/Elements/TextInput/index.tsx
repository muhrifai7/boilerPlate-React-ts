import React from 'react';
import {TextInput, Animated, View} from 'react-native';
import {colors} from '../../../theme';
import Icon from 'react-native-vector-icons/Feather';
import {Button} from '..';

type PropsText = {
  placeholder?: string;
  style?: Object;
  containerStyle: Object;
  handle: Function;
  usage?: string;
  isPassword?: boolean;
};

const CustomTextInput: React.FC<PropsText> = ({
  style,
  containerStyle,
  placeholder,
  handle,
  usage,
  isPassword,
}) => {
  const [state, setState] = React.useState({
    value: '',
    animated: new Animated.Value(0),
    hide: true,
  });

  const handleType = async (value: string) => {
    await setState({
      ...state,
      value,
    });
    await handle(value);
  };

  React.useEffect(() => {
    state.value !== '' ? onFocus() : onBlur();
  });

  const onFocus = (): void => {
    Animated.timing(state.animated, {
      toValue: 15,
      duration: 200,
    }).start();
  };

  const onBlur = (): void => {
    Animated.timing(state.animated, {toValue: 0, duration: 200}).start();
  };

  const hidePassword = (): void => {
    setState({...state, hide: !state.hide});
  };

  const animate = {fontSize: state.animated, fontFamily: 'Poppins-SemiBold'},
    styleTextInput = {
      width: isPassword ? '90%' : '100%',
      borderRadius: 15,
      padding: 0,
      fontFamily: 'Poppins-Light',
      marginVertical: 10,
    },
    line = {
      height: state.value !== '' ? 2 : 1,
      backgroundColor: state.value !== '' ? colors.success : colors.gray2,
      width: '100%',
    },
    container = [containerStyle];

  return (
    <View style={container}>
      <Animated.Text style={animate}>{`${usage}`}</Animated.Text>
      {/* eslint-disable-next-line react-native/no-inline-styles */}
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TextInput
          placeholder={`${placeholder}`}
          value={state.value}
          onChangeText={value => handleType(value)}
          style={[styleTextInput, style]}
          secureTextEntry={isPassword ? state.hide : false}
        />
        {isPassword && (
          <Button onPress={hidePassword}>
            <Icon name={state.hide ? 'eye' : 'eye-off'} size={24} />
          </Button>
        )}
      </View>
      <View style={line} />
    </View>
  );
};

CustomTextInput.defaultProps = {
  placeholder: 'Input here',
};

export default CustomTextInput;
