import React from 'react';
import {
  ActionSheet,
  View,
  Text,
  Image,
  Modal,
  StyleSheet
} from 'react-native';

import { ModalButton } from '../components/Button';

class MyQuotes extends React.Component {
  static navigationOptions = {
    title: 'My Quotes',
    headerLeft: null,
    gesturesEnabled: false,
    headerStyle: {
      backgroundColor: 'white'
    }
  };
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false
    };
  }

  render() {
    return (
      <View style={ss.container}>
        <View style={ss.emptyContainer}>
          <Image
            source={require('../assets/images/quotes.png')}
            style={ss.quotes}
          />
          <Text style={ss.text}>No Quotes yet</Text>
          <Text style={ss.sub}>Create your first one</Text>
        </View>
        <ModalButton icon="ios-plus" />
      </View>
    );
  }
}

const ss = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    marginTop: 10
  },
  sub: {
    fontSize: 11,
    fontWeight: '400',
    color: 'rgb(21, 126, 251)'
  },
  quotes: {
    marginTop: -100,
    height: 120,
    width: 120
  }
});

export default MyQuotes;
