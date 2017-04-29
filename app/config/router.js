import React from 'react';
import { StackNavigator } from 'react-navigation';

import Home from '../screens/Home';
import MyQuotes from '../screens/MyQuotes';

export const Navigator = StackNavigator(
  {
    home: {
      screen: Home,
      navigationOptions: ({ navigation }) => ({
        header: null
      })
    },
    my_quotes: {
      screen: MyQuotes
    }
  },
  {
    mode: 'modal'
  }
);
