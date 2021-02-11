import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login/Login.screen';
import Landing from '../screens/Landing/Landing.screen';
import Tab from './Tab';
import Signup from '../screens/Signup/Signup.screen';
import Subscription from '../screens/Subscription/Subscription.screen';
import AboutUs from '../screens/AboutUs/AboutUs.screen';
import Splash from '../screens/Splash/Splash.screen';
import PrivacyPoliecy from '../screens/PrivacyPoliecy/PrivacyPoliecy.screen';
import TermsCondition from '../screens/TermsCondition/TermsCondition.screen';
import ContactUs from '../screens/ContactUs/ContactUs.screen';
import {useDispatch, useSelector} from 'react-redux';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from './CustomDrawer';
import {SafeAreaView} from 'react-native';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
function Routes() {
  var [splash, setSplash] = useState(true);
  var isLogin = useSelector(state => state.Auth.isLogin);
  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 3000);
  }, []);
  var dispatch = useDispatch();
  return (
    <SafeAreaView style={{flex:1}}>
      <NavigationContainer>
        {splash ? (
          <Stack.Navigator initialRouteName="Search" headerMode="none">
            <Stack.Screen name="Splash" component={Splash} />
          </Stack.Navigator>
        ) : !isLogin ? (
          <Stack.Navigator initialRouteName="Landing" headerMode="none">
            <Stack.Screen name="Landing" component={Landing} />
            <Stack.Screen name="Subscription" component={Subscription} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
          </Stack.Navigator>
        ) : (
          <Drawer.Navigator
            drawerContent={props => CustomDrawer(props, dispatch)}
            initialRouteName="Tab">
            <Drawer.Screen
              options={{
                drawerLabel: () => null,
                title: null,
                drawerIcon: () => null,
              }}
              name="Tab"
              component={Tab}
            />
            <Drawer.Screen name="AboutUs" component={AboutUs} />
            <Drawer.Screen name="TermsCondition" component={TermsCondition} />
            <Drawer.Screen name="PrivacyPoliecy" component={PrivacyPoliecy} />
            <Drawer.Screen name="ContactUs" component={ContactUs} />
          </Drawer.Navigator>
        )}
      </NavigationContainer>
    </SafeAreaView>
  );
}
export default Routes;
