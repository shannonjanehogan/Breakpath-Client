import React from 'react';
import { Route, Switch } from 'react-router';
import { Alert, AppRegistry, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import { Dropdown } from 'react-native-material-dropdown';
import SignUp from './Components/SignUp.js';
import LogIn from './Components/LogIn.js'
import DebateSignUp from './Components/DebateSignUp.js'

const App = DrawerNavigator({
  SignUp: { screen: SignUp },
  LogIn: { screen: LogIn },
  DebateSignUp: { screen: DebateSignUp }
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
