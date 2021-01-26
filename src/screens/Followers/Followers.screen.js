import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import styles from './Followers.styles';
import data from './data';
import Container from '../../components/Container/Container.component';
import TextInput from '../../components/TextInput/TextInput.component';
import Button from '../../components/Button/Button.component';
import Colors from '../../utills/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import {height, width} from 'react-native-dimension';
import Modal from 'react-native-modal';
function Dashboard({navigation: {navigate, goBack}}) {
  const [modalVis, setModalVis] = useState(false);
  const renderItem = ({item}) => {
    return (
      <View style={styles.itemCont}>
        <Image style={styles.image} source={{uri: item.image}} />
        <Text style={styles.normal}>{item.name}</Text>
        <TouchableOpacity
          onPress={() => setModalVis(true)}
          style={styles.following}>
          <Text style={styles.blue}>Following</Text>
        </TouchableOpacity>
        <Entypo
          name="dots-three-vertical"
          color={Colors.darkGrayText}
          size={width(5)}
        />
      </View>
    );
  };
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
        <Text style={styles.bold}>Followers</Text>
        <View style={{width: width(7)}} />
      </View>
      <TextInput
        iconSize={width(5)}
        containerStyle={{height: height(6), marginTop: height(3), width: '90%'}}
        icon="search-outline"
        placeholder="Search Followers"
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.flexRow}>
          <Text style={styles.bold}>All Followers</Text>
          <Text style={styles.grayText}>22</Text>
        </View>
        <View style={styles.line} />
        <FlatList
          contentContainerStyle={{paddingVertical: height(2.5)}}
          ItemSeparatorComponent={() => <View style={{height: height(2)}} />}
          data={data}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
        />
      </ScrollView>
      <Modal isVisible={modalVis} onBackdropPress={() => setModalVis(false)}>
        <View style={styles.followingModal}>
          <Image
            style={styles.image1}
            source={{
              uri:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuIbv-7JSgC23hcGq8qDRBpFzdMBEw8urHdQ&usqp=CAU',
            }}
          />
          <Text style={styles.white1}>Remove Follower?</Text>
          <Button
            containerStyle={{
              backgroundColor: Colors.white,
              marginTop: height(4),
            }}
            title="Remove"
            textStyle={{color: Colors.blue, fontSize: width(3.8)}}
          />
          <TouchableOpacity onPress={() => setModalVis(false)}>
            <Text style={styles.white2}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </Container>
  );
}
export default Dashboard;
