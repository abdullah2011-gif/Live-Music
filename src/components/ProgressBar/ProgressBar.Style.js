import {StyleSheet} from 'react-native';
import Colors from '../../utills/Colors';
import {width, height, totalSize} from 'react-native-dimension';

const styles = StyleSheet.create({
  container: {
    width: width(90),
    alignSelf: 'center',
    marginTop: height(1.5),
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  starImage: {
    width: totalSize(1.5),
    height: totalSize(1.5),
    marginLeft: width(1),
    tintColor: Colors.primaryBlue,
  },
  numberText: {
    color: Colors.darkGrayText,
    fontSize: width(3.6),
  },
  titleText: {
    marginBottom: height(0.5),
  },
  progressPercentageText: {
    fontSize: width(3.6),
  },
});
export default styles;
