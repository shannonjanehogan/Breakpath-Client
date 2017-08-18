import React from 'react';
import { Alert, AppRegistry, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import { Dropdown } from 'react-native-material-dropdown';
import { Card } from 'react-native-material-design';
import NavigationBar from 'react-native-navbar';

export default class IndexSortedRooms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titleText: 'Sorted Rooms',
    }
  };
  static navigationOptions = {
    drawer: () => ({
      title: 'Sorted Rooms',
    }),
  };

  render() {
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
        <Text style={styles.baseText}>
          <Text style={styles.titleText} onPress={this.onPressTitle}>
            {this.state.titleText}{'\n'}{'\n'}
          </Text>
        </Text>
        <Card>
          <Card.Body>
            <Text>
            </Text>
          </Card.Body>
        </Card>
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
