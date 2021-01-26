import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import Button from '../../components/Button/Button.component';
import TextInput from '../../components/TextInput/TextInput.component';
import Container from '../../components/Container/Container.component';
import {useDispatch} from 'react-redux';
import {height, width} from 'react-native-dimension';
import Colors from '../../utills/Colors';
import styles from './Calandar.styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CalendarPicker from 'react-native-calendar-picker';
import moment from 'moment';
function Login({navigation: {navigate, goBack}}) {
  const calandarRef = useRef(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  var dispatch = useDispatch();
  return (
    <Container backgroundColor={Colors.white}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.flexRow1}>
            <TouchableOpacity onPress={goBack}>
              <MaterialIcons name="arrow-back-ios" size={width(5)} />
            </TouchableOpacity>
            <Text style={styles.black1}>
              {moment(currentMonth).format('MMMM, YYYY')}
            </Text>
          </View>
          <View style={styles.flexRow1}>
            <TouchableOpacity
              onPress={() => calandarRef.current.handleOnPressPrevious()}>
              <MaterialIcons name="arrow-back-ios" size={width(5)} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => calandarRef.current.handleOnPressNext()}>
              <MaterialIcons name="arrow-forward-ios" size={width(5)} />
            </TouchableOpacity>
          </View>
        </View>
        <CalendarPicker
          ref={calandarRef}
          customDayHeaderStyles={prop => ({
            textStyle: {color: Colors.blue},
          })}
          selectedDayStyle={{backgroundColor: Colors.blue}}
          selectedDayTextColor={'#fff'}
          selectedStartDate={new Date()}
          onMonthChange={date => setCurrentMonth(date)}
          todayBackgroundColor="rgba(76,150,215,0.5)"
          todayTextStyle={{color: '#fff', backgroundColor: 'transparent'}}
          dayLabelsWrapper={{borderWidth: 0, borderColor: 'transparent'}}
          onDateChange={() => {}}
        />
        <FlatList
          data={[{}, {}, {}, {}, {}, {}, {}]}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingVertical: height(3)}}
          ItemSeparatorComponent={() => <View style={{height: height(2)}} />}
          renderItem={({item}) => {
            return (
              <View style={styles.subs}>
                <View style={styles.flexRow}>
                  <Text style={styles.black}>Restaurant Name</Text>
                  <Text style={styles.blue}>April 18th @ 8:30pm</Text>
                </View>
                <Text style={styles.blue1}>Band Name</Text>
              </View>
            );
          }}
        />
      </ScrollView>
    </Container>
  );
}
export default Login;
