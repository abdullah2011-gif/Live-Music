import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from './AllReviews.Style';
import {height, width} from 'react-native-dimension';
import ProgressBar from '../../components/ProgressBar/ProgressBar.Component';
import Container from '../../components/Container/Container.component';
import editBImage from '../../Assets/editB.png';
import {AirbnbRating} from 'react-native-ratings';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import boardslist from './data';
import Colors from '../../utills/Colors';
export default function About({navigation: {goBack}}) {
  const [reviewModal, setReviewModal] = useState(false);
  const _boardslist = ({item}) => {
    return (
      <>
        <View style={styles.reviewflatListContainer}>
          <View style={styles.imageContainer}>
            <Image style={styles.imageAvatar} source={{uri: item.image}} />
          </View>
          <View style={styles.reviewRatingContainer}>
            <View style={styles.nameContainer}>
              <Text style={styles.nameText}>{item.name}</Text>
            </View>
            <View style={styles.ratingStarContainer}>
              <AirbnbRating
                selectedColor={Colors.primaryBlue}
                count={5}
                showRating={false}
                isDisabled={true}
                defaultRating={item.rating}
                starContainerStyle={{padding: 0, margin: 0}}
                size={15}
              />
              <Text style={styles.dateText}>
                {item.rating} OUT OF 5, Oct 20, 2020
              </Text>
            </View>
            <Text style={styles.status}>{item.status}</Text>
          </View>
        </View>
      </>
    );
  };

  return (
    <Container backgroundColor={Colors.white}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => goBack()}>
          <Ionicons
            name="arrow-back-outline"
            color={Colors.darkGrayText}
            size={width(5)}
          />
        </TouchableOpacity>
        <Text style={styles.bold}>Reviews (30)</Text>
        <View style={{width: width(7)}} />
      </View>
      <View style={styles.line} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={boardslist}
          ItemSeparatorComponent={() => <View style={{height: height(2)}} />}
          renderItem={_boardslist}
          contentContainerStyle={{
            paddingBottom: height(3),
            paddingTop: height(1.5),
          }}
        />
      </ScrollView>
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
          alignItems: 'center',
          paddingVertical: height(1),
        }}>
        <TouchableOpacity activeOpacity={0.8} style={styles.time}>
          <Entypo
            name="chevron-left"
            color={Colors.darkGrayText}
            size={width(4)}
          />
        </TouchableOpacity>
        <Text style={styles.pagination}>1</Text>
        <Text style={styles.pagination}>2</Text>
        <Text style={styles.pagination}>3</Text>
        <Text style={styles.pagination}>4</Text>
        <Text style={styles.pagination}>5</Text>
        <TouchableOpacity activeOpacity={0.8} style={styles.time}>
          <Entypo
            name="chevron-right"
            color={Colors.darkGrayText}
            size={width(4)}
          />
        </TouchableOpacity>
      </View>
    </Container>
  );
}
