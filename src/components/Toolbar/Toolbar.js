import React, {Component} from 'react';
import {AppRegistry, Platform, StyleSheet, Text, View, StatusBar} from 'react-native';

const styles = require('../../components/style');

export default class Toolbar extends Component {
  render() {
    return (
      <View style={styles.header}>
            <Text style={styles.headerText}>
              ToDo
            </Text>
          </View>
    );
  }
}

AppRegistry.registerComponent('Toolbar', ()=> Toolbar)
