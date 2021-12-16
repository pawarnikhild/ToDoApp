import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export const Btns = ({title}) => {
    return (
        <TouchableOpacity style={styles.TO} onPress={() => { console.log("Btns Pressed!") }}>
                <Text style={styles.Text}>{title}</Text>
        </TouchableOpacity>
    );
}

export const Btn = ({title,sub}) => {
    return (
        <TouchableOpacity style={styles.TO1} onPress={() => { 
            var date = new Date();
            // var time = new Time();
            console.log("{props.text} Pressed!", date) }}>
                <Text style={styles.Text1}>{title}</Text>
        </TouchableOpacity>
    );
}

{/* <TouchableOpacity style={styles.TO} onPress={() => { console.log("confirm Pressed!") }}>
    <Text style={styles.Text1}>Confirm</Text>
</TouchableOpacity> */}

export const Constants = () => {
    return (
        <View style={styles.Container}>
            {/* <Greeting name='Rexxar' /> */}
            <Btns title='+' />
            <Btn title='Confirm' />
        </View>
    );
}

export default Constants;

const styles = StyleSheet.create({
    Container: {
        top: 50,
        flex: 1,
    },
    TO: {
        height: 60,
        width: 60,
        margin: 10,
        backgroundColor: 'blue',
        // borderWidth: 2,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center'

    },
    
    Text: {
        fontSize: 45,
        marginTop: -10,
        color: 'white',
    },
    TO1: {
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
    }
    
})
