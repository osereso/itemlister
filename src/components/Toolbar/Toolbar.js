import React, {Component} from 'react';
import {AppRegistry, Platform, StyleSheet, Text, View, StatusBar} from 'react-native';

const styles = require('../../components/style');

export default class Toolbar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
            backgroundColor='coral'
            barStyle='light-content'
        />
        <View style={styles.navbar}>
            <Text style={styles.navbarTitle}>{this.props.title}</Text>
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('Toolbar', ()=> Toolbar)
