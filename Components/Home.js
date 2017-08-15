import React from 'react';
import { Alert, AppRegistry, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import { Dropdown } from 'react-native-material-dropdown';
import { Header } from 'react-native-elements';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titleText: 'Welcome to BreakPath',
      bodyText: 'Breakpath was made for debaters by debaters \n\nSign up to debate, and view your place in the draw \n\nPlenty of new features coming soon \n\nCheck out the BreakPath apps for iOS and Android \n\nMade with love for the University of British Columbia Debate Society'
    }
  };
  static navigationOptions = {
    drawer: () => ({
      title: 'Home',
    }),
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        {/* <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        /> */} FIND WHERE THIS GOES
        <Text style={styles.baseText}>
          <Text style={styles.titleText} onPress={this.onPressTitle}>
            {this.state.titleText}{'\n'}{'\n'}
          </Text>
          <Text>
            {this.state.bodyText}
          </Text>
        </Text>
        <Button
          title="SIGN UP"
          onPress={() =>
            navigate('Sign Up')
          }
        />
        <Button
          title="LOGIN"
          onPress={() =>
            navigate('Log In')
          }
        />
        <Button
          title="SIGN UP TO DEBATE"
          onPress={() =>
            navigate('Sign up to Debate')
          }
        />
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
  baseText: {
    textAlign: 'center',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
