'use strict'
let React = require('react-native');
let {StyleSheet} = React;
const constants = {
    actioncolor: '#3cb371'
}

module.exports = StyleSheet.create({
    container: {
      backgroundColor: '#f2f2f2',
      flex: 1,
    },
  
    listview: {
      flex: 1,
    },

    li: {
      backgroundColor: '#fff',
      borderBottomColor: '#eee',
      borderColor: 'transparent',
      borderWidth: 1,
      paddingLeft: 16,
      paddingTop: 14,
      paddingBottom: 16,
    },

    liContainer: {
      flex: 2,
    },

    liText: {
      color: '#333',
      fontSize: 16,
      paddingRight: 10,
    },

    center: {
        textAlign: 'center',
    },

    actionText: {
      color: 'blue',
      fontSize: 16,
      textAlign: 'center',
    },

    action: {
      backgroundColor: constants.actionColor,
      borderColor: 'transparent',
      borderWidth: 1,
      paddingLeft: 16,
      paddingTop: 14,
      paddingBottom: 30,
    },

    addItem: {
      paddingTop: 30,
      paddingLeft: 15,
      paddingRight: 10,
      paddingBottom: 30,
      fontSize: 16,
    },

    header: {
      backgroundColor: '#DB4A49',
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomWidth: 2,
      borderBottomColor: '#ddd'
    },
  
    headerText: {
      color: '#FEFFFF',
      fontSize: 20,
      paddingTop: 35,
      paddingBottom: 10,
    },

    buttonContainer: {
      width: 200,
      height: 50,
      marginVertical: 5
    },

    content:{
      fontSize: 22
    },

    modalFooter: {
      //position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      // alignSelf:'flex-end',
      // zIndex: 0,
      marginBottom: 36
    },


  });
  