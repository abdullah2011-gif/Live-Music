import {StyleSheet} from 'react-native';
import Colors from '../../utills/Colors';
import {width, height, totalSize} from 'react-native-dimension';

const styles = StyleSheet.create({
  image: {
    alignSelf: 'center',
    width: width(35),
    height: height(10),
    marginTop: height(1),
  },
  grayBold: {
    color: Colors.grayText,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: width(5),
    marginTop: height(1.5),
    letterSpacing: width(0.22),
  },
  grayBold1: {
    color: Colors.grayText,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: width(4),
    marginTop: height(1.5),
    letterSpacing: width(0.1),
  },
  grayBold2: {
    color: Colors.grayText,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: width(4),
    marginTop: height(1),
    letterSpacing: width(0.1),
  },
  fbCont: {
    shadowColor: Colors.blue,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 10,
    width: width(15),
    height: width(15),
    borderRadius: width(15),
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  userTypes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width(80),
    alignSelf: 'center',
    marginTop: height(2),
  },
});
export default styles;
