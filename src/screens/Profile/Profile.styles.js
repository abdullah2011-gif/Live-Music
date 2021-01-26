import {StyleSheet} from 'react-native';
import Colors from '../../utills/Colors';
import {width, height, totalSize} from 'react-native-dimension';

const styles = StyleSheet.create({
  userImage: {
    alignSelf: 'center',
    width: width(30),
    height: width(30),
    borderRadius: width(27.5),
    marginTop: height(2),
    shadowColor: Colors.blue,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 10,
  },
  bold: {
    fontSize: width(5),
    color: Colors.blackText,
    fontWeight: 'bold',
    letterSpacing: width(0.1),
    textAlign: 'center',
    marginTop: height(1),
  },
  grayBold1: {
    color: Colors.blackText,
    fontSize: width(4.5),
    letterSpacing: width(0.1),
    marginLeft: width(4),
  },
  time: {
    width: width(7),
    height: width(7),
    borderRadius: width(3.5),
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: height(1),
    shadowColor: Colors.blue,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 10,
    position: 'absolute',
    alignSelf: 'center',
    bottom: -width(3.5),
  },
  main: {
    marginTop: height(2),
  },
  dataCont: {
    shadowColor: Colors.blue,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 3,
    width: width(90),
    borderRadius: 10,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: height(3),
    paddingHorizontal: width(5),
    paddingVertical: height(1.5),
  },
  single: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: height(1.5),
  },
});
export default styles;
