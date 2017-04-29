import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

const Option = ({ icon, label, subLabel }) => {
  return (
    <View style={styles.optionMenuItem}>
      <View style={styles.optionMenuIcon}>
        <Icon name={icon} size={20} />
      </View>
      <View style={styles.optionMenuLabel}>
        <Text style={styles.optionMenuLabelText}>{label}</Text>
        <View style={styles.optionMenuLabelSubText}>
          <Text style={styles.optionMenuSubLabelText}>
            {subLabel}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Option;
