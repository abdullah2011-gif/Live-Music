import {StyleSheet} from 'react-native';
import Colors from '../../utills/Colors';
import {width, height, totalSize} from 'react-native-dimension';

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: width(5),
    flexDirection: 'row',
  },
  bold: {
    fontSize: width(5),
    color: Colors.blackText,
    fontWeight: 'bold',
    letterSpacing: width(0.1),
  },
  bold1: {
    fontSize: width(4.5),
    color: Colors.blackText,
    fontWeight: 'bold',
    letterSpacing: width(0.1),
  },
  normal: {
    fontSize: width(3.5),
    color: Colors.blackText,
    letterSpacing: width(0.1),
    marginTop: height(0.5),
  },
  country: {
    width: '30%',
    paddingVertical: height(0.8),
    backgroundColor: Colors.blue,
    borderRadius: 30,
    paddingHorizontal: width(2),
    alignItems: 'center',
  },
  white: {
    color: Colors.white,
    fontSize: width(3.7),
    letterSpacing: width(0.1),
  },
  grayText: {
    color: Colors.grayText,
    fontSize: width(3),
  },
  bold: {
    color: '#000',
    fontSize: width(4.5),
    fontWeight: 'bold',
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: width(90),
    alignSelf: 'center',
    marginTop: height(2),
  },
  line: {
    width: width(90),
    alignSelf: 'center',
    height: 1,
    backgroundColor: Colors.grayText,
    marginTop: height(1),
  },
  itemCont: {
    backgroundColor: Colors.white,
    shadowColor: Colors.blue,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 10,
    paddingVertical: height(1.5),
    width: width(90),
    alignSelf: 'center',
    borderRadius: 10,
    paddingHorizontal: width(7),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    width: width(17),
    height: width(17),
    borderRadius: width(8.5),
  },
});
export default styles;
