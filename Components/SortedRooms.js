import React from 'react';
import { Alert, AppRegistry, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import { Dropdown } from 'react-native-material-dropdown';
import { Card } from 'react-native-material-design';

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
    return (
      <View>
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
