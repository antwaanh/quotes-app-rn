import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

import Option from './Option';

import styles from './styles';

const OptionMenu = ({ options }) => {
  return (
    <View
      style={{
        flex: 6.3,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0,.3)'
      }}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.optionMenuContainer}>
          <View style={styles.optionMenu}>
            <View style={styles.optionMenuHeader}>
              <Text style={styles.optionMenuHeaderText}>
                Get started with the image size
              </Text>
            </View>
            {options.map(option => <Option key={option.id} {...option} />)}
          </View>
        </View>

      </View>
    </View>
  );
};

export default OptionMenu;
