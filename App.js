import React, {Component} from 'react';
import { 
  Text, 
  View,
  ListView,
  TouchableHighlight,
  Modal,
  TextInput} 
  from 'react-native';
import Toolbar from './src/components/Toolbar/Toolbar';
import AddButton from './src/components/AddButton/AddButton';
import Button from 'react-native-button';
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
      text: "",
      itemDataSource: ds,
      modalVisible: false
    }
    this.itemsRef = this.getRef().child('items');
    this.renderRow = this.renderRow.bind(this);
    this.pressRow = this.pressRow.bind(this);
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  getRef(){
    return firebaseApp.database().ref();
  }

  componentWillMount(){
    this.getItems(this.itemsRef);
  }

  componentDidMount(){
    //this.getItems(this.itemsRef);
  }

  getItems(itemsRef){
    //let items = [{title:'Item One'},{title:'Item Two'}];
    itemsRef.on('value',(snap) => {
      let items = [];
      snap.forEach((child) => {
        items.push({
          // timestamp luxon vs iso
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
    this.itemsRef.child(item._key).remove();
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

  addItem(){
    this.setModalVisible(true);
  }

  render() {
    return (
      <View style={styles.container}>
      <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {}}>
          <View >
            <View >
            
              <Toolbar title="Add Item"/>
              
                <TextInput style={styles.addItemTextinput}
                  value={this.state.text}
                  multiline = {true}
                  numberOfLines = {4}
                  editable = {true}
                  placeholder='Add Item'
                  underlineColorAndroid="transparent"
                  autofocus={true}
                  clearTextOnFocus={true}
                  onChangeText={(value) => this.setState({text:value})}
                />
              
              <View style={styles.modalFooter}>
                <View style={{ paddingBottom: 5 }}>
                <Button
                  style={{ fontSize: 20, color: 'white', }}
                  styleDisabled={{ color: 'white', }}
                  containerStyle={{ padding: 10, height: 45, overflow: 'hidden', borderRadius: 12, backgroundColor: '#1DC4A6', }}
                  disabledContainerStyle={{ backgroundColor: 'pink', }}
                  onPress={() => {
                    this.itemsRef.push({title: this.state.text})
                    this.setState({text: ''})
                    this.setModalVisible(!this.state.modalVisible);
                  }}
                >
                  Save item
                </Button>
                </View>

                <Button
                  style={{ fontSize: 20, color: 'white' }}
                  styleDisabled={{ color: 'white' }}
                  containerStyle={{ padding: 10, height: 45, overflow: 'hidden', borderRadius: 12, backgroundColor: '#EA5745' }}
                  disabledContainerStyle={{ backgroundColor: 'pink' }}
                  onPress={() => {
                    this.setState({text: ''})
                    this.setModalVisible(!this.state.modalVisible);
                  }}
                >
                  Cancel
                </Button>
                </View>
              
            </View>
          </View>
        </Modal>

        <Toolbar title="Item lister" />
        <ListView
          dataSource={this.state.itemDataSource}
          renderRow={this.renderRow}
        />
        <AddButton onPress={this.addItem.bind(this)} title="Add Item"/>
      </View>
    );
  }
}

