import React from 'react';
import { Alert, AppRegistry, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import { Dropdown } from 'react-native-material-dropdown';
import NavigationBar from 'react-native-navbar';

export default class DebateSignUp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      partner_preference: null,
      debate_preference: 'debate_or_judge',
      skill_level: 'nov',
    };
    this.handleDebateSignUpClick = this.handleDebateSignUpClick.bind(this);
  }

  static navigationOptions = {
    drawer: () => ({
      title: 'Debate Sign Up',
    }),
  };

  handleDebateSignUpClick(event) {
    event.preventDefault();
    return fetch('https://breakpath-api.herokuapp.com/sign_up_preferences', {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify({
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        partner_preference: this.state.partner_preference,
        skill_level: this.state.skill_level,
        debate_preference: this.state.debate_preference,
      }),
    })
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
      push(SortedRooms);
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
    const preferences = [
      { value: 'Debate' },
      { value: 'Judge' },
      { value: 'Indifferent' }
    ];
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
      <View>
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
            placeholder="Partner Preference"
            onChangeText={(newValue) => this.setState({ partner_preference: newValue })}
          />
          <Text style={{ padding: 10, fontSize: 42 }}>
          </Text>
        </View>
        <Dropdown
          label='Debate Preference'
          data={preferences}
          onChangeText={(newValue) => this.setState({ debate_preference: newValue })}
        />
        <Dropdown
          label='Skill Level'
          data={skill}
          onChangeText={(newValue) => this.setState({ skill_level: newValue })}
        />
        <Button
          onPress={this.handleDebateSignUpClick}
          title="Sign up to debate"
        />
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
