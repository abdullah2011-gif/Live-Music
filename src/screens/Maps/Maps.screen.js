import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Platform,
} from 'react-native';
import Button from '../../components/Button/Button.component';
import Container from '../../components/Container/Container.component';
import {useDispatch} from 'react-redux';
import {width} from 'react-native-dimension';
import Colors from '../../utills/Colors';
import styles from './Maps.styles';
import data from './data';
import Carousel from 'react-native-snap-carousel';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {request, PERMISSIONS, RESULTS, check} from 'react-native-permissions';
function Login({navigation: {navigate}}) {
  const [isPermission, setIsPermission] = useState(true);
  const [loading, setLoading] = useState(true);
  var dispatch = useDispatch();
  const checkingLocationServices = async () => {
    var result = await check(
      Platform.select({
        android: PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION,
        ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
      }),
    );
    if (result == RESULTS.GRANTED) {
      setIsPermission(true);
    }
    setLoading(false);
  };
  useEffect(() => {
    checkingLocationServices();
  }, []);
  const getLocationPermissions = async () => {
    const granted = await request(
      Platform.select({
        android: PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION,
        ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
      }),
      {
        title: 'Live Music',
        message: 'Live Music would like access to your location ',
      },
    );

    if (granted === RESULTS.GRANTED) {
      setIsPermission(true);
    }
  };
  const renderCard = item => {
    return (
      <View style={styles.slide}>
        <View style={styles.carosalCont}>
          <Image
            style={styles.itemImg}
            source={{
              uri:
                'https://images.unsplash.com/photo-1525159831892-59d292d558b4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            }}
          />
          <View style={{width: '60%'}}>
            <Text style={styles.title}>Pebble street NFC</Text>
            <Text style={styles.subTitle}>New York, USA, 34234</Text>
            <Text style={styles.title1}>Live Band</Text>
            <Text style={styles.subTitle}>10:00 pm, 01,11,2020</Text>
            <Text style={styles.title1}>Genre</Text>
            <Text style={styles.subTitle}>Country, piono</Text>
          </View>
        </View>
      </View>
    );
  };
  if (loading)
    return (
      <Container style={styles.container} backgroundColor={Colors.white}>
        <ActivityIndicator size="large" />
      </Container>
    );
  else if (!isPermission)
    return (
      <Container style={styles.container} backgroundColor={Colors.white}>
        <View style={styles.permission}>
          <Image
            style={styles.loc}
            source={require('../../Assets/location.png')}
          />
          <Text style={styles.white}>Location Services</Text>
          <Text style={styles.lightWhite}>
            We need to know where you are{'\n'}in to find near by restaurant
          </Text>
          <View style={styles.flexRow}>
            <TouchableOpacity onPress={() => navigate('Home')}>
              <Text style={styles.white1}>Not Now!</Text>
            </TouchableOpacity>
            <Button
              textStyle={styles.buttonText}
              containerStyle={styles.button}
              onPress={getLocationPermissions}
              title="Allow"
            />
          </View>
        </View>
      </Container>
    );
  else
    return (
      <Container backgroundColor={Colors.white}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
            latitude: 33.6507266,
            longitude: 73.0634248,
            latitudeDelta: 0.02,
            longitudeDelta: 0.02,
          }}>
          {data.map(marker => {
            return (
              <Marker coordinate={marker}>
                <View style={styles.marker}>
                  <Image
                    style={styles.markerImg}
                    source={{
                      uri:
                        'https://images.unsplash.com/photo-1525159831892-59d292d558b4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                    }}
                  />
                  <View style={{marginLeft: width(2)}}>
                    <Text style={styles.markrtTitle}>Restro</Text>
                    <Text style={styles.markrtTitle1}>Kash Band</Text>
                    <Text style={styles.markrtTitle1}>country, piono</Text>
                  </View>
                </View>
              </Marker>
            );
          })}
        </MapView>
        <View style={styles.snapCont}>
          <Carousel
            data={[{}, {}, {}, {}, {}, {}, {}, {}]}
            loop={true}
            renderItem={renderCard}
            sliderWidth={width(100)}
            style={{alignSelf: 'center'}}
            itemWidth={width(90)}
            layout={'tinder'}
            layoutCardOffset={`9`}
          />
        </View>
      </Container>
    );
}
export default Login;
