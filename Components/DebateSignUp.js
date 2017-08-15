import React from 'react';
import { Alert, AppRegistry, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import { Dropdown } from 'react-native-material-dropdown';

export default class DebateSignUp extends React.Component {
  static navigationOptions = {
    drawer: () => ({
      title: 'Debate Sign Up',
    }),
  };


  render() {
    let pref = [{
      value: 'Debate',
    }, {
      value: 'Judge',
    }, {
      value: 'Indifferent',
    }];
    let skill = [{
      value: 'Novice',
    }, {
      value: 'Pro',
    }, {
      value: 'Worlds',
    }];
    return (
      <View>
        <View style={{ padding: 10 }}>
          <TextInput
            style={{ height: 40 }}
            placeholder="First Name"
          />
          <Text style={{ padding: 10, fontSize: 42 }}>
          </Text>
        </View>
        <View style={{ padding: 10 }}>
          <TextInput
            style={{ height: 40 }}
            placeholder="Last Name"
          />
          <Text style={{ padding: 10, fontSize: 42 }}>
          </Text>
        </View>
        <View style={{ padding: 10 }}>
          <TextInput
            style={{ height: 40 }}
            placeholder="Partner Preference"
          />
          <Text style={{ padding: 10, fontSize: 42 }}>
          </Text>
        </View>
        <Dropdown
          label='Debate Preference'
          data={pref}
        />
        <Dropdown
          label='Skill Level'
          data={skill}
        />
        <Button
          onPress={() => { Alert.alert('Account Created!')}}
          title="SIGN UP TO DEBATE"
        />
      </View>
    );
  }
}
