import {StyleSheet} from 'react-native';
import Colors from '../../utills/Colors';
import {width, height, totalSize} from 'react-native-dimension';

const styles = StyleSheet.create({
  image: {
    alignSelf: 'center',
    width: width(80),
    height: height(40),
    marginTop: height(25),
  },
  dotCont: {
    flexDirection: 'row',
    width: width(20),
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginTop: height(15),
  },
  dot: {
    width: width(4),
    height: width(4),
    borderRadius: width(2),
    borderWidth: 1.5,
    borderColor: Colors.blue,
  },
});
export default styles;
