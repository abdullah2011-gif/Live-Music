import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import styles from './Bands.styles';
import Container from '../../components/Container/Container.component';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import data from './data';
import Colors from '../../utills/Colors';
import {height, width} from 'react-native-dimension';
const uri =
  'https://images.unsplash.com/photo-1485872299829-c673f5194813?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8cGFydHl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60';
function Dashboard({navigation: {navigate}}) {
  const [type, setType] = useState(0);
  return (
    <Container
      style={{justifyContent: 'flex-end'}}
      backgroundColor={Colors.white}>
      <Image style={styles.bgImage} source={{uri: uri}} />
      <View style={styles.mainCont}>
        <TouchableOpacity
          onPress={() => navigate('Calandar')}
          activeOpacity={1}
          style={styles.calandar}>
          <Ionicons
            size={width(8)}
            color={Colors.white}
            name="calendar-outline"
          />
        </TouchableOpacity>
        <View style={styles.mainCont1}>
          <View style={styles.flexRow}>
            <Text style={styles.boldWhite}>Kash Band</Text>
            <Ionicons name="heart" color={Colors.white} size={width(8)} />
          </View>
          <ScrollView>
            {type == 0 && (
              <Text style={styles.white}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s. Lorem Ipsum is simply dummy text of
                the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s. Lorem Ipsum
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s
              </Text>
            )}
            {type == 1 && (
              <>
                <Text style={styles.white}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </Text>
                <FlatList
                  data={['Country', 'Piano']}
                  horizontal={true}
                  nestedScrollEnabled={true}
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{
                    marginTop: height(2),
                    paddingHorizontal: width(3),
                  }}
                  ItemSeparatorComponent={() => (
                    <View style={{width: width(4)}} />
                  )}
                  renderItem={({item}) => {
                    return (
                      <View style={styles.country}>
                        <Text style={styles.black}>{item}</Text>
                      </View>
                    );
                  }}
                />
                <FlatList
                  data={data}
                  horizontal={true}
                  nestedScrollEnabled={true}
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{
                    marginTop: height(3),
                    paddingHorizontal: width(3),
                  }}
                  ItemSeparatorComponent={() => (
                    <View style={{width: width(4)}} />
                  )}
                  renderItem={({item}) => {
                    return (
                      <View style={styles.user}>
                        <Image
                          style={styles.userImg}
                          source={{uri: item.image}}
                        />
                        <Text style={styles.white1}>{item.name}</Text>
                      </View>
                    );
                  }}
                />
              </>
            )}
            <View style={styles.timeCont}>
              <View style={{alignItems: 'center', width: '33.3%'}}>
                <View style={styles.time}>
                  <Ionicons
                    name="md-stopwatch-outline"
                    color={Colors.darkGrayText}
                    size={width(5)}
                  />
                </View>
                <Text style={styles.white2}>10am, 01-11-2020</Text>
              </View>
              <View style={{alignItems: 'center', width: '33.3%'}}>
                <View style={styles.time}>
                  <FontAwesome5
                    name="map-marked-alt"
                    color={Colors.darkGrayText}
                    size={width(5)}
                  />
                </View>
                <Text style={styles.white2}>Location</Text>
              </View>
              <View style={{alignItems: 'center', width: '33.3%'}}>
                <View style={styles.time}>
                  <Ionicons
                    name="ios-star"
                    color={Colors.darkGrayText}
                    size={width(5)}
                  />
                </View>
                <Text style={styles.white2}>4.7 Ratings</Text>
              </View>
            </View>
          </ScrollView>
          <View style={styles.mainBottom}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => setType(0)}
              style={[styles.details, type == 0 && {borderTopWidth: 1.5}]}>
              <Text
                style={[styles.detText, type == 0 && {color: Colors.white}]}>
                DETAILS
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => setType(1)}
              style={[styles.details, type == 1 && {borderTopWidth: 1.5}]}>
              <Text
                style={[styles.detText, type == 1 && {color: Colors.white}]}>
                LIVE BAND
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => navigate('Review')}
              style={[styles.details, type == 2 && {borderTopWidth: 1.5}]}>
              <Text
                style={[styles.detText, type == 2 && {color: Colors.white}]}>
                REVIEWS
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
}
export default Dashboard;
