import {StyleSheet} from 'react-native';
import Colors from '../../utills/Colors';
import {width, height, totalSize} from 'react-native-dimension';

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: width(5),
    flexDirection: 'row',
    width: width(100),
  },
  bold: {
    color: '#000',
    fontSize: width(4.5),
    fontWeight: 'bold',
  },
  label: {
    color: Colors.darkGrayText,
    fontSize: width(3.2),
  },
  main: {
    marginTop: height(2),
  },
  userImage: {
    alignSelf: 'center',
    width: width(25),
    height: width(25),
    borderRadius: width(12.5),
    marginTop: height(2),
    shadowColor: Colors.blue,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 10,
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
  textCont: {
    shadowColor: Colors.blue,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 10,
    backgroundColor: Colors.white,
    width: width(90),
    alignSelf: 'center',
    borderRadius: 4,
    paddingVertical: height(0.5),
    paddingHorizontal: width(5),
    marginTop: height(1.5),
  },
  textInput: {
    color: Colors.blackText,
    fontSize: width(3.7),
    width: '100%',
    height: height(6),
    paddingVertical: 0,
  },
  buttonCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width(90),
    alignItems: 'center',
    marginBottom: height(1.5),
    alignSelf: 'center',
    marginTop: height(1),
  },
  button: {
    width: '45%',
    backgroundColor: Colors.white,
  },
  button1: {
    width: '45%',
  },
  bLabel: {
    color: Colors.blue,
    fontSize: width(4),
  },
});
export default styles;
