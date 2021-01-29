import React from 'react';
import {Image, View} from 'react-native';
import styles from './Splash.styles';
import Container from '../../components/Container/Container.component';
import {useDispatch} from 'react-redux';
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
      <View style={styles.dotCont}>
        <View style={styles.dot} />
        <View style={styles.dot} />
        <View style={[styles.dot, {backgroundColor: Colors.blue}]} />
      </View>
    </Container>
  );
}
export default Login;
