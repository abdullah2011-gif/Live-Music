import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './Login.styles';
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
import Colors from '../../utills/Colors';
function Login({navigation: {navigate}}) {
  var dispatch = useDispatch();
  const [userName, setUserName] = useState('');
  const logingIn = () => {
    dispatch(login({userName: 'John Doe'}));
    if (userName == 'restaurant') dispatch(setAccountTypeRestaurant());
    else if (userName == 'livemusic') dispatch(setAccountTypeLiveMusic());
    navigate('Subscription');
  };
  return (
    <Container backgroundColor={Colors.white}>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={require('../../Assets/logo.png')}
      />
      <Text style={styles.grayBold}>Login to your Account</Text>
      <TextInput
        icon="mail-open-outline"
        placeholder="Email"
        onChangeText={setUserName}
        containerStyle={{marginTop: height(5)}}
      />
      <TextInput
        icon="ios-lock-closed-outline"
        secureTextEntry={true}
        placeholder="Password"
        containerStyle={{marginTop: height(2)}}
      />
      <Text style={styles.forgot}>Forgot Password?</Text>
      <Button
        title="Login"
        containerStyle={{marginTop: height(2.5)}}
        onPress={logingIn}
      />
      <Text style={styles.grayBold1}>- Or sign in with -</Text>
      <TouchableOpacity activeOpacity={0.9} style={styles.fbCont}>
        <EvilIcons name={'sc-facebook'} color={Colors.blue} size={width(12)} />
      </TouchableOpacity>
      <View style={{flexDirection: 'row', alignSelf: 'center'}}>
        <Text style={styles.grayBold1}>Don't have an Account? </Text>
        <TouchableOpacity onPress={() => navigate('Signup')}>
          <Text style={[styles.grayBold1, {color: Colors.blue}]}>Signup</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
}
export default Login;
