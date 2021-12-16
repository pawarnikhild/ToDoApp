import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, StatusBar, Button, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import DateTimePicker from '@react-native-community/datetimepicker';

var Data = [];
export default function App() {
  // var Data = [];
  const [task, setTask] = useState('');

  function addToArray() {
    console.log(task);
    console.log(Data);
    Data.push(task);;
    console.log(Data);
  }
  function returnDate() {
    var todaysdate = new Date();
    console.log(todaysdate);
  }

  return (
    // <View style={styles.Container}>
    //   <StatusBar />
    //   <TextInput style={styles.TextInput} placeholder='Title' onChangeText={task => { setTask(task) }} />
    //   <TextInput style={styles.TextInput} placeholder='Days requied' keyboardType="numeric"
    //     onChangeText={task => { setTask(task) }} />

    //   <TouchableOpacity style={styles.TO} onPress={() => {
    //     addToArray();
    //     returnDate();        
    //   }
    //   } >
    //     <Text style={styles.Text}>Add</Text>
    //   </TouchableOpacity>
    // </View>
    // ------------------------------------------------------------------------------------------------
    // <View style={styles.ThreeBtnsContainer}>
    //   <View style={styles.Row}>
    //   <TouchableOpacity style={[styles.ThreeBtns, {backgroundColor: '#ffcc00'}]} onPress={()=>{}}>
    //     <Text style={styles.ThreeBtnsText}>Edit</Text>
    //   </TouchableOpacity>
    //   <TouchableOpacity style={[styles.ThreeBtns, {backgroundColor: 'green'}]} onPress={()=>{}}>
    //     <Text style={styles.ThreeBtnsText}>Complete</Text>
    //   </TouchableOpacity>
    //   <TouchableOpacity style={[styles.ThreeBtns, {backgroundColor: 'red'}]} onPress={()=>{}}>
    //     <Text style={styles.ThreeBtnsText}>Delete</Text>
    //   </TouchableOpacity>
    //   </View>
    // </View>

    <TouchableOpacity style={styles.TO} onPress={() => { }}>
      <View style={styles.renderFlex}>
        <View>
          <Text style={styles.Text1}>Task</Text>
          <Text>2021-12-12</Text>
          {/* <Text style={styles.Text2}>{item.deadLine}</Text> */}
        </View>
        <View>
          <TouchableOpacity><Text>complete</Text></TouchableOpacity>
          <TouchableOpacity><Text>complete</Text></TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    // backgroundColor: 'pink'
  },
  // TextInput: {
  //   alignSelf: 'flex-start',
  //   padding: 10,
  //   // paddingLeft: 10,
  //   width: '100%',
  //   borderWidth: 2,
  //   borderRadius: 5,
  //   fontSize: 20,
  // },
  // TO: {
  //   width: '50%',
  //   padding: 10,
  //   margin: 10,
  //   backgroundColor: 'skyblue',
  //   borderWidth: 2,
  //   borderRadius: 5,
  //   alignItems: 'center'
  // },

  // Text: {
  //   fontSize: 20,
  // },
  // ----------------------------------------------------------
  // ThreeBtnsContainer: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center'
  // },
  // Row: {
  //   // flex: 1,
  //   flexDirection: 'row',
  //   justifyContent: 'flex-start',
  //   // alignItems: 'stretch'
  // },
  // ThreeBtns: {
  //   // height: '20%',
  //   // width: '20%',
  //   height: 80,
  //   width: 80,
  //   margin: 15,
  //   // padding: 10,
  //   backgroundColor: 'skyblue',
  //   // borderWidth: 2,
  //   borderRadius: 100,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // ThreeBtnsText: {
  //   fontSize: 16,
  //   fontWeight: 'bold',
  //   color: 'white'
  // },
  // ---------------------------------------------------------
  TO: {
    padding: 10,
    // width: '100%',
    borderWidth: 2,
    borderColor: 'skyblue',
    borderRadius: 5,
    marginTop: 10,
    // alignItems: 'flex-start',
    // backgroundColor: 'skyblue',


  },
  View: {
    alignItems: 'center',
    justifyContent: 'center',

  },
  Text1: {
    fontSize: 22,
  },
  Text2: {
    fontSize: 15
  },
  renderFlex: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

});