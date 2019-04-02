import React, {Component} from 'react';
import {
  Platform, 
  StyleSheet, 
  Text, 
  View,
  ListView,
  TouchableHighlight} 
  from 'react-native';
import Toolbar from './src/components/Toolbar/Toolbar';
import AddButton from './src/components/AddButton/AddButton';

const styles = require('./src/components/style');

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  constructor(){
    super();
    let ds = new ListView.DataSource({rowHasChanged:(r1, r2) => r1 !== r2});
    this.state = {
      itemDataSource: ds
    }

    this.renderRow = this.renderRow.bind(this);
    this.pressRow = this.pressRow.bind(this);
  }

  componentWillMount(){
    this.getItems();
  }

  componentDidMount(){
    this.getItems();
  }

  getItems(){
    let items = [{title:'Item One'},{title:'Item Two'}];

    this.setState({
      itemDataSource: this.state.itemDataSource.cloneWithRows(items)
    });
  }

  pressRow(item){
    console.log(item);
  }

  renderRow(item){
    return (
      <TouchableHighlight onPress={() => {
        this.pressRow(item);
      }}>
        <View style={styles.li}>
          <Text style={styles.liText}>{item.title}</Text>
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Toolbar title="ItemLister" />
        <ListView
          dataSource={this.state.itemDataSource}
          renderRow={this.renderRow}
        />
      </View>
    );
  }
}

