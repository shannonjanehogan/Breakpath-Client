import React from 'react';
import { Alert, AppRegistry, Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
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
        <ScrollView>
          <Text style={styles.baseText}>
            <Text style={styles.titleText} onPress={this.onPressTitle}>
              {this.state.titleText}{'\n'}{'\n'}
            </Text>
          </Text>
          <Card>
            <Card.Body>
              <Text>
                BUCH B302
              </Text>
              <Text>
                ProAm
              </Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Text>
                Judges
              </Text>
              <Text>
                Pro, Dumbledore
              </Text>
              <Text>
                Nov, Ron
              </Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Text>
                OG
              </Text>
              <Text>
                Pro, Rob
              </Text>
              <Text>
                Nov, Lupin
              </Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Text>
                OO
              </Text>
              <Text>
                Nov, Snape
              </Text>
              <Text>
                Pro, Harry
              </Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Text>
                CG
              </Text>
              <Text>
                Nov, Fred
              </Text>
              <Text>
                Pro, George
              </Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Text>
                CO
              </Text>
              <Text>
                Nov, Hermoine
              </Text>
              <Text>
               Pro, Lily
              </Text>
            </Card.Body>
          </Card>
        </ScrollView>
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
