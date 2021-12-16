import * as React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Add from './AddToDo';
import { TouchableOpacity } from 'react-native-web';
import Pen from './Pending';
import Com from './Completed';
import Tab from './TabNavigation';
import AddToDo from './AddToDo';


function HomeScreen({ navigation }) {
    return (
        // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                title="Go to Profile"
                onPress={() => navigation.navigate('Profile')}
            />
        // </View>
    );
}

function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to Notifications"
        onPress={() => navigation.navigate('Notifications')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

// function NotificationsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button
//         title="Go to Settings"
//         onPress={() => navigation.navigate('Settings')}
//       />
//       <Button title="Go back" onPress={() => navigation.goBack()} />
//     </View>
//   );
// }

// function SettingsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button title="Go back" onPress={() => navigation.goBack()} />
//     </View>
//   );
// }

// function Button({ navigation }) {
//     return (
//         <TouchableOpacity style={styles.TO} onPress={() => { console.log("confirm Pressed!");navigation.navigate('ADD') }}>
//             <Text style={styles.Text1}>+</Text>
//         </TouchableOpacity>
//     );
// }
const Stack = createNativeStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
               <Stack.Screen name="AddToDo" component={AddToDo} />
                <Stack.Screen name="Pen" component={Pen} />
           <Stack.Screen name="Tab" component={Tab} />
           
    <Stack.Screen name="Com" component={Com} />
        </Stack.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    );
}
const styles = StyleSheet.create({
    TO: {
        width: '50%',
        padding: 10,
        // paddingLeft: 20,
        // paddingRight: 20,
        margin: 10,
        // height: 50,
        backgroundColor: 'skyblue',
        borderWidth: 1,
        borderRadius: 5,
        // alignContent: 'center',
        alignItems: 'center'

    },
    Text1: {
        fontSize: 20,
        // margin: 10
    }
});