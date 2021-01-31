import React from 'react';
import {Text, TextInput, View} from 'react-native';
import styles from './TextInput.Styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../utills/Colors';
import {height, width} from 'react-native-dimension';
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
  multiline,
  inputStyle,
}) => {
  console.log(height(100))
  return (
    <View style={[styles.container, containerStyle]}>
      {icon && (
        <Ionicons
          name={icon}
          color={Colors.grayText}
          size={iconSize ? iconSize : width(7)}
        />
      )}
      <TextInput
        value={value}
        onFocus={onFocus}
        secureTextEntry={secureTextEntry}
        onBlur={onBlur}
        placeholder={placeholder}
        multiline={multiline}
        placeholderTextColor={Colors.grayText}
        onChangeText={onChangeText}
        textAlignVertical={multiline && 'top'}
        style={[styles.text, inputStyle]}
      />
    </View>
  );
};

export default Component;
