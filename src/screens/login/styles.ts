import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../theme';

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  SafeAreaView: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 25,
  },
  headerLogin: {
    letterSpacing: 2,
  },
  backButton: {
    height: 40,
    width: 40,
    marginTop: 20,
  },
  containerForm: {
    marginTop: height / 30,
  },
  textInput: {
    marginVertical: 10,
  },
  button: {
    marginVertical: 10,
  },
  forgotPassword: {
    alignSelf: 'center',
    marginTop: 10,
  },
});

export default styles;
