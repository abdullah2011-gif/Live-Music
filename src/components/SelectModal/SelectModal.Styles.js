import {StyleSheet} from 'react-native';
import {height, width} from 'react-native-dimension';
import Colors from '../../utills/Colors';

const styles = StyleSheet.create({
  cancilCont: {
    width: '100%',
    height: height(7),
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: height(2),
    backgroundColor: Colors.white,
  },
  buttonCont: {
    width: '100%',
    height: height(7),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  mainCont: {
    width: '100%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.8)',
  },
  line: {
    width: '100%',
    borderTopColor: Colors.grayText,
    borderTopWidth: 1,
  },
  redText: {
    fontSize: width(4),
    color: 'red',
  },
  blueText: {
    fontSize: width(4),
    color: Colors.blue,
  },
});
export default styles;
