import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './DummyScreen.styles';
import Container from '../../components/Container/Container.component';
import {useDispatch} from 'react-redux';
import Colors from '../../utills/Colors';
function Login({navigation: {navigate}}) {
  var dispatch = useDispatch();
  return (
    <Container backgroundColor={Colors.white}>
      <Text style={styles.blueBold}>Edit Profile As:</Text>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => navigate('MyProfile', {type: 'livemusic'})}
        style={styles.labelCont}>
        <Text style={styles.label}>Live Music</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => navigate('MyProfile', {type: 'restaurant'})}
        style={styles.labelCont}>
        <Text style={styles.label}>Restaurant</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => navigate('EditProfile', {type: 'user'})}
        style={styles.labelCont}>
        <Text style={styles.label}>Customer</Text>
      </TouchableOpacity>
    </Container>
  );
}
export default Login;
