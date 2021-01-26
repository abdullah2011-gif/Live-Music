import {StyleSheet} from 'react-native';
import Colors from '../../utills/Colors';
import {width, height, totalSize} from 'react-native-dimension';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: width(5),
    marginTop: height(1),
  },
  itemCont: {
    shadowColor: Colors.blue,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 10,
    backgroundColor: Colors.white,
    width: width(43.5),
    height: height(20),
    borderRadius: 10,
  },
  itemImage: {
    height: height(10),
    width: width(20),
    marginTop: height(2),
    alignSelf: 'flex-end',
    marginRight: '20%',
  },
  itemName: {
    color: Colors.darkGrayText,
    fontSize: width(5),
    letterSpacing: width(0.1),
    paddingHorizontal: width(3.5),
    marginTop: height(1),
  },
  itemFlatListContainer: {
    paddingBottom: height(4),
    paddingTop: height(2),
  },
  itemFlatListColumn: {
    justifyContent: 'space-between',
    paddingHorizontal: width(5),
  },
});
export default styles;
