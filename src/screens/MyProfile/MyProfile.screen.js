import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import Button from '../../components/Button/Button.component';
import Container from '../../components/Container/Container.component';
import {useDispatch, useSelector} from 'react-redux';
import {height, width} from 'react-native-dimension';
import Colors from '../../utills/Colors';
import styles from './MyProfile.styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import {logout} from '../../Redux/Actions/Auth';
import data from './data';
function Login({navigation: {navigate, goBack}}) {
  var type = useSelector(state => state.Auth.user.type);
  var uri =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMW0LKcpGP77VJsaCwyb2WcmkuWSo6wQKDcw&usqp=CAU';
  if (type !== 'user')
    uri =
      'https://images.unsplash.com/photo-1547404415-5eb20ddab016?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60';
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
        <Text style={styles.bold}>My Account</Text>
        <View style={{width: width(7)}} />
      </View>
      <View style={styles.main}>
        <Image source={{uri: uri}} style={styles.userImage} />
        <TouchableOpacity activeOpacity={0.8} style={styles.time}>
          <Ionicons name="camera" color={Colors.darkGrayText} size={width(4)} />
        </TouchableOpacity>
      </View>
      <View style={[styles.dataCont, type == 'user' && {marginTop: height(5)}]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.heading}>Name</Text>
          <Text style={styles.normal}>Pebble Street NFC</Text>
          <View style={styles.line} />
          <Text style={styles.heading}>About</Text>
          <Text style={styles.gray}>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs.
          </Text>
          <View style={styles.line} />
          <Text style={styles.heading}>Location</Text>
          <Text style={styles.gray}>New York, USA, 7671</Text>
          <View style={styles.line} />
          {type != 'restaurant' ? (
            <>
              <Text style={styles.heading}>Opening Time</Text>
              <Text style={styles.gray}>10:00 AM</Text>
              <View style={styles.line} />
              <Text style={styles.heading}>Closing Time</Text>
              <Text style={styles.gray}>11:00 AM</Text>
            </>
          ) : (
            <>
              <Text style={styles.heading}>Genre</Text>
              <FlatList
                data={data.genre}
                ItemSeparatorComponent={() => (
                  <View style={{height: height(1)}} />
                )}
                numColumns={5}
                contentContainerStyle={{
                  paddingVertical: height(2),
                  paddingHorizontal: '5%',
                }}
                columnWrapperStyle={{justifyContent: 'space-between'}}
                renderItem={({item}) => {
                  return (
                    <View
                      style={[
                        styles.country,
                        item.blue && {backgroundColor: Colors.blue},
                      ]}>
                      <Text
                        style={[
                          styles.white,
                          !item.blue && {color: Colors.blackText},
                        ]}>
                        {item.name}
                      </Text>
                    </View>
                  );
                }}
              />
              <View style={styles.line} />
              <Text style={[styles.heading, {color: Colors.darkGrayText}]}>
                Artist
              </Text>
              <FlatList
                data={data.artist}
                horizontal={true}
                contentContainerStyle={{
                  paddingVertical: height(2),
                  paddingHorizontal: '5%',
                }}
                ItemSeparatorComponent={() => (
                  <View style={{width: width(4)}} />
                )}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => {
                  if (item.image)
                    return (
                      <View style={{alignItems: 'center'}}>
                        <Image
                          source={{uri: item.image}}
                          style={styles.userImage1}
                        />
                        <Text style={styles.artist}>{item.name}</Text>
                      </View>
                    );
                  else
                    return (
                      <View style={{alignItems: 'center'}}>
                        <View style={styles.plus}>
                          <Entypo
                            name="plus"
                            color={Colors.blackText}
                            size={width(4)}
                          />
                        </View>
                        <Text style={styles.artist}>Add Artist</Text>
                      </View>
                    );
                }}
              />
            </>
          )}
        </ScrollView>
      </View>
    </Container>
  );
}
export default Login;
