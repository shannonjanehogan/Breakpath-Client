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

// default app on create react native app
// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>BLAH</Text>
//       </View>
//     );
//   }
// }

// how to set up redux from https://shellmonger.com/2017/05/22/adding-redux-to-the-react-native-tasklist-app/
// import React, { Component } from 'react';
// import { Provider } from 'react-redux';
// import store from './redux/store';
// import TaskListApp from './TaskListApp';
//
// class Application extends Component {
//   render() {
//     return (
//       <Provider store={store}>
//         <TaskListApp />
//       </Provider>
//     );
//   }
// }
//
// export default Application;

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
