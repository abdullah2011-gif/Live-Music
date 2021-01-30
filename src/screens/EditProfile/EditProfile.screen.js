import React from 'react';
import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import Button from '../../components/Button/Button.component';
import Container from '../../components/Container/Container.component';
import {useDispatch} from 'react-redux';
import {height, width} from 'react-native-dimension';
import Colors from '../../utills/Colors';
import styles from './EditProfile.styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {logout} from '../../Redux/Actions/Auth';
const uri =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMW0LKcpGP77VJsaCwyb2WcmkuWSo6wQKDcw&usqp=CAU';
function Login({navigation: {navigate, goBack}}) {
  var dispatch = useDispatch();
  return (
    <Container backgroundColor={Colors.white}>
      <View style={{height: '100%', justifyContent: 'center'}}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => goBack()}>
            <Ionicons
              name="arrow-back-outline"
              color={Colors.darkGrayText}
              size={width(7)}
            />
          </TouchableOpacity>
          <Text style={styles.bold}>Edit Profile</Text>
          <View style={{width: width(7)}} />
        </View>
        <KeyboardAwareScrollView>
          <View style={styles.main}>
            <Image source={{uri: uri}} style={styles.userImage} />
            <TouchableOpacity activeOpacity={0.8} style={styles.time}>
              <Ionicons
                name="camera"
                color={Colors.darkGrayText}
                size={width(4)}
              />
            </TouchableOpacity>
          </View>
          <View>
            <View style={[styles.textCont, {marginTop: height(5)}]}>
              <Text style={styles.label}>Name</Text>
              <TextInput
                placeholder="Name"
                placeholderTextColor={Colors.darkGrayText}
                style={styles.textInput}
              />
            </View>
            <View style={styles.textCont}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                placeholder="Email"
                placeholderTextColor={Colors.darkGrayText}
                style={styles.textInput}
              />
            </View>
            <View style={styles.textCont}>
              <Text style={styles.label}>Phone no.</Text>
              <TextInput
                placeholder="Phone"
                placeholderTextColor={Colors.darkGrayText}
                style={styles.textInput}
              />
            </View>
            <View style={[styles.textCont, {marginBottom: height(3)}]}>
              <Text style={styles.label}>Location</Text>
              <TextInput
                placeholder="Location"
                placeholderTextColor={Colors.darkGrayText}
                style={styles.textInput}
              />
            </View>
          </View>
        </KeyboardAwareScrollView>
        <View style={styles.buttonCont}>
          <Button
            title={'Update'}
            onPress={goBack}
            textStyle={styles.bLabel}
            containerStyle={styles.button}
          />
          <Button
            title={'Log Out'}
            onPress={() => dispatch(logout())}
            textStyle={{fontSize: width(4)}}
            containerStyle={styles.button1}
          />
        </View>
      </View>
    </Container>
  );
}
export default Login;
