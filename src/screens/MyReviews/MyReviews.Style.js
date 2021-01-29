import {StyleSheet} from 'react-native';
import Colors from '../../utills/Colors';
import {width, height, totalSize} from 'react-native-dimension';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.ofwhite,
  },
  headerContainer: {
    // alignItems: 'center',
    paddingHorizontal: width(5),
    marginTop: height(1),
  },
  subHeader: {
    alignItems: 'center',
    paddingHorizontal: width(5),
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: Colors.white,
    shadowColor: Colors.blue,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 10,
    paddingVertical: height(1),
    marginVertical: height(2),
  },
  containerStyle: {
    marginBottom: height(2),
  },
  ratingContainer: {
    width: width(90),
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ratingTextContainer: {
    flexDirection: 'row',
    width: width(32),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ratingText: {
    fontWeight: 'bold',
    fontSize: totalSize(5),
  },
  outoFText: {
    fontSize: totalSize(1.4),
    marginTop: height(2),
    marginLeft: width(1),
    color: Colors.darkGrayText,
  },
  text: {
    fontSize: width(3),
    marginLeft: width(7),
    color: Colors.blackText,
    fontWeight: 'bold',
  },
  bold: {
    fontSize: width(5),
    color: Colors.blackText,
    fontWeight: 'bold',
    letterSpacing: width(0.1),
  },
  startImageContainer: {
    width: width(45),
    alignItems: 'flex-end',
  },
  startImageInnerContainer: {
    flexDirection: 'row',
  },

  totalRatingText: {
    color: Colors.darkGrayText,
    fontSize: totalSize(1.5),
    marginTop: height(1),
  },
  writeReviewContainer: {
    flexDirection: 'row',
    width: width(90),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: height(3),
  },
  totalReviewText: {
    color: Colors.darkGrayText,
    fontSize: totalSize(1.75),
  },
  writeReviewButtonContainer: {
    flexDirection: 'row',
  },
  writeReviewButton: {
    flexDirection: 'row',
  },
  writeReviewText: {
    color: Colors.darkGrayText,
    fontSize: totalSize(1.75),
  },
  pencilImage: {
    width: 14,
    height: 14,
    marginLeft: width(1),
    marginTop: height(0.35),
    tintColor: Colors.darkGrayText,
  },
  reviewsContainer: {
    marginTop: height(2),
    width: width(90),
    alignSelf: 'center',
  },
  reviewflatListContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    shadowColor: Colors.blue,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 10,
    width: width(90),
    alignSelf: 'center',
    borderRadius: 10,
    paddingVertical: height(1.5),
  },
  imageContainer: {
    width: width(15),
    alignSelf: 'flex-start',
  },
  imageAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  imageAvatar1: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  reviewRatingContainer: {
    flexDirection: 'column',
    width: width(70),
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nameText: {
    color: Colors.textBlack,
    fontSize: totalSize(2),
    fontWeight: 'bold',
  },
  pagination: {
    color: Colors.textBlack,
    fontSize: width(3),
    paddingHorizontal: width(2),
    fontWeight: 'bold',
  },
  ratingStarContainer: {
    flexDirection: 'row',
    marginTop: height(0.5),
    alignItems: 'center',
  },
  dateText: {
    color: Colors.darkOpactiveGray,
    fontSize: totalSize(1.35),
    marginLeft: width(2),
  },
  line: {
    height: 1,
    backgroundColor: Colors.grayText,
    marginVertical: height(1.5),
    width: width(90),
    alignSelf: 'center',
  },
  time: {
    width: width(8),
    height: width(8),
    borderRadius: width(4),
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: Colors.blue,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 10,
    marginHorizontal: width(2),
  },
  sliderCont: {
    width: width(90),
    alignSelf: 'center',
    marginVertical: height(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  slider: {
    paddingBottom: height(1),
    borderBottomWidth: 1.5,
    borderBottomColor: 'transparent',
  },
});
export default styles;
