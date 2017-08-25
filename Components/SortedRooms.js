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
      pro: 'Pro ',
      nov: 'Nov '
    };
    this.state2 = {
      titleText: 'BUCH B302',
      baseText: 'ProAm',
    };
    this.state3 = {
      titleText: 'Judges',
      debater1: 'Dumbledore',
      debater2: 'Ron',
    };
    this.state4 = {
      titleText: 'OG',
      debater1: 'Rob',
      debater2: 'Lupin',
    };
    this.state5 = {
      titleText: 'OO',
      debater1: 'Snape',
      debater2: 'Harry',
    };
    this.state6 = {
      titleText: 'CG',
      debater1: 'Fred',
      debater2: 'George',
    };
    this.state7 = {
      titleText: 'CO',
      debater1: 'Hermoine',
      debater2: 'Lily',
    };
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
      <ScrollView>
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
            <Text style={styles.baseText}>
              <Text style={styles.titleText} onPress={this.onPressTitle}>
                {this.state2.titleText}
              </Text>
            </Text>
            <Text style={styles.baseText}>
              <Text style={styles.baseText} onPress={this.onPressTitle}>
                {this.state2.baseText}
              </Text>
            </Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Text style={styles.baseText}>
              <Text style={styles.titleText} onPress={this.onPressTitle}>
                {this.state3.titleText}
              </Text>
            </Text>
            <Text style={styles.baseText}>
              <Text style={styles.experience} onPress={this.onPressTitle}>
                {this.state.pro}
              </Text>
              <Text style={styles.baseText} onPress={this.onPressTitle}>
                {this.state3.debater1}
              </Text>
            </Text>
            <Text style={styles.baseText}>
              <Text style={styles.experience} onPress={this.onPressTitle}>
                {this.state.nov}
              </Text>
              <Text style={styles.baseText} onPress={this.onPressTitle}>
                {this.state3.debater2}
              </Text>
            </Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Text style={styles.baseText}>
              <Text style={styles.titleText} onPress={this.onPressTitle}>
                {this.state4.titleText}
              </Text>
            </Text>
            <Text style={styles.baseText}>
              <Text style={styles.experience} onPress={this.onPressTitle}>
                {this.state.nov}
              </Text>
              <Text style={styles.baseText} onPress={this.onPressTitle}>
                {this.state4.debater1}
              </Text>
            </Text>
            <Text style={styles.baseText}>
              <Text style={styles.experience} onPress={this.onPressTitle}>
                {this.state.pro}
              </Text>
              <Text style={styles.baseText} onPress={this.onPressTitle}>
                {this.state4.debater2}
              </Text>
            </Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Text style={styles.baseText}>
              <Text style={styles.titleText} onPress={this.onPressTitle}>
                {this.state5.titleText}
              </Text>
            </Text>
            <Text style={styles.baseText}>
              <Text style={styles.experience} onPress={this.onPressTitle}>
                {this.state.nov}
              </Text>
              <Text style={styles.baseText} onPress={this.onPressTitle}>
                {this.state5.debater1}
              </Text>
            </Text>
            <Text style={styles.baseText}>
              <Text style={styles.experience} onPress={this.onPressTitle}>
                {this.state.pro}
              </Text>
              <Text style={styles.baseText} onPress={this.onPressTitle}>
                {this.state5.debater2}
              </Text>
            </Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Text style={styles.baseText}>
              <Text style={styles.titleText} onPress={this.onPressTitle}>
                {this.state6.titleText}
              </Text>
            </Text>
            <Text style={styles.baseText}>
              <Text style={styles.experience} onPress={this.onPressTitle}>
                {this.state.nov}
              </Text>
              <Text style={styles.baseText} onPress={this.onPressTitle}>
                {this.state6.debater1}
              </Text>
            </Text>
            <Text style={styles.baseText}>
              <Text style={styles.experience} onPress={this.onPressTitle}>
                {this.state.pro}
              </Text>
              <Text style={styles.baseText} onPress={this.onPressTitle}>
                {this.state6.debater2}
              </Text>
            </Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Text style={styles.baseText}>
              <Text style={styles.titleText} onPress={this.onPressTitle}>
                {this.state7.titleText}
              </Text>
            </Text>
            <Text style={styles.baseText}>
              <Text style={styles.experience} onPress={this.onPressTitle}>
                {this.state.nov}
              </Text>
              <Text style={styles.baseText} onPress={this.onPressTitle}>
                {this.state7.debater1}
              </Text>
            </Text>
            <Text style={styles.baseText}>
              <Text style={styles.experience} onPress={this.onPressTitle}>
                {this.state.pro}
              </Text>
              <Text style={styles.baseText} onPress={this.onPressTitle}>
                {this.state7.debater2}
              </Text>
            </Text>
          </Card.Body>
        </Card>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    marginBottom: 20,
  },
  baseText: {
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#002154'
  },
  experience: {
    fontSize: 15,
    fontWeight: 'bold'
  }
});
