import React from 'react';
import { Alert, AppRegistry, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Picker from 'react-native-picker';

// export default class LogIn extends React.Component {
//   // static navigationOptions = {
//   //   title: 'Sign Up',
//   // };
//   constructor(props) {
//     super(props);
//     this.state = {text: ''};
//   }
//
//   render() {
//     return (
//       <View>
//         <View style={{padding: 10}}>
//           <TextInput
//             style={{height: 40}}
//             placeholder="Username"
//           />
//           <Text style={{padding: 10, fontSize: 42}}>
//           </Text>
//         </View>
//         <View style={{padding: 10}}>
//           <TextInput
//             style={{height: 40}}
//             placeholder="Password"
//           />
//           <Text style={{padding: 10, fontSize: 42}}>
//           </Text>
//         </View>
//         <Button
//           onPress={() => { Alert.alert('Account Created!')}}
//           title="LOG IN"
//         />8
//       </View>
//     );
//   }
// }

// export default class SignUp extends React.Component {
//   // static navigationOptions = {
//   //   title: 'Sign Up',
//   // };
//   constructor(props) {
//     super(props);
//     this.state = {text: ''};
//   }
//
//   render() {
//     return (
//       <View>
//         <View style={{padding: 10}}>
//           <TextInput
//             style={{height: 40}}
//             placeholder="First Name"
//           />
//           <Text style={{padding: 10, fontSize: 42}}>
//           </Text>
//         </View>
//         <View style={{padding: 10}}>
//           <TextInput
//             style={{height: 40}}
//             placeholder="Last Name"
//           />
//           <Text style={{padding: 10, fontSize: 42}}>
//           </Text>
//         </View>
//         <View style={{padding: 10}}>
//           <TextInput
//             style={{height: 40}}
//             placeholder="Email"
//           />
//           <Text style={{padding: 10, fontSize: 42}}>
//           </Text>
//         </View>
//         <View style={{padding: 10}}>
//           <TextInput
//             style={{height: 40}}
//             placeholder="Password"
//           />
//           <Text style={{padding: 10, fontSize: 42}}>
//           </Text>
//         </View>
//         <Button
//           onPress={() => { Alert.alert('Account Created!')}}
//           title="SIGN UP"
//         />
//       </View>
//     );
//   }
// }

export default class DebateSignUp extends React.Component {
  // static navigationOptions = {
  //   title: 'Sign Up',
  // };
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
            placeholder="Partner Preference"
          />
          <Text style={{padding: 10, fontSize: 42}}>
          </Text>
        </View>
        <Button
          onPress={() => { Alert.alert('Account Created!')}}
          title="SIGN UP TO DEBATE"
        />
      </View>
    );
  }
}

// const App = StackNavigator({
//   SignUp: { screen: SignUp },
//   // LogIn: { screen: LogIn },
// });

// AppRegistry.registerComponent('App', () => App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
