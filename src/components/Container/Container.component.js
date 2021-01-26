import React, {Fragment} from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';

const Component = ({
  backgroundColor,
  children,
  topColor,
  bar,
  bottomColor,
  style,
}) => {
  return (
    <Fragment>
      <SafeAreaView
        style={{backgroundColor: topColor ? topColor : backgroundColor}}
      />
      <StatusBar
        barStyle={bar ? bar : 'dark-content'}
        backgroundColor={topColor ? topColor : backgroundColor}
      />
      <View style={[{flex: 1, backgroundColor: backgroundColor}, style]}>
        {children}
      </View>
      <SafeAreaView
        style={{backgroundColor: bottomColor ? bottomColor : backgroundColor}}
      />
    </Fragment>
  );
};

export default Component;
