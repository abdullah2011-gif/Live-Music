import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from './MyReviews.Style';
import {height, width} from 'react-native-dimension';
import ProgressBar from '../../components/ProgressBar/ProgressBar.Component';
import Container from '../../components/Container/Container.component';
import editBImage from '../../Assets/editB.png';
import {AirbnbRating} from 'react-native-ratings';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import boardslist from './data';
import Colors from '../../utills/Colors';
export default function About({navigation: {goBack}}) {
  const [tab, setTab] = useState(0);
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
          <MaterialIcons
            name="arrow-back-ios"
            color={Colors.darkGrayText}
            size={width(5)}
          />
        </TouchableOpacity>
        <View style={styles.sliderCont}>
          <TouchableOpacity
            onPress={() => setTab(0)}
            style={[
              styles.slider,
              tab == 0 && {borderBottomColor: Colors.blue},
            ]}>
            <Text style={styles.bold}>
              My <Text style={{color: Colors.blue}}>Reviews</Text>
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setTab(1)}
            style={[
              styles.slider,
              tab == 1 && {borderBottomColor: Colors.blue},
            ]}>
            <Text style={styles.bold}>
              Given <Text style={{color: Colors.blue}}>Reviews</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
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
    </Container>
  );
}
