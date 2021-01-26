import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './ProgressBar.Style';
import ProgressBarAnimated from 'react-native-progress-bar-animated';
import Colors from '../../utills/Colors';
import starImage from '../../Assets/stary.png';
import {width, height} from 'react-native-dimension';
const Component = ({title, number, progressPercentage}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{number}</Text>
      <Image source={starImage} style={styles.starImage} />
      <View>
        {/* <Text style={styles.titleText}>{title}</Text> */}
        <View
          style={{backgroundColor: 'rgba(76,150,215,0.5)', borderRadius: 20}}>
          <ProgressBarAnimated
            width={width(75)}
            height={height(1.2)}
            borderRadius={20}
            value={progressPercentage}
            backgroundColor={
              progressPercentage < 5 ? Colors.red : Colors.primaryBlue
            }
          />
        </View>
      </View>
    </View>
  );
};

export default Component;
