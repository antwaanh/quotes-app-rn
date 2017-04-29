import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

const BottomButton = ({ label, icon, press }) => {
  return (
    <View style={styles.buttonContainer}>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity style={styles.button} onPress={press}>
          {label
            ? <Text style={styles.buttonText}>{label}</Text>
            : <Icon
                style={styles.icon}
                name="ios-add"
                size={40}
                color="rgb(21, 126, 251)"
              />}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BottomButton;
