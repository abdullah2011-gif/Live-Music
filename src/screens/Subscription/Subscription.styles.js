import {StyleSheet} from 'react-native';
import Colors from '../../utills/Colors';
import {width, height, totalSize} from 'react-native-dimension';

const styles = StyleSheet.create({
  userImg: {
    width: width(12),
    height: width(12),
    borderRadius: width(6),
    marginTop: height(1),
  },
  black: {
    color: Colors.blackText,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: width(5),
    letterSpacing: width(0.22),
  },
  black1: {
    color: Colors.blackText,
    fontWeight: 'bold',
    fontSize: width(5),
    letterSpacing: width(0.22),
    marginTop: height(2),
    marginLeft: width(5),
  },
  black2: {
    color: Colors.blackText,
    fontWeight: 'bold',
    fontSize: width(3),
    letterSpacing: width(0.22),
    marginTop: height(2),
    marginLeft: width(5),
  },
  blue: {
    color: Colors.blue,
    fontSize: width(3),
    letterSpacing: width(0.22),
    marginTop: height(2),
    marginHorizontal: width(5),
    lineHeight: height(2.8),
    width: width(79),
  },
  blue1: {
    color: Colors.blue,
    fontSize: width(2.8),
    letterSpacing: width(0.3),
    fontWeight: 'bold',
  },
  terms: {
    color: Colors.blackText,
    fontSize: width(3),
    letterSpacing: width(0.22),
    marginTop: height(2),
    marginLeft: width(2),
  },
  subsName: {
    color: Colors.blue,
    fontSize: width(4),
    letterSpacing: width(0.22),
    fontWeight: 'bold',
  },
  header: {
    paddingHorizontal: width(5),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subs: {
    shadowColor: Colors.blue,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 10,
    width: width(90),
    borderRadius: 15,
    backgroundColor: Colors.white,
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    paddingVertical: height(1),
    paddingHorizontal: width(5),
    flexDirection: 'row',
  },
  elips: {
    width: width(20),
    height: height(8),
    justifyContent: 'space-between',
  },
  buyNow: {
    paddingHorizontal: width(4),
    paddingVertical: height(0.7),
    borderRadius: 25,
    backgroundColor: 'rgba(76,150,215,0.2)',
    alignSelf: 'flex-end',
  },
  termsCont: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: width(5),
  },
});
export default styles;
