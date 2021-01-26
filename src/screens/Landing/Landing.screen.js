import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './Landing.styles';
import Button from '../../components/Button/Button.component';
import Container from '../../components/Container/Container.component';
import {login} from '../../Redux/Actions/Auth';
import {useDispatch} from 'react-redux';
import {height, width} from 'react-native-dimension';
import Colors from '../../utills/Colors';
function Login({navigation: {navigate}}) {
  var dispatch = useDispatch();
  return (
    <Container backgroundColor={Colors.white}>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={require('../../Assets/logo.png')}
      />

      <Button
        title="Register"
        containerStyle={{marginTop: height(20)}}
        onPress={() => navigate('Signup')}
      />
      <Button
        title="Login"
        containerStyle={{marginTop: height(3), backgroundColor: Colors.white}}
        textStyle={{color: Colors.blue}}
        onPress={() => navigate('Login')}
      />
    </Container>
  );
}
export default Login;
