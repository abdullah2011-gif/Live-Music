import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import styles from './Signup.styles';
import Button from '../../components/Button/Button.component';
import TextInput from '../../components/TextInput/TextInput.component';
import Container from '../../components/Container/Container.component';
import {
  login,
  setAccountTypeLiveMusic,
  setAccountTypeRestaurant,
} from '../../Redux/Actions/Auth';
import {useDispatch} from 'react-redux';
import {height, width} from 'react-native-dimension';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import Colors from '../../utills/Colors';
function Login({navigation: {navigate}}) {
  const [userType, setUserType] = useState(0);
  var dispatch = useDispatch();
  const signUp = () => {
    // dispatch(login({userName: 'John Doe'}));
    // if (userType == 1) dispatch(setAccountTypeRestaurant());
    // else if (userType == 2) dispatch(setAccountTypeLiveMusic());
    navigate('Subscription');
  };
  return (
    <Container backgroundColor={Colors.white}>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: height(1)}}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={require('../../Assets/logo.png')}
        />
        <Text style={styles.grayBold}>Create your Account</Text>
        <View style={styles.userTypes}>
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity
              onPress={() => setUserType(0)}
              activeOpacity={0.9}
              style={styles.fbCont}>
              <FontAwesome
                name={'user'}
                color={userType == 0 ? Colors.blackText : Colors.grayText}
                size={width(10)}
              />
            </TouchableOpacity>
            <Text
              style={[
                styles.grayBold2,
                userType == 0 && {color: Colors.blackText},
              ]}>
              User
            </Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => setUserType(1)}
              activeOpacity={0.9}
              style={styles.fbCont}>
              <Ionicons
                name={'restaurant'}
                color={userType == 1 ? Colors.blackText : Colors.grayText}
                size={width(9)}
              />
            </TouchableOpacity>
            <Text
              style={[
                styles.grayBold2,
                userType == 1 && {color: Colors.blackText},
              ]}>
              Restaurants
            </Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => setUserType(2)}
              activeOpacity={0.9}
              style={styles.fbCont}>
              <Ionicons
                name={'musical-notes'}
                color={userType == 2 ? Colors.blackText : Colors.grayText}
                size={width(9)}
              />
            </TouchableOpacity>
            <Text
              style={[
                styles.grayBold2,
                userType == 2 && {color: Colors.blackText},
              ]}>
              Artists
            </Text>
          </View>
        </View>
        <TextInput
          icon="mail-open-outline"
          placeholder={userType == 1 ? 'Restaurant Name' : 'Name'}
          containerStyle={{marginTop: height(3)}}
        />
        <TextInput
          icon="mail-open-outline"
          placeholder="Email"
          containerStyle={{marginTop: height(1)}}
        />
        <TextInput
          icon="ios-lock-closed-outline"
          placeholder="Password"
          secureTextEntry={true}
          containerStyle={{marginTop: height(1)}}
        />
        <TextInput
          icon="ios-lock-closed-outline"
          placeholder="Confirm Password"
          containerStyle={{marginTop: height(1)}}
        />
        <Button
          title="Register"
          containerStyle={{marginTop: height(2)}}
          onPress={signUp}
        />
        <Text style={styles.grayBold1}>- Or sign up with -</Text>
        <TouchableOpacity
          activeOpacity={0.9}
          style={[styles.fbCont, {marginTop: height(2)}]}>
          <EvilIcons
            name={'sc-facebook'}
            color={Colors.blue}
            size={width(12)}
          />
        </TouchableOpacity>
        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <Text style={styles.grayBold1}>Already have an Account? </Text>
          <TouchableOpacity onPress={() => navigate('Login')}>
            <Text style={[styles.grayBold1, {color: Colors.blue}]}>
              Login here
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </Container>
  );
}
export default Login;
