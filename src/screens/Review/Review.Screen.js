import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from './Review.Style';
import {height, width} from 'react-native-dimension';
import ProgressBar from '../../components/ProgressBar/ProgressBar.Component';
import Container from '../../components/Container/Container.component';
import editBImage from '../../Assets/editB.png';
import {AirbnbRating} from 'react-native-ratings';
import Ionicons from 'react-native-vector-icons/Ionicons';
import boardslist from './data';
import Colors from '../../utills/Colors';
export default function About({navigation: {goBack, navigate}}) {
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
            size={width(7)}
          />
        </TouchableOpacity>
        <Text style={styles.bold}>Reviews</Text>
        <View style={{width: width(7)}} />
      </View>
      <ScrollView>
        <View style={styles.subHeader}>
          <Image
            style={styles.imageAvatar1}
            source={{
              uri:
                'https://images.unsplash.com/photo-1547404415-5eb20ddab016?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            }}
          />
          <View>
            <Text style={styles.text}>Pibble Street NFC</Text>
            <Text style={styles.text}>Restaurant</Text>
          </View>
        </View>
        <View style={styles.ratingContainer}>
          <View style={styles.ratingTextContainer}>
            <Text style={styles.ratingText}>4.9</Text>
            <Text style={styles.outoFText}>OUT OF 5</Text>
          </View>
          <View style={styles.startImageContainer}>
            <AirbnbRating
              count={5}
              showRating={false}
              isDisabled={true}
              defaultRating={3}
              starContainerStyle={{padding: 0, margin: 0}}
              size={15}
            />
            <Text style={styles.totalRatingText}>224 rating</Text>
          </View>
        </View>
        <ProgressBar number={5} progressPercentage={67} />
        <ProgressBar number={4} progressPercentage={14} />
        <ProgressBar number={3} progressPercentage={5} />
        <ProgressBar number={2} progressPercentage={3} />
        <ProgressBar number={1} progressPercentage={1} />
        <View style={styles.writeReviewContainer}>
          <TouchableOpacity onPress={() => navigate('AllReviews')}>
            <Text style={styles.totalReviewText}>13 Reviews</Text>
          </TouchableOpacity>
          <View style={styles.writeReviewButtonContainer}>
            <TouchableOpacity
              style={styles.writeReviewButton}
              onPress={() => setReviewModal(!reviewModal)}>
              <Text style={styles.writeReviewText}>WRITE A REVIEW</Text>
              <Image source={editBImage} style={styles.pencilImage} />
            </TouchableOpacity>
          </View>
        </View>
        {/* <View style={styles.reviewsContainer}> */}
        <FlatList
          showsVerticalScrollIndicator={false}
          data={boardslist}
          ItemSeparatorComponent={() => <View style={styles.line} />}
          renderItem={_boardslist}
          contentContainerStyle={{
            paddingBottom: height(2),
            paddingTop: height(2),
          }}
        />
        {/* </View> */}
      </ScrollView>
    </Container>
  );
}
