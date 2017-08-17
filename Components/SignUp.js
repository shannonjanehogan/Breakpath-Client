import React from 'react';
import { Alert, AppRegistry, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Dropdown } from 'react-native-material-dropdown';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as sessionActions from '../actions/session';

class SignUp extends React.Component {
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

SignUp.propTypes = {
  actions: PropTypes.shape({
    signup: PropTypes.func.isRequired,
  }).isRequired,
  errorMessage: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  return {
    errorMessage: state.session.errorMessage,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
