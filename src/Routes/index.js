import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login/Login.screen';
import Landing from '../screens/Landing/Landing.screen';
import Tab from './Tab';
import Signup from '../screens/Signup/Signup.screen';
import Subscription from '../screens/Subscription/Subscription.screen';
import Splash from '../screens/Splash/Splash.screen';
import {useSelector} from 'react-redux';
const Stack = createStackNavigator();
function Routes() {
  var [splash, setSplash] = useState(true);
  var isLogin = useSelector(state => state.Auth.isLogin);
  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 3000);
  }, []);
  return (
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
        <Stack.Navigator initialRouteName="Search" headerMode="none">
          <Stack.Screen name="Tab" component={Tab} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
export default Routes;
