import React from 'react';
import { Alert, AppRegistry, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import { Dropdown } from 'react-native-material-dropdown';

export default class SignUp extends React.Component {
  static navigationOptions = {
    drawer: () => ({
      title: 'Sign Up',
    }),
  };

  render() {
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
            placeholder="Email"
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
          title="SIGN UP"
        />
      </View>
    );
  }
}
