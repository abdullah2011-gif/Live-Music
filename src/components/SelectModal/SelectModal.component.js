import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {height, width} from 'react-native-dimension';
import Modal from 'react-native-modal';
import styles from './SelectModal.Styles';
import ImagePicker from 'react-native-image-crop-picker';
const Component = ({onCapture, visible, toggle}) => {
  const onGalleryPress = () => {
    try {
      ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
        includeBase64: true,
      }).then(image => {
        onCapture(image);
      });
    } catch (error) {}
  };
  const onCameraPress = () => {
    try {
      ImagePicker.openCamera({
        width: 300,
        // useFrontCamera: true,
        height: 400,
        cropping: true,
        includeBase64: true,
      }).then(image => {
        onCapture(image);
      });
    } catch (error) {}
  };
  return (
    <Modal
      onBackdropPress={toggle}
      onDismiss={toggle}
      animationIn="pulse"
      animationInTiming={1500}
      animationOutTiming={500}
      animationOut="zoomOutDown"
      onSwipeComplete={toggle}
      onSwipeCancel={toggle}
      swipeDirection="down"
      swipeThreshold={20}
      onBackButtonPress={toggle}
      style={{justifyContent: 'flex-end'}}
      isVisible={visible}>
      <View style={{width: width(95), alignSelf: 'center'}}>
        <View style={styles.mainCont}>
          <TouchableOpacity
            onPress={onCameraPress}
            activeOpacity={0.4}
            style={styles.buttonCont}>
            <Text style={styles.blueText}>Open Camera</Text>
          </TouchableOpacity>
          <View style={styles.line} />
          <TouchableOpacity
            onPress={onGalleryPress}
            activeOpacity={0.4}
            style={styles.buttonCont}>
            <Text style={styles.blueText}>Open Gallery</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={toggle}
          activeOpacity={0.7}
          style={styles.cancilCont}>
          <Text style={styles.redText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default Component;
