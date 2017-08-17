import React from 'react';
import { Alert, AppRegistry, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Dropdown } from 'react-native-material-dropdown';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as debateSignUpActions from '../actions/debate_sign_up';

class DebateSignUp extends React.Component {
  static navigationOptions = {
    drawer: () => ({
      title: 'Debate Sign Up',
    }),
  };

  render() {  // TODO make these simple arrays
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

DebateSignUp.propTypes = {
  actions: PropTypes.shape({
    debateSignup: PropTypes.func.isRequired,
  }).isRequired,
  errorMessage: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  return {
    errorMessage: state.debate_sign_up.errorMessage,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(debateSignUpActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DebateSignUp);
