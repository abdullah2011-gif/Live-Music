import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  ImageBackground,
} from 'react-native';
import Button from '../../components/Button/Button.component';
import Container from '../../components/Container/Container.component';
import {useDispatch} from 'react-redux';
import {height, width} from 'react-native-dimension';
import Colors from '../../utills/Colors';
import styles from './Subscription.styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import data from './data';
function Login({navigation: {navigate}}) {
  var dispatch = useDispatch();
  return (
    <Container backgroundColor={Colors.white}>
      <View style={styles.header}>
        <TouchableOpacity
          style={{width: width(6)}}
          onPress={() => navigate('Login')}>
          <AntDesign name="left" color={Colors.blackText} size={width(5)} />
        </TouchableOpacity>
        <Text style={styles.black}>Subscriptions</Text>
        <Image
          style={styles.userImg}
          source={{
            uri:
              'https://images.unsplash.com/photo-1485875437342-9b39470b3d95?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8d29tZW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          }}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.black1}>Flexible Plans</Text>
        <Text style={styles.blue}>
          We have selected subscriptions specifically for you based on your
          preferences.
        </Text>
        <FlatList
          data={data.subs}
          ItemSeparatorComponent={() => <View style={{height: height(2)}} />}
          contentContainerStyle={{
            paddingVertical: height(3),
            marginTop: height(3),
          }}
          renderItem={({item}) => {
            return (
              <View style={styles.subs}>
                <ImageBackground
                  source={require('../../Assets/elisp.png')}
                  style={styles.elips}>
                  <Text style={styles.subsName}>{item.name}</Text>
                  <Text style={[styles.subsName, {textAlign: 'center'}]}>
                    {item.rate}
                  </Text>
                </ImageBackground>
                <View style={styles.buyNow}>
                  <Text style={styles.blue1}>Buy Now</Text>
                </View>
                <View style={{marginVertical: height(1.5)}}>
                  <Text style={styles.blue1}>Lorum ipsum dolur</Text>
                  <Text style={[styles.blue1, {marginTop: height(1)}]}>
                    Lorum ipsum dolur
                  </Text>
                  <Text style={[styles.blue1, {marginTop: height(1)}]}>
                    Lorum ipsum dolur
                  </Text>
                </View>
              </View>
            );
          }}
        />
        <Text style={styles.black2}>Terms & Conditions</Text>
        <FlatList
          data={data.terms}
          ItemSeparatorComponent={() => <View style={{height: height(1)}} />}
          contentContainerStyle={{paddingVertical: height(3)}}
          renderItem={({item}) => {
            return (
              <View style={styles.termsCont}>
                <Entypo name="dot-single" color={Colors.blue} size={width(5)} />
                <Text style={styles.terms}>{item}</Text>
              </View>
            );
          }}
        />
      </ScrollView>
    </Container>
  );
}
export default Login;
