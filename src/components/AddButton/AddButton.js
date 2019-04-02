import React, {Component} from 'react';
import {AppRegistry, Platform, StyleSheet, Text, View} from 'react-native';


export default class AddButton extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>AddButton</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('AddButton', ()=> AddButton)