import {StyleSheet} from 'react-native';
import Colors from '../../utills/Colors';
import {width, height, totalSize} from 'react-native-dimension';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  permission: {
    paddingTop: height(2),
    paddingBottom: height(2),
    backgroundColor: Colors.blue,
    borderRadius: 20,
    width: width(80),
    alignSelf: 'center',
    paddingHorizontal: '6%',
  },
  loc: {
    width: width(50),
    height: height(20),
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  white: {
    fontSize: width(4.5),
    fontWeight: 'bold',
    color: Colors.white,
    textAlign: 'center',
    letterSpacing: width(0.6),
    marginTop: height(1),
  },
  white1: {
    fontSize: width(4.5),
    fontWeight: 'bold',
    color: Colors.white,
    letterSpacing: width(0.6),
    marginLeft: width(5),
  },
  lightWhite: {
    fontSize: width(3.2),
    color: 'rgba(255,255,255,0.8)',
    textAlign: 'center',
    letterSpacing: width(0.4),
    marginTop: height(2),
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: height(5),
  },
  buttonText: {
    color: Colors.blue,
    fontSize: width(4),
    fontWeight: 'bold',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  button: {backgroundColor: Colors.white, width: width(27)},
  snapCont: {
    position: 'absolute',
    zIndex: 1,
    bottom: height(2),
  },
  slide: {
    width: width(80),
    alignSelf: 'center',
    borderRadius: 30,
    backgroundColor: Colors.white,
    shadowColor: Colors.blue,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 10,
    margin: 8,
    paddingVertical: height(2),
    paddingHorizontal: width(5),
    marginBottom: height(5),
  },
  itemImg: {
    height: height(13),
    width: width(25),
    borderRadius: 10,
  },
  markerImg: {
    height: height(4.5),
    width: width(8),
    borderRadius: 3,
  },
  carosalCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: Colors.blackText,
    fontSize: width(3.8),
    fontWeight: 'bold',
  },
  title1: {
    color: Colors.blackText,
    fontSize: width(4.5),
    marginTop: height(1),
  },
  subTitle: {
    color: Colors.blackText,
    fontSize: width(3),
    marginTop: height(0.5),
  },
  marker: {
    paddingVertical: height(0.6),
    paddingHorizontal: width(2),
    borderRadius: 8,
    backgroundColor: Colors.white,
    flexDirection: 'row',
  },
  markrtTitle: {
    fontSize: width(2.5),
    color: Colors.blackText,
    fontWeight: 'bold',
  },
  markrtTitle1: {
    fontSize: width(2.5),
    color: Colors.blackText,
  },
});
export default styles;
