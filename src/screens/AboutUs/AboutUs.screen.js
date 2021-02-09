import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import styles from './AboutUs.styles';
import Button from '../../components/Button/Button.component';
import Container from '../../components/Container/Container.component';
import {login} from '../../Redux/Actions/Auth';
import {useDispatch} from 'react-redux';
import {height, width} from 'react-native-dimension';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../utills/Colors';
function Login({navigation: {openDrawer}}) {
  return (
    <Container backgroundColor={Colors.white}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={openDrawer}>
          <Ionicons
            name="menu-outline"
            color={Colors.darkGrayText}
            size={width(7)}
          />
        </TouchableOpacity>
        <Text style={styles.bold}>About Us</Text>
        <View style={{width: width(7)}} />
      </View>
      <ScrollView contentContainerStyle={{paddingVertical: height(3)}}>
        <Text style={styles.text}>
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum. Why do we use it?
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like). Where
          does it come from? Contrary to popular belief, Lorem Ipsum is not
          simply random text. It has roots in a piece of classical Latin
          literature from 45 BC, making it over 2000 years old. Richard
          McClintock, a Latin professor at Hampden-Sydney College in Virginia,
          looked up one of the more obscure Latin words page editors now use
          Lorem Ipsum as their default model text, and a search for 'lorem
          ipsum' will uncover many web sites still in their infancy. Various
          versions have evolved over the years, sometimes by accident, sometimes
          on purpose (injected humour and the like). Where does it come from?
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words
        </Text>
      </ScrollView>
    </Container>
  );
}
export default Login;
