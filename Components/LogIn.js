import React from 'react';
import { AppRegistry, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

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
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      })
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
            onChangeText={(newValue) => this.setState({ username: newValue })}
          />
          <Text style={{ padding: 10, fontSize: 42 }}>
          </Text>
        </View>
        <View style={{ padding: 10 }}>
          <TextInput
            style={{ height: 40 }}
            placeholder="Password"
            onChangeText={(newValue) => this.setState({ password: newValue })}
          />
          <Text style={{ padding: 10, fontSize: 42 }}>
          </Text>
        </View>
        <Button
          onPress={this.handleLoginClick}
          title="Log In"
        />
      </View>
    );
  }
}
