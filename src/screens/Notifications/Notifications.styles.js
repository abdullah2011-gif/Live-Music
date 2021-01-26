import {StyleSheet} from 'react-native';
import Colors from '../../utills/Colors';
import {width, height, totalSize} from 'react-native-dimension';

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: width(5),
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: height(1),
  },
  black: {
    color: Colors.blackText,
    fontWeight: 'bold',
    fontSize: width(5),
    letterSpacing: width(0.22),
    marginLeft: width(5),
  },
  not: {
    color: Colors.blue,
    fontSize: width(3.5),
    letterSpacing: width(0.22),
    width: '90%',
    lineHeight: height(2.9),
  },
  date: {
    color: Colors.blackText,
    fontSize: width(3.5),
    letterSpacing: width(0.22),
    textAlign: 'right',
    width: '100%',
    marginTop: height(1.5),
  },
  subs: {
    shadowColor: Colors.blue,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 10,
    width: width(90),
    borderRadius: 5,
    backgroundColor: Colors.white,
    alignItems: 'center',
    alignSelf: 'center',
    paddingVertical: height(1),
    paddingHorizontal: width(3),
  },
  subs1: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
});
export default styles;
