import React from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import Container from '../../components/Container/Container.component';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../utills/Colors';
import {height, width} from 'react-native-dimension';
import styles from './Notifications.styles';
import data from './data';
export default function Notifications({navigation: {goBack}}) {
  return (
    <Container backgroundColor={Colors.white}>
      <View style={styles.header}>
        <TouchableOpacity style={{width: width(6)}} onPress={() => goBack()}>
          <AntDesign name="left" color={Colors.blackText} size={width(5)} />
        </TouchableOpacity>
        <Text style={styles.black}>Notifications</Text>
      </View>
      <FlatList
        data={data}
        ItemSeparatorComponent={() => <View style={{height: height(2)}} />}
        contentContainerStyle={{
          paddingVertical: height(5),
        }}
        renderItem={({item}) => {
          return (
            <View style={styles.subs}>
              <View style={styles.subs1}>
                <Ionicons
                  name="notifications"
                  color={Colors.grayText}
                  size={width(7)}
                />
                <Text style={styles.not}>{item}</Text>
              </View>
              <Text style={styles.date}>31 st Dec, 20, 09:24 am</Text>
            </View>
          );
        }}
      />
    </Container>
  );
}
