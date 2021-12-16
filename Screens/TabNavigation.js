import { StatusBar } from 'react-native';

import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Pen from './Pending';
import Com from './Completed';
import Ove from './Overdue';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar />
      <Tab.Navigator>
        <Tab.Screen name="Pending" component={Pen} />
        <Tab.Screen name="Completed" component={Com} />
        <Tab.Screen name="Overdue" component={Ove} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
