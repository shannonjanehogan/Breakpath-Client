import React from 'react';
import { AppRegistry, Button, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import { Dropdown } from 'react-native-material-dropdown';
import NavigationBar from 'react-native-navbar';

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
    const { navigate } = this.props.navigation;
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
      navigate('Sign up to Debate');
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
    const { navigate } = this.props.navigation;
    const skill = [
      { value: 'Novice' },
      { value: 'Pro' },
      { value: 'Worlds' }
    ];
    const leftButtonConfig = {
      title: 'Sign Up',
      handler: () => navigate('Sign Up'),
    };
    const rightButtonConfig = {
      title: 'Log In',
      handler: () => navigate('Log In'),
    };
    const titleConfig = {
      title: 'BreakPath',
    };
    return (
      <KeyboardAvoidingView
        style={styles.spacing}
        behavior='position'
        keyboardVerticalOffset={-140}
        >
        <View style={styles.header}>
          <NavigationBar
            leftButton={leftButtonConfig}
            title={titleConfig}
            rightButton={rightButtonConfig}
          />
        </View>
        <View style={{ padding: 10 }}>
          <TextInput
            style={{ height: 40 }}
            placeholder="First Name"
            onChangeText={(newValue) => this.setState({ first_name: newValue })}
            returnKeyType = {"next"}
            autoFocus = {true}
            onSubmitEditing={(event) => {
              this.refs.SecondInput.focus();
            }}
          />
          <Text style={{ padding: 10, fontSize: 42 }}>
          </Text>
        </View>
        <View style={{ padding: 10 }}>
          <TextInput
            ref='SecondInput'
            style={{ height: 40 }}
            placeholder="Last Name"
            onChangeText={(newValue) => this.setState({ last_name: newValue })}
            returnKeyType = {"next"}
            autoFocus = {true}
            onSubmitEditing={(event) => {
              this.refs.ThirdInput.focus();
            }}
          />
          <Text style={{ padding: 10, fontSize: 42 }}>
          </Text>
        </View>
        <View style={{ padding: 10 }}>
          <TextInput
            ref='ThirdInput'
            style={{ height: 40 }}
            placeholder="Username"
            onChangeText={(newValue) => this.setState({ username: newValue })}
            returnKeyType = {"next"}
            autoFocus = {true}
            onSubmitEditing={(event) => {
              this.refs.FourthInput.focus();
            }}
          />
          <Text style={{ padding: 10, fontSize: 42 }}>
          </Text>
        </View>
        <View style={{ padding: 10 }}>
          <TextInput
            ref='FourthInput'
            style={{ height: 40 }}
            placeholder="Email"
            onChangeText={(newValue) => this.setState({ email: newValue })}
            returnKeyType = {"next"}
            autoFocus = {true}
            onSubmitEditing={(event) => {
              this.refs.FifthInput.focus();
            }}
          />
          <Text style={{ padding: 10, fontSize: 42 }}>
          </Text>
        </View>
        <View style={{ padding: 10 }}>
          <TextInput
            ref='FifthInput'
            style={{ height: 40 }}
            placeholder="Password"
            onChangeText={(newValue) => this.setState({ password: newValue })}
            returnKeyType = {"next"}
            autoFocus = {true}
            onSubmitEditing={(event) => {
              this.refs.SixthInput.focus();
            }}
          />
          <Text style={{ padding: 10, fontSize: 42 }}>
          </Text>
        </View>
        <Dropdown
          ref='SixthInput'
          label='Skill Level'
          data={skill}
          onChangeText={(newValue) => this.setState({ skill_level: newValue })}
          selectedItemColor='#002154'
        />
        <Button
          onPress={this.handleSignUpClick}
          title="Sign Up"
          color='#002154'
        />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    marginBottom: 40,
  },
  spacing: {
    marginTop: 20,
    marginBottom: 20,
  }
});
