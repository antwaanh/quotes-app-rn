import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { BottomButton } from '../components/Button';

class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Image
            source={require('../assets/images/icon.png')}
            style={styles.icon}
          />
        </View>
        <View style={styles.headerTextContainer}>
          <Text style={styles.heading}>Quotes</Text>
          <Text style={styles.sub}>by todoist</Text>
        </View>
        <View style={styles.blurbTextContainer}>
          <Text style={styles.blurbText}>
            Create social media quotes for Twitter, Facebook, Instagram and more.
          </Text>
        </View>
        <BottomButton
          label="Start"
          press={() => this.props.navigation.navigate('my_quotes')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  iconContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  icon: {
    height: 150,
    width: 150,
    marginTop: 200,
    alignSelf: 'center'
  },
  headerTextContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  heading: {
    fontSize: 42,
    fontWeight: '300',
    color: 'rgb(124, 124,124)'
  },
  sub: {
    fontWeight: '600',
    color: 'rgb(183,183,183)'
  },
  blurbTextContainer: {
    flex: 0.5,
    justifyContent: 'flex-end'
  },
  blurbText: {
    width: 300,
    fontWeight: '200',
    paddingHorizontal: 15,
    textAlign: 'center'
  }
});

export default Home;
