import {StyleSheet, Platform} from 'react-native';
import Colors from '../utills/Colors';
import {width, height} from 'react-native-dimension';

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    width: width(100),
    height: Platform.OS == 'ios' ? height(15) : height(9.5),
    backgroundColor: Colors.white,
    alignItems: 'flex-start',
  },
  activeImage: {
    height: 25,
    width: 25,
    tintColor: Colors.blue,
  },
  inactiveImage: {
    height: 20,
    width: 20,
    tintColor: Colors.darkGrayText,
  },
  text: {
    fontSize: width(3.4),
    color: Colors.darkGrayText,
  },
});
export default styles;
