import React from 'react';
import {Text} from 'react-native';
import {RFValue as fs} from 'react-native-responsive-fontsize';

import styles from './styles';

type PropsText = {
  children: any;
  color?: string;
  style?: Object;
  size?: number;
  type: 'thin' | 'regular' | 'semibold' | 'bold';
};

const Typography: React.FC<PropsText> = ({
  type,
  style,
  children,
  color,
  size,
}) => {
  const TextStyles: any[] = [
    type === 'thin' && styles.thin,
    type === 'regular' && styles.regular,
    type === 'semibold' && styles.semibold,
    type === 'bold' && styles.bold,
  ];
  const colors: object = {
    color,
  };
  const sizeText: object = {
    fontSize: size && fs(size),
  };
  return (
    <Text style={[styles.default, TextStyles, colors, sizeText, style]}>
      {children}
    </Text>
  );
};

export default Typography;
