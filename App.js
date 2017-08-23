import React from 'react';
import { Route, Switch } from 'react-router';
import { Alert, AppRegistry, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { DrawerNavigator, DrawerView } from 'react-navigation';
import { Dropdown } from 'react-native-material-dropdown';
import SignUp from './Components/SignUp.js';
import LogIn from './Components/LogIn.js'
import DebateSignUp from './Components/DebateSignUp.js'
import HomeScreen from './Components/Home.js'
import SortedRooms from './Components/SortedRooms.js'

const App = DrawerNavigator({
  'Home Screen': { screen: HomeScreen },
  'Sign Up': { screen: SignUp },
  'Log In': { screen: LogIn },
  'Sign up to Debate': { screen: DebateSignUp },
  'Sorted Rooms': { screen: SortedRooms },
},
{
  drawerWidth: 200,
  contentOptions: {
    activeTintColor: '#3498DB',
    style: {
      marginTop: 20,
    }
  }
});

// AppRegistry.registerComponent('App', () => App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
