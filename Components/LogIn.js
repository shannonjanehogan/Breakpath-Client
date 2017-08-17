import React from 'react';
import { Alert, AppRegistry, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Dropdown } from 'react-native-material-dropdown';

export default class LogIn extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.handleLoginClick = this.handleLoginClick.bind(this);
  }

handleLoginClick(event) {
  event.preventDefault();
  return fetch('https://breakpath-api.herokuapp.com/login', {
    method: 'POST',
    mode: 'no-cors',
    body: {
      email: this.state.email,
      password: this.state.password,
    },
  })
  .then((response) => response.json())
  .then((responseJson) => {
    return responseJson.movies;
  })
  .catch((error) => {
    console.error(error);
  });
}
  static navigationOptions = {
    drawer: () => ({
      title: 'Log In',
    }),
  };

  render() {
    return (
      <View>
        <View style={{ padding: 10 }}>
          <TextInput
            style={{ height: 40 }}
            placeholder="Username"
          />
          <Text style={{ padding: 10, fontSize: 42 }}>
          </Text>
        </View>
        <View style={{ padding: 10 }}>
          <TextInput
            style={{ height: 40 }}
            placeholder="Password"
          />
          <Text style={{ padding: 10, fontSize: 42 }}>
          </Text>
        </View>
        <Button
          onPress={() => { Alert.alert('Account Created!')}}
          title="LOG IN"
        />
      </View>
    );
  }
}
