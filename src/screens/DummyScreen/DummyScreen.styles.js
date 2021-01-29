import {StyleSheet} from 'react-native';
import Colors from '../../utills/Colors';
import {width, height, totalSize} from 'react-native-dimension';

const styles = StyleSheet.create({
  blueBold: {
    textAlign: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: width(5),
    marginTop: height(20),
    color: Colors.blue,
  },
  labelCont: {
    alignSelf: 'center',
    width: width(50),
    height: width(15),
    marginTop: height(5),
    shadowColor: Colors.blue,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  label: {
    textAlign: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: width(5),
    color: Colors.blue,
  },
});
export default styles;
