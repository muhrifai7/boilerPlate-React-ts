import {StyleSheet, Dimensions} from 'react-native';

import {colors} from '../../../theme';

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerData: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 140,
  },
  image: {
    height: width / 1.3,
    width: width / 1.3,
    resizeMode: 'contain',
    alignSelf: 'flex-end',
  },
  buttonNext: {
    height: 60,
    width: 60,
    borderRadius: 35,
    backgroundColor: colors.white,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerText: {
    width: '60%',
    padding: 20,
    paddingVertical: 70,
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 30,
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
  },
  textData: {
    alignSelf: 'flex-start',
    textAlign: 'left',
    width: '95%',
    paddingLeft: 20,
  },
  textSubData: {
    fontSize: 16,
    paddingLeft: 20,
  },
});

export default styles;
