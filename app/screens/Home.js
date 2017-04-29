import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

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
        <View style={styles.buttonContainer}>
          <View style={styles.buttonWrapper}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Start</Text>
            </TouchableOpacity>
          </View>
        </View>
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
    flex: 3,
    flexDirection: 'row'
  },
  icon: {
    height: 150,
    width: 150,
    marginTop: 100,
    alignSelf: 'center'
  },
  headerTextContainer: {
    flex: 2,
    alignItems: 'center'
  },
  heading: {
    fontSize: 42,
    fontWeight: '200',
    color: 'rgb(124, 124,124)'
  },
  sub: {
    fontWeight: '200',
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
  },
  buttonContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'row'
  },
  buttonWrapper: {
    alignSelf: 'flex-end',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: 'rgb(183,183,183)',
    width: '100%'
  },
  button: {
    justifyContent: 'center',
    alignSelf: 'flex-end',
    paddingVertical: 14,
    width: '100%'
  },
  buttonText: {
    color: 'rgb(21, 126, 251)',
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center'
  }
});

export default Home;
