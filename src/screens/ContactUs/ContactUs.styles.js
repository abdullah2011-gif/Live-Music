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
  text: {
    width: width(90),
    alignSelf: 'center',
    fontSize: width(3.8),
    letterSpacing: width(0.3),
  },
});
export default styles;
