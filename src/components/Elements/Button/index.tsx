import React from 'react';
import {Text, StyleSheet, Animated, TouchableOpacity} from 'react-native';

import {colors, sizes} from '../../../theme/index';

type PropsButton = {
  title: String;
  type: 'primary' | 'dark' | 'light';
  onPress?: () => void;
  style?: Object;
};

const Button: React.FC<PropsButton> = ({type, style, title, onPress}) => {
  const [state] = React.useState({
    animated: new Animated.Value(1),
  });

  const inAnimate = (): void => {
    Animated.spring(state.animated, {
      toValue: 0.96,
      useNativeDriver: true,
    }).start();
  };

  const outAnimate = (): void => {
    Animated.spring(state.animated, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  const animatedStyle: Object = {
    transform: [{scale: state.animated}],
  };

  const types: any = [
    type === 'dark' && styles.dark,
    type === 'primary' && styles.primary,
    type === 'light' && styles.light,
  ];

  const textStyles: any = [
    type === 'dark' && styles.textDark,
    type === 'primary' && styles.textPrimary,
    type === 'light' && styles.textLight,
  ];

  return (
    <TouchableOpacity
      activeOpacity={0.95}
      onPressIn={inAnimate}
      onPressOut={outAnimate}
      onPress={onPress}>
      <Animated.View style={[animatedStyle, types, style]}>
        <Text style={textStyles}>{title}</Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  primary: {
    backgroundColor: colors.primary,
    paddingVertical: 15,
    marginHorizontal: 20,
    borderRadius: sizes.radiusMedium,
    alignItems: 'center',
  },
  dark: {
    backgroundColor: colors.dark,
    paddingVertical: 20,
    marginHorizontal: 20,
    borderRadius: 15,
    alignItems: 'center',
  },
  light: {
    backgroundColor: colors.light,
    paddingVertical: 20,
    marginHorizontal: 20,
    borderRadius: 15,
    alignItems: 'center',
  },
  textLight: {
    color: colors.black2,
    fontWeight: 'bold',
  },
  textDark: {
    color: colors.white,
    fontWeight: 'bold',
  },
  textPrimary: {
    color: colors.white,
    fontWeight: 'bold',
  },
});
