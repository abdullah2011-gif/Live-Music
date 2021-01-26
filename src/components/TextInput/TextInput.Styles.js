import {StyleSheet} from 'react-native';
import {height, totalSize, width} from 'react-native-dimension';
import Colors from '../../utills/Colors';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: Colors.white,
    width: '80%',
    alignSelf: 'center',
    paddingVertical: height(0.1),
    margin: totalSize(1),
    shadowColor: Colors.blue,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 10,
    flexDirection: 'row',
    paddingHorizontal: width(5),
  },
  text: {
    color: Colors.blackText,
    fontSize: width(4.2),
    letterSpacing: width(0.1),
    width: '90%',
  },
});
export default styles;
