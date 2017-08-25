import React from 'react';
import { AppRegistry, Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import NavigationBar from 'react-native-navbar';

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
    const { navigate } = this.props.navigation;
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
      return responseJson;
      navigate('Sign up to Debate');
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
    const { navigate } = this.props.navigation;
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
      <View>
        <View style={styles.header}>
          <NavigationBar
            leftButton={leftButtonConfig}
            title={titleConfig}
            rightButton={rightButtonConfig}
          />
        </View>
        <ScrollView>
          <View style={{ padding: 10 }}>
            <TextInput
              style={{ height: 40 }}
              placeholder="Username"
              onChangeText={(newValue) => this.setState({ username: newValue })}
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
              placeholder="Password"
              onChangeText={(newValue) => this.setState({ password: newValue })}
            />
            <Text style={{ padding: 10, fontSize: 42 }}>
            </Text>
          </View>
          <Button
            onPress={this.handleLoginClick}
            title="Log In"
            color='#002154'
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    marginBottom: 20,
  },
});
