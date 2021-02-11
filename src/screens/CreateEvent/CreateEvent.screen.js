import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
  Platform,
} from 'react-native';
import styles from './CreateEvent.styles';
import data from './data';
import Container from '../../components/Container/Container.component';
import TextInput from '../../components/TextInput/TextInput.component';
import Button from '../../components/Button/Button.component';
import Colors from '../../utills/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DateTimePicker from '@react-native-community/datetimepicker';
import {height, width} from 'react-native-dimension';
import Modal from 'react-native-modal';
import moment from 'moment';
const defaultState = {
  date: '',
  startingTime: '',
  endingTime: '',
};
function Dashboard({navigation: {navigate, goBack}}) {
  const [modalVis, setModalVis] = useState(false);
  const [selectedItem, setSelectedItem] = useState(-1);
  const [search, setSearch] = useState('Pebble Street NFC');
  const [state, setState] = useState(defaultState);

  const [mode, setMode] = useState('date');
  const [modeType, setModeType] = useState('date');
  const [show, setShow] = useState(false);
const [iosDate,setIosDate] = useState(new Date())
  const onChange = (event, selectedDate) => {
    if (event.type == 'set') {
      setShow(false);
      const currentDate = selectedDate || new Date();
      if (modeType == 'date')
        settingState(moment(currentDate).format('DD-MM-YYYY'), 'date');
      if (modeType == 'startingTime')
        settingState(moment(currentDate).format('hh:mm A'), 'startingTime');
      if (modeType == 'endingTime')
        settingState(moment(currentDate).format('hh:mm A'), 'endingTime');
    }else{
      if(Platform.OS == 'ios')
    setIosDate(selectedDate)
    }
  };

  const settingState = (value, key) => {
    setState(state => ({...state, [key]: value}));
  };

  const showMode = (currentMode, type) => {
    setShow(true);
    setMode(currentMode);
    setModeType(type);
  };

  const showDatepicker = () => {
    showMode('date', 'date');
  };

  const showTimepicker = type => {
    showMode('time', type);
  };
  const selectItems = index => {
    setModalVis(true);
    setSelectedItem(index);
  };
  const hideModal = () => {
    setModalVis(false);
    setSelectedItem(-1);
    setShow(false);
    setState(defaultState);
  };
  const renderItem = ({item, index}) => {
    return (
      <View style={styles.itemCont}>
        <Image style={styles.image} source={{uri: item.image}} />
        <Text style={styles.normal}>{item.name}</Text>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => selectItems(index)}
          style={[
            styles.following,
            index == selectedItem && {backgroundColor: Colors.blue},
          ]}>
          <Text
            style={[
              styles.blue,
              index == selectedItem && {color: Colors.white},
            ]}>
            List
          </Text>
        </TouchableOpacity>
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
        <Text style={styles.bold}>Create Event</Text>
        <View style={{width: width(7)}} />
      </View>
      <TextInput
        iconSize={width(5)}
        containerStyle={{height: height(6), marginTop: height(3), width: '90%'}}
        icon="search-outline"
        value={search}
        placeholder="Search Event"
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.flexRow}>
          <Text style={styles.grayText}>
            Search the result for "Pebble Street NFC"
          </Text>
          <Text style={styles.grayText}>45 Results</Text>
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
      <Modal isVisible={modalVis} onBackdropPress={hideModal}>
        <View style={styles.followingModal}>
          <TouchableOpacity onPress={hideModal} style={styles.closeCont}>
            <Ionicons name="close" color={Colors.white} size={width(4)} />
          </TouchableOpacity>
          <Text style={styles.modalHeading}>Date</Text>
          <TouchableOpacity onPress={showDatepicker} style={styles.dateCont}>
            <Text
              style={[styles.lightWhite, state.date && {color: Colors.white}]}>
              {state.date ? state.date : 'dd-mm-yyyy'}
            </Text>
            <Ionicons
              name="calendar-outline"
              color={Colors.white}
              size={width(4)}
            />
          </TouchableOpacity>
          <View style={styles.line1} />
          <View style={styles.startEnd}>
            <View style={{width: '45%'}}>
              <Text style={styles.modalHeading}>Start Time</Text>
              <TouchableOpacity
                onPress={() => showTimepicker('startingTime')}
                style={styles.dateCont}>
                <Text
                  style={[
                    styles.lightWhite,
                    state.startingTime && {color: Colors.white},
                  ]}>
                  {state.startingTime ? state.startingTime : '00:00 am'}
                </Text>
                <Ionicons
                  name="calendar-outline"
                  color={Colors.white}
                  size={width(4)}
                />
              </TouchableOpacity>
              <View style={styles.line1} />
            </View>
            <View style={{width: '45%'}}>
              <Text style={styles.modalHeading}>End Time</Text>
              <TouchableOpacity
                onPress={() => showTimepicker('endingTime')}
                style={styles.dateCont}>
                <Text
                  style={[
                    styles.lightWhite,
                    state.endingTime && {color: Colors.white},
                  ]}>
                  {state.endingTime ? state.endingTime : '00:00 am'}
                </Text>
                <Ionicons
                  name="calendar-outline"
                  color={Colors.white}
                  size={width(4)}
                />
              </TouchableOpacity>
              <View style={styles.line1} />
            </View>
          </View>
          <Button
            title="List"
            onPress={hideModal}
            textStyle={styles.label}
            containerStyle={styles.button}
          />
        </View>
        {show && (
          <View
            style={{
              backgroundColor: Colors.white,
              left: 0,
              position: 'absolute',
              bottom: 0,
              right: 0,
            }}>
            {Platform.OS == 'ios' && (
              <View style={styles.iosDate}>
                <TouchableOpacity onPress={() => {setIosDate(new Date());setShow(false)}}>
                  <Text style={styles.date}>cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>onChange({type:'set'},iosDate)}>
                  <Text style={styles.date}>set</Text>
                </TouchableOpacity>
              </View>
            )}
            <DateTimePicker
              isVisible={show}
              value={Platform.OS=='ios'? iosDate:new Date()}
              mode={mode}
              is24Hour={false}
              display="spinner"
              accessibilityViewIsModal={false}
              onChange={onChange}
            />
          </View>
        )}
      </Modal>
    </Container>
  );
}
export default Dashboard;
