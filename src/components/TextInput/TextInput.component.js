import React from 'react';
import {Text, TextInput, View} from 'react-native';
import styles from './TextInput.Styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../utills/Colors';
import {width} from 'react-native-dimension';
const Component = ({
  containerStyle,
  value,
  onChangeText,
  placeholder,
  icon,
  iconSize,
  onFocus,
  onBlur,
  secureTextEntry,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Ionicons
        name={icon}
        color={Colors.grayText}
        size={iconSize ? iconSize : width(7)}
      />
      <TextInput
        value={value}
        onFocus={onFocus}
        secureTextEntry={secureTextEntry}
        onBlur={onBlur}
        placeholder={placeholder}
        placeholderTextColor={Colors.grayText}
        onChangeText={onChangeText}
        style={styles.text}
      />
    </View>
  );
};

export default Component;
