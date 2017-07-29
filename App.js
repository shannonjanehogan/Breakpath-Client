import React from 'react';
import { AppRegistry, StyleSheet, Text, TextInput, View } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View>
        <View style={{padding: 10}}>
          <TextInput
            style={{height: 40}}
            placeholder="First Name"
          />
          <Text style={{padding: 10, fontSize: 42}}>
          </Text>
        </View>
        <View style={{padding: 10}}>
          <TextInput
            style={{height: 40}}
            placeholder="Last Name"
          />
          <Text style={{padding: 10, fontSize: 42}}>
          </Text>
        </View>
        <View style={{padding: 10}}>
          <TextInput
            style={{height: 40}}
            placeholder="Email"
          />
          <Text style={{padding: 10, fontSize: 42}}>
          </Text>
        </View>
        <View style={{padding: 10}}>
          <TextInput
            style={{height: 40}}
            placeholder="Passoword"
          />
          <Text style={{padding: 10, fontSize: 42}}>
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
