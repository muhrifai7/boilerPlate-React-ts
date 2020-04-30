import {StyleSheet} from 'react-native';
import {colors} from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  SafeAreaView: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    height: '25%',
    width: '100%',
    backgroundColor: colors.primary,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    paddingHorizontal: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },
  boxLong: {
    height: '15%',
    width: '90%',
    alignSelf: 'center',
    backgroundColor: colors.white,
    elevation: 3,
    marginTop: -35,
    borderRadius: 15,
    padding: 15,
    paddingHorizontal: 25,
  },
  headerData: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 25,
  },
  textSubData: {
    marginTop: -10,
  },
  dataMenu: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -5,
  },
  textProfile: {
    marginLeft: 10,
  },
  profile: {
    resizeMode: 'contain',
  },
  containerData: {
    flex: 1,
  },
  textData: {
    marginTop: 25,
    marginVertical: 20,
    paddingHorizontal: 25,
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
  },
  boxIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
  },
  menuIcon: {
    width: 60,
    height: 60,
  },
  titleMenu: {
    marginTop: 7,
    color: colors.gray5,
    fontSize: 13,
  },
  line: {
    width: '100%',
    height: 8,
    backgroundColor: colors.gray1,
    marginVertical: 30,
  },
});

export default styles;
