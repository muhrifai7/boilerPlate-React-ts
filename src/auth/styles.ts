import {StyleSheet} from 'react-native';
import {colors} from '../theme/';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  SafeAreaView: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textVersion: {
    alignSelf: 'center',
    paddingBottom: 20,
  },
  image: {width: 200, height: 200, resizeMode: 'contain'},
});

export default styles;
