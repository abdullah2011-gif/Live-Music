import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Button from '../../components/Button/Button.component';
import TextInput from '../../components/TextInput/TextInput.component';
import Container from '../../components/Container/Container.component';
import {useDispatch} from 'react-redux';
import {height, width} from 'react-native-dimension';
import Colors from '../../utills/Colors';
import styles from './ForgotPassword.styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
function Login({navigation: {navigate, goBack}}) {
  var dispatch = useDispatch();
  return (
    <Container backgroundColor={Colors.white}>
      <View style={styles.header}>
        <TouchableOpacity style={{width: width(6)}} onPress={goBack}>
          <AntDesign name="left" color={Colors.blackText} size={width(5)} />
        </TouchableOpacity>
        <Text style={styles.black}>Change Password</Text>
        <Image
          style={styles.userImg}
          source={{
            uri:
              'https://images.unsplash.com/photo-1485875437342-9b39470b3d95?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8d29tZW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          }}
        />
      </View>
      <TextInput
        icon="ios-lock-closed-outline"
        placeholder="Current Password"
        containerStyle={{marginTop: height(7)}}
      />
      <TextInput
        icon="ios-lock-closed-outline"
        placeholder="New Password"
        containerStyle={{marginTop: height(2)}}
      />
      <TextInput
        icon="ios-lock-closed-outline"
        placeholder="Confirm Password"
        containerStyle={{marginTop: height(2)}}
      />
      <Button
        onPress={goBack}
        containerStyle={{marginTop: height(7)}}
        title="Apply Changes"
      />
    </Container>
  );
}
export default Login;
