import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import styles from './ContactUs.styles';
import Button from '../../components/Button/Button.component';
import Container from '../../components/Container/Container.component';
import {login} from '../../Redux/Actions/Auth';
import {useDispatch} from 'react-redux';
import {height, width} from 'react-native-dimension';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../utills/Colors';
import TextInput from '../../components/TextInput/TextInput.component';
function Login({navigation: {goBack}}) {
  var dispatch = useDispatch();
  return (
    <Container backgroundColor={Colors.white}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => goBack()}>
          <Ionicons
            name="arrow-back-outline"
            color={Colors.darkGrayText}
            size={width(7)}
          />
        </TouchableOpacity>
        <Text style={styles.bold}>Contact Us</Text>
        <View style={{width: width(7)}} />
      </View>
      <ScrollView contentContainerStyle={{paddingVertical: height(3)}}>
        <Text style={styles.text}>
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
        </Text>
        <TextInput
          placeholder="Name"
          containerStyle={{marginTop: height(10)}}
        />
        <TextInput placeholder="Email" />
        <TextInput
          placeholder="Message"
          multiline={true}
          inputStyle={{height: height(15)}}
          containerStyle={{borderRadius: 10}}
        />
        <Button
          title="Send"
          containerStyle={{marginTop: height(5)}}
          onPress={goBack}
        />
      </ScrollView>
    </Container>
  );
}
export default Login;
