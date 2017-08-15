import React from 'react';
import { Alert, AppRegistry, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import { Dropdown } from 'react-native-material-dropdown';

export default class LogIn extends React.Component {
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
