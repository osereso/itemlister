import React, {Component} from 'react';
import {
    AppRegistry, 
    Platform, 
    StyleSheet, 
    Text, 
    View,
    TouchableHighlight} from 'react-native';
import Button from 'react-native-button';

const styles = require('../../components/style');
const constants = styles.constants;

export default class AddButton extends Component {
  render() {
    return (
      <View style={styles.action}>
        <Button
          style={{ fontSize: 20, color: 'white' }}
          tyleDisabled={{ color: 'white' }}
          containerStyle={{ padding: 10, height: 45, overflow: 'hidden', borderRadius: 12, backgroundColor: '#EA5745' }}
          disabledContainerStyle={{ backgroundColor: 'pink' }}
          onPress={this.props.onPress}
        >
          {this.props.title}
        </Button>
      </View>
    );
  }
}

AppRegistry.registerComponent('AddButton', ()=> AddButton)