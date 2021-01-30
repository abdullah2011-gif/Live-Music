import React from 'react';
import {View, Text, StyleSheet, Image, Linking} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {DrawerContentScrollView} from '@react-navigation/drawer';

import {TouchableOpacity} from 'react-native-gesture-handler';
import {height, width} from 'react-native-dimension';
import Colors from '../utills/Colors';
var uri =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMW0LKcpGP77VJsaCwyb2WcmkuWSo6wQKDcw&usqp=CAU';

export default (props, dispatch) => {
  return (
    <View style={{flex: 1}}>
      <View style={{height: '90%'}}>
        <DrawerContentScrollView {...props}>
          <View style={styles.header}>
            <Image source={{uri}} style={styles.userImg} />
            <View>
              <Text style={[styles.label, {fontWeight: 'bold'}]}>John Doe</Text>
              <Text style={[styles.label, {color: Colors.darkGrayText}]}>
                @JohnDoe
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.contactUsContainer}
            onPress={() => {
              props.navigation.navigate('AboutUs');
            }}>
            <Ionicons name={'business'} size={30} color={Colors.blue} />
            <Text style={styles.drawerText}>About Us</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.contactUsContainer}
            onPress={() => {
              props.navigation.navigate('TermsCondition');
            }}>
            <MaterialIcons name={'privacy-tip'} size={30} color={Colors.blue} />
            <Text style={styles.drawerText}>Privacy Poilcy</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.contactUsContainer}
            onPress={() => {
              props.navigation.navigate('PrivacyPoliecy');
            }}>
            <MaterialIcons
              name={'local-police'}
              size={30}
              color={Colors.blue}
            />
            <Text style={styles.drawerText}>Terms and Condition</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.contactUsContainer}
            onPress={() => {
              props.navigation.navigate('ContactUs');
            }}>
            <MaterialIcons
              name={'contact-page'}
              size={30}
              color={Colors.blue}
            />
            <Text style={styles.drawerText}>Contact us</Text>
          </TouchableOpacity>
        </DrawerContentScrollView>
      </View>
    </View>
  );
};

const drawerStyle = {
  activeTintColor: 'black',
  inactiveTintColor: 'black',
  labelStyle: {
    fontFamily: 'montserrat',
    marginVertical: 16,
    marginHorizontal: 0,
  },
  iconContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemStyle: {},
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  container: {
    flex: 1,
  },
  logoContainer: {
    width: '100%',
    height: height(50),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
    padding: 5,
  },
  image: {
    resizeMode: 'contain',
    width: '80%',
    height: '100%',
  },
  contactUsContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
    alignItems: 'center',
    paddingLeft: 15,
  },
  logoutContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  drawerText: {
    marginLeft: 16,
    color: Colors.blue,
  },
  logoutText: {
    fontFamily: 'montserrat',
    color: '#b23b3b',
  },
  userImg: {
    width: width(13),
    height: width(13),
    borderRadius: width(6.5),
  },
  header: {
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: '3%',
  },
  label: {
    marginLeft: '5%',
    fontSize: width(3.4),
    color: Colors.blue,
  },
});
