import {StyleSheet} from 'react-native';
import {height, totalSize, width} from 'react-native-dimension';
import Colors from '../../utills/Colors';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: Colors.blue,
    width: '80%',
    alignSelf: 'center',
    paddingVertical: height(1.4),
    margin: totalSize(1),
    shadowColor: Colors.blue,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 10,
  },
  text: {
    color: Colors.white,
    fontSize: width(5.2),
    letterSpacing: width(0.3),
  },
});
export default styles;
