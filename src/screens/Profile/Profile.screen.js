import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Button from '../../components/Button/Button.component';
import Container from '../../components/Container/Container.component';
import {useDispatch, useSelector} from 'react-redux';
import {height, width} from 'react-native-dimension';
import Colors from '../../utills/Colors';
import styles from './Profile.styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {logout} from '../../Redux/Actions/Auth';
function Login({navigation: {navigate}}) {
  var type = useSelector(state => state.Auth.user.type);
  var uri =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMW0LKcpGP77VJsaCwyb2WcmkuWSo6wQKDcw&usqp=CAU';
  if (type !== 'user')
    uri =
      'https://images.unsplash.com/photo-1547404415-5eb20ddab016?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60';
  var dispatch = useDispatch();
  return (
    <Container backgroundColor={Colors.white}>
      <Text style={styles.bold}>My Account</Text>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => navigate('EditProfile')}
        style={styles.main}>
        <Image source={{uri: uri}} style={styles.userImage} />
        <TouchableOpacity activeOpacity={0.8} style={styles.time}>
          <Ionicons name="camera" color={Colors.darkGrayText} size={width(4)} />
        </TouchableOpacity>
      </TouchableOpacity>
      <View style={[styles.dataCont, type == 'user' && {marginTop: height(5)}]}>
        <TouchableOpacity
          onPress={() => navigate('MyProfile')}
          style={styles.single}>
          <Ionicons
            name="person-circle-sharp"
            color={Colors.blackText}
            size={width(7)}
          />
          <Text style={styles.grayBold1}>My Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.single}>
          <Ionicons
            name="star-sharp"
            color={Colors.blackText}
            size={width(7)}
          />
          <Text style={styles.grayBold1}>
            {type != 'restaurant' ? 'My Reviews' : 'Reviews'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigate('Notifications')}
          style={styles.single}>
          <Ionicons
            name="ios-notifications-sharp"
            color={Colors.blackText}
            size={width(7)}
          />
          <Text style={styles.grayBold1}>Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigate('Followers')}
          style={styles.single}>
          <Ionicons name="heart" color={Colors.blackText} size={width(7)} />
          <Text style={styles.grayBold1}>
            {type != 'restaurant' ? 'My Followers' : 'Followers'}
          </Text>
        </TouchableOpacity>
        {type == 'restaurant' && (
          <TouchableOpacity
            onPress={() => navigate('CreateEvent')}
            style={styles.single}>
            <Feather
              name="external-link"
              color={Colors.blackText}
              size={width(7)}
            />
            <Text style={styles.grayBold1}>Create Event</Text>
          </TouchableOpacity>
        )}
        {type == 'liveMusic' && (
          <TouchableOpacity
            onPress={() => navigate('CreateEvent')}
            style={styles.single}>
            <Feather
              name="external-link"
              color={Colors.blackText}
              size={width(7)}
            />
            <Text style={styles.grayBold1}>Link to Restaurant</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          onPress={() => navigate('ForgotPassword')}
          style={styles.single}>
          <Ionicons
            name="lock-closed-sharp"
            color={Colors.blackText}
            size={width(7)}
          />
          <Text style={styles.grayBold1}>Change Password</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => dispatch(logout())}
          style={styles.single}>
          <Ionicons
            name="md-log-out"
            color={Colors.blackText}
            size={width(7)}
          />
          <Text style={styles.grayBold1}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
}
export default Login;
