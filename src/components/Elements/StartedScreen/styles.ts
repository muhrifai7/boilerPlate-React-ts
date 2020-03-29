import {StyleSheet, Dimensions} from 'react-native';

import {colors} from '../../../theme';

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerData: {
    flex: 1,
    paddingVertical: 140,
    backgroundColor: colors.gray1,
  },
  image: {
    height: width / 1.3,
    width: width / 1.3,
    resizeMode: 'contain',
    alignSelf: 'center',
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
    padding: 30,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
    height: '30%',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  dot: {
    width: 13,
    height: 13,
    borderRadius: 7,
    backgroundColor: colors.gray5,
  },
  textData: {
    alignSelf: 'flex-start',
    textAlign: 'center',
    width: '100%',
  },
  containerStyle: {
    margin: 0,
    padding: 0,
    bottom: 0,
    position: 'absolute',
    justifyContent: 'center',
  },
  textSubData: {
    fontSize: 16,
    paddingLeft: 20,
  },
});

export default styles;
