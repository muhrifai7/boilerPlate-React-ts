import React from 'react';
import {TextInput, Animated, View} from 'react-native';
import {colors} from '../../../theme';
import Icon from 'react-native-vector-icons/Feather';
import {Button} from '..';

type PropsText = {
  placeholder?: string;
  style?: Object;
  containerStyle?: Object;
  handle: Function;
  isPassword?: boolean;
};

const CustomTextInput: React.FC<PropsText> = ({
  style,
  containerStyle,
  placeholder,
  handle,
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
    state.value !== '' ? animateText(15) : animateText(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.value]);

  const animateText = (toValue: number): void => {
    Animated.timing(state.animated, {
      toValue,
      duration: 200,
    }).start();
  };

  const hidePassword = (): void => {
    setState({...state, hide: !state.hide});
  };

  const animate = {
      fontSize: state.animated.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
      }),
      fontFamily: 'Poppins-SemiBold',
    },
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
      <Animated.Text style={animate}>{`${placeholder}`}</Animated.Text>
      {/* eslint-disable-next-line react-native/no-inline-styles */}
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TextInput
          placeholder={`${placeholder}`}
          value={state.value}
          onChangeText={(value: any) => handleType(value)}
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
