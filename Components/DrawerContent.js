import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { DrawerItems } from 'react-navigation';
import { Text } from 'react-native';


class DrawerContent extends PureComponent {

  render() {

    return (
      <View>
        <View style={{elevation: 10}}>
          <View style={{height:100,backgroundColor:'#002154'}}>
            <View style={{marginTop:40, alignItems:'center'}}>
              <Text style={{fontSize:30,color:'#fff'}}>
                UBCDS
              </Text>
            </View>
          </View>
          <View style={{height:30}}>
            <View style={{marginTop:10, alignItems:'center'}}>
              <Text style={{fontSize:15,color:'#000000'}}>
                Welcome back
              </Text>
            </View>
          </View>
        </View>
        <DrawerItems {...this.props} />
      </View>
    );
  }
}

export default DrawerContent;
