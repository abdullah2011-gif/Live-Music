import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import styles from './Search.styles';
import data from './data';
import Container from '../../components/Container/Container.component';
import TextInput from '../../components/TextInput/TextInput.component';
import Colors from '../../utills/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {height, width} from 'react-native-dimension';
function Dashboard({navigation: {navigate}}) {
  const [isSearching, setIsSearching] = useState(false);
  const renderItem = ({item}) => {
    return (
      <View style={styles.itemCont}>
        <Image style={styles.image} source={{uri: item.image}} />
        <View style={{width: '70%'}}>
          <Text style={styles.bold1}>{item.title}</Text>
          <Text style={styles.normal}>{item.desc}</Text>
        </View>
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
        <Text style={styles.bold}>Search</Text>
        <View style={{width: width(7)}} />
      </View>
      <TextInput
        iconSize={width(5)}
        onFocus={() => setIsSearching(true)}
        onBlur={() => setIsSearching(false)}
        containerStyle={{height: height(6), marginTop: height(3), width: '90%'}}
        icon="search-outline"
        placeholder="Restaurant"
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        {isSearching && (
          <View style={styles.flexRow}>
            <View style={styles.country}>
              <Text style={styles.white}>Live Music</Text>
            </View>
            <View style={styles.country}>
              <Text style={styles.white}>Restaurant</Text>
            </View>
            <View style={styles.country}>
              <Text style={styles.white}>Genre</Text>
            </View>
          </View>
        )}
        <View style={styles.flexRow}>
          <Text style={styles.grayText}>
            Search the result for "restaurant"
          </Text>
          <Text style={styles.grayText}>45 Results</Text>
        </View>
        <View style={styles.flexRow}>
          <Text style={styles.bold}>Recomended</Text>
          <Text style={styles.grayText}>View All</Text>
        </View>
        <View style={styles.line} />
        <FlatList
          contentContainerStyle={{paddingVertical: height(2.5)}}
          ItemSeparatorComponent={() => <View style={{height: height(2)}} />}
          data={data}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
        />
        <View style={styles.flexRow}>
          <Text style={styles.bold}>Near By</Text>
          <Text style={styles.grayText}>View All</Text>
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
    </Container>
  );
}
export default Dashboard;
