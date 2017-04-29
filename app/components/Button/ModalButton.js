import React from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import { OptionMenu } from '../OptionMenu';
import styles from './styles';

class ModalButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
      animationType: 'fade',
      menuOptions: [
        {
          id: 1,
          icon: 'logo-instagram',
          label: 'Instagram',
          subLabel: 'Square · 1080x1080px'
        },
        {
          id: 2,
          icon: 'logo-facebook',
          label: 'Facebook',
          subLabel: 'Wide · 1200x628px'
        },
        {
          id: 3,
          icon: 'logo-twitter',
          label: 'Twitter',
          subLabel: 'Wide · 1024x512px'
        },
        {
          id: 4,
          icon: 'logo-googleplus',
          label: 'Google Plus',
          subLabel: 'Wide · 1024x512px'
        }
      ]
    };
  }
  render() {
    return (
      <View>
        <Modal
          animationType={this.state.animationType}
          visible={this.state.modalVisible}
          transparent={true}>
          <OptionMenu options={this.state.menuOptions} />
          <View style={styles.buttonContainer}>
            <View style={[styles.buttonWrapper, { backgroundColor: 'white' }]}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => this._toggleModal()}>
                <Icon
                  style={styles.icon}
                  name="ios-close"
                  size={40}
                  color="rgb(21, 126, 251)"
                />
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonWrapper}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this._toggleModal()}>
              {this.props.label
                ? <Text style={styles.buttonText}>{this.props.label}</Text>
                : <Icon
                    style={styles.icon}
                    name="ios-add"
                    size={40}
                    color="rgb(21, 126, 251)"
                  />}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  _toggleModal() {
    console.log(this.state.modalVisible);
    this.setState({ modalVisible: !this.state.modalVisible });
  }
}

export default ModalButton;
