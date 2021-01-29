import {StyleSheet} from 'react-native';
import Colors from '../../utills/Colors';
import {width, height, totalSize} from 'react-native-dimension';

const styles = StyleSheet.create({
  mainCont: {
    marginTop: height(13),
    maxHeight: height(72),
    width: width(80),
    alignSelf: 'center',
  },
  mainCont1: {
    backgroundColor: Colors.blue,
    borderRadius: 10,
    paddingVertical: height(2),
    borderTopRightRadius: 0,
  },
  mainBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: height(3),
  },
  timeCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: height(2),
    paddingHorizontal: width(3),
  },
  time: {
    width: width(12),
    height: width(12),
    borderRadius: width(6),
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: height(1),
  },
  details: {
    borderTopColor: 'rgba(255,255,255,1)',
    borderTopWidth: 0.5,
    width: '33.3%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: height(3),
    paddingBottom: height(1),
  },
  bgImage: {
    height: height(45),
    width: width(100),
    marginTop: height(1),
    resizeMode: 'stretch',
    position: 'absolute',
    top: 0,
    zIndex: -1,
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: width(3),
  },
  boldWhite: {
    color: Colors.white,
    fontSize: width(5.3),
    letterSpacing: width(0.1),
    fontWeight: 'bold',
  },
  white: {
    color: Colors.white,
    fontSize: width(3.3),
    letterSpacing: width(0.1),
    marginTop: height(1),
    paddingHorizontal: width(3),
  },
  white1: {
    color: Colors.white,
    fontSize: width(3.3),
    letterSpacing: width(0.1),
    marginTop: height(1),
  },
  white2: {
    color: Colors.white,
    fontSize: width(2.8),
  },
  black: {
    color: Colors.blackText,
    fontSize: width(3.5),
    letterSpacing: width(0.1),
  },
  detText: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: width(4.3),
    letterSpacing: width(0.1),
  },
  country: {
    minWidth: width(23),
    paddingVertical: height(0.5),
    backgroundColor: Colors.white,
    borderRadius: 30,
    paddingHorizontal: width(2),
    alignItems: 'center',
  },
  user: {
    alignItems: 'center',
  },
  userImg: {
    width: width(10),
    height: width(10),
    borderRadius: width(5),
  },
  calandar: {
    width: width(15),
    height: height(7),
    backgroundColor: Colors.blue,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
});

export default styles;
