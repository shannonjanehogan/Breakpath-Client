import React from 'react';
import { AppRegistry, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Dropdown } from 'react-native-material-dropdown';

export default class SignUp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      username: '',
      skill_level: 'nov',
    };
    this.handleSignUpClick = this.handleSignUpClick.bind(this);
  }
  static navigationOptions = {
    drawer: () => ({
      title: 'Sign Up',
    }),
  };

  handleSignUpClick(event) {
    event.preventDefault();
    return fetch('https://breakpath-api.herokuapp.com/signup', {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        username: this.state.username,
        first_name: this.state.first_name,
        last_name: this.state.last_name,
      }),
    })
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
    const skill = [
      { value: 'Novice' },
      { value: 'Pro' },
      { value: 'Worlds' }
    ];
    return (
      <View>
        <View style={{ padding: 10 }}>
          <TextInput
            style={{ height: 40 }}
            placeholder="First Name"
            onChangeText={(newValue) => this.setState({ first_name: newValue })}
          />
          <Text style={{ padding: 10, fontSize: 42 }}>
          </Text>
        </View>
        <View style={{ padding: 10 }}>
          <TextInput
            style={{ height: 40 }}
            placeholder="Last Name"
            onChangeText={(newValue) => this.setState({ last_name: newValue })}
          />
          <Text style={{ padding: 10, fontSize: 42 }}>
          </Text>
        </View>
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
            placeholder="Email"
            onChangeText={(newValue) => this.setState({ email: newValue })}
          />
          <Text style={{ padding: 10, fontSize: 42 }}>
          </Text>
        </View>
        <Dropdown
          label='Skill Level'
          data={skill}
          onChangeText={(newValue) => this.setState({ skill_level: newValue })}
        />
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
          onPress={this.handleSignUpClick}
          title="Sign Up"
        />
      </View>
    );
  }
}
