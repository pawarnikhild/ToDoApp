import { StatusBar } from 'react-native';
// import {React, useState } from 'react';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, ToastAndroid, TouchableOpacity, ScrollView} from 'react-native';

// import Pen from './Screens/Pending';
// import Com from './Screens/Completed';
// import Ove from './Screens/Overdue';
// import Tab from './Screens/TabNavigation';
import {Btns, Btn} from './Constants';
import { NavigationContainer } from '@react-navigation/native';
// export const PendingData;

export default function AddToDo({navigation}) {
    const showToast = () => {
        ToastAndroid.show("Pressed !", ToastAndroid.SHORT);
      };
      const [task, setTask] = useState('');
      var date = new Date();
      const PendingData = [];
      const addTask = () =>
      {
          if(task == '')
          {
              alert("Plsease write something!");
          }
        //   else if(dd)
        //   {
              
        //   }
        else
        {
            PendingData.push(task);
            ToastAndroid.show("Task added successfully! !", ToastAndroid.SHORT);
            // alert("Task added successfully!");
        }
      }
    return (
        <View style={styles.container}>
            {/* <ScrollView> */}
            <Text style={styles.Text}>Add a new Task</Text>
            <TextInput style={styles.TextInput} placeholder='Title' onChangeText={task => {setTask({task})}} />
            <View style={styles.Flex}>

                <TouchableOpacity style={styles.TO} 
                onPress={()=>{
                    navigation.navigate('Pen',{Name:task})
                 addTask()
                }}>
                    <Text style={styles.Text1}>Confirm</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.TO} onPress={()=>{console.log("Cancel Pressed!")}}>
                    <Text style={styles.Text1}>Cancel</Text>
                </TouchableOpacity>
                
               {/* <Btn title='Confirm' />
               <Btn title='Cancel' /> */}
            </View>
            {/* </ScrollView> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center', //keyboard mul khali vr hotay te talnyasathi he kadhaych ka scrolview takaycha te baghane
        padding: 20,
        // backgroundColor: 'pink'
    },
    Text: {
        fontSize: 35,
        margin: 20
    },
    TextInput: {
        alignSelf: 'flex-start',
        padding: 10,
        // paddingLeft: 10,
        width: '100%',
        borderWidth: 2,
        borderRadius: 5,
        fontSize: 20,
    },
    Flex: {
        
        width: '100%',
        margin: 10,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-evenly',
        // padding: 10,
    },
    TO: {
        width: '50%',
        padding: 10,
        margin: 10,
        backgroundColor: 'skyblue',
        borderWidth: 2,
        borderRadius: 5,
        alignItems: 'center'

    },
    Text1: {
        fontSize: 20,
        // margin: 10
    }
});
