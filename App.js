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

import * as firebase from 'firebase';

const styles = require('./src/components/style');

const firebaseConfig = {
    apiKey: "AIzaSyCRsl_Se5kegX4aYxheEqi3GY0Q20pRDig",
    authDomain: "itemlister-a5bea.firebaseapp.com",
    databaseURL: "https://itemlister-a5bea.firebaseio.com",
    //projectId: "itemlister-a5bea",
    storageBucket: "itemlister-a5bea.appspot.com"
}


const firebaseApp = firebase.initializeApp(firebaseConfig);

export default class itemlister extends Component {
  constructor(){
    super();
    let ds = new ListView.DataSource({rowHasChanged:(r1, r2) => r1 !== r2});
    this.state = {
      itemDataSource: ds
    }

    this.itemsRef = this.getRef().child('items');

    this.renderRow = this.renderRow.bind(this);
    this.pressRow = this.pressRow.bind(this);
  }

  getRef(){
    return firebaseApp.database().ref();
  }

  componentWillMount(){
    this.getItems(this.itemsRef);
  }

  componentDidMount(){
    this.getItems(this.itemsRef);
  }

  getItems(itemsRef){
    //let items = [{title:'Item One'},{title:'Item Two'}];
    itemsRef.on('value',(snap) => {
      let items = [];
      snap.forEach((child) => {
        items.push({
          title: child.val().title,
          _key: child.key
        });
      });
      this.setState({
        itemDataSource: this.state.itemDataSource.cloneWithRows(items)
      });
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

