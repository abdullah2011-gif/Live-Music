import {StyleSheet} from 'react-native';
import Colors from '../../utills/Colors';
import {width, height, totalSize} from 'react-native-dimension';

const styles = StyleSheet.create({
  black: {
    color: Colors.blackText,
    fontWeight: 'bold',
    fontSize: width(4.3),
    letterSpacing: width(0.22),
  },
  black1: {
    color: Colors.blackText,
    fontWeight: 'bold',
    fontSize: width(4.3),
    letterSpacing: width(0.22),
    marginLeft: width(7),
  },

  blue: {
    color: Colors.blue,
    fontSize: width(2.7),
    fontWeight: 'bold',
  },
  blue1: {
    color: Colors.blue,
    fontSize: width(3.3),
    fontWeight: 'bold',
    marginTop: height(2),
  },
  header: {
    position: 'absolute',
    width: width(100),
    height: height(8),
    backgroundColor: '#fff',
    zIndex: 1,
    paddingHorizontal: width(5),
    justifyContent: 'space-between',
    paddingTop: height(1),
    flexDirection: 'row',
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
    alignSelf: 'center',
    paddingVertical: height(2),
    paddingHorizontal: width(5),
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  flexRow1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
export default styles;
