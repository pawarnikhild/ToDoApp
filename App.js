import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Pen from './Screens/Pending';
import Com from './Screens/Completed';
import Ove from './Screens/Overdue';
import Tab from './Screens/TabNavigation';
import Exp from './Screens/exp';
import Add from './Screens/AddToDo';
import Stack from './Screens/StackNavigation';
import Con from './Screens/Constants';
import Dtpkr from './Experiment/DatePicker';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>

    // <Pen/>
    // <Com/>
    // <Ove/>
    <Tab/>
    // <Exp/>
    // <Add/>
    // <Stack/>
    // <Con/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
