import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity, Button, Modal, Alert, TextInput, ToastAndroid } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { compareAsc, format } from 'date-fns'

import DatePicker from './datePickerNi';
import { selectedDate } from './datePickerNi';
import { dateString } from './datePickerNi';

// const PendingData = [
//     { id: "0", name: "Task1", deadLine: "2021-12-17" },
//     { id: "1", name: "Task2", deadLine: "2021-12-15" },
//     { id: "2", name: "Task3", deadLine: "2021-12-18" },
//     { id: "3", name: "Task3", deadLine: "2021-12-14" },
// ]

// const CompleteData = [
//     { id: "0", name: "Task1", deadLine: "Mon Dec 11 2021 16:42:17" },
//     { id: "1", name: "Task2", deadLine: "Mon Dec 12 2021 16:42:17" },
//     { id: "2", name: "Task3", deadLine: "Mon Dec 13 2021 16:42:17" },
//     { id: "3", name: "Task3", deadLine: "Mon Dec 14 2021 16:42:17" },
// ]

global.PendingData = [
    // { id: 0, name: "task", deadLine: "Today" }
]
global.OverdueData = []

global.CompleteData = []
global.Id = 0;
var today;

export default function Pending({ navigation }) {

    // console.log(PendingData);
    var date = new Date();
    const [refresh, setRefresh] = useState(true);
    const showToast = () => { ToastAndroid.show("Task added successfully!", ToastAndroid.SHORT); };
    const [modalVisible, setModalVisible] = useState(false);
    const [task, setTask] = useState('');
    useEffect(() => {
        {
            if (PendingData.length > 0) {
                for (var i = 0; i < PendingData.length; i++) {
                    var pendingDataDate = new Date(PendingData[i].deadLine)
                    pendingDataDate = format(pendingDataDate, 'yyyy-MM-dd');
                    // console.log(pendingDataDate);
                    const myJSON = JSON.stringify(new Date);
                    today = myJSON.substring(1, myJSON.indexOf('T'));
                    // console.log("Todays date", today);
                    if (pendingDataDate < today) {
                        console.log("Overdue");
                        OverdueData.push(PendingData[i]);
                        PendingData.splice(i, 1);
                        console.log(OverdueData);
                        setRefresh(!refresh);
                        // break;
                    }
                    else {
                        console.log("No Overdue");
                    }
                }
            }
        }
    });

    function addToArray() {
        if (task == '') {
            alert("Plsease write something!");
        }
        else {
            PendingData.push({ id: Id, name: task, deadLine: dateString });
            Id++;
            // ()=>showToast(); // for web
            showToast(); // for mobile
            // console.log(PendingData);
            return false;
        }
    }

    function deleteTask(item) {
        var Found = -1;
        for (var i = 0; i < PendingData.length; i++) {
            if (PendingData[i].id == item.id) {
                Found = i;
                break;
            }
        }
        if (Found == -1) {
            console.log("Id not found");
        }
        else {
            console.log("Id found");
            PendingData.splice(i, 1);
            setRefresh(!refresh);
            // console.log(PendingData);
        }
    }

    function completeTask(item) {
        var Found = -1;
        for (var i = 0; i < PendingData.length; i++) {
            if (PendingData[i].id == item.id) {
                Found = i;
                break;
            }
        }
        if (Found == -1) {
            console.log("Id not found");
        }
        else {
            console.log("Id found");
            CompleteData.push(item);
            PendingData.splice(i, 1);
            setRefresh(!refresh);
            console.log("CompleteData", CompleteData);

        }
    }

    const renderItem = ({ index, item }) =>
    (
        <TouchableOpacity style={styles.TO} onPress={() => { console.log(item); }}>
            <View style={styles.renderFlex}>
                <View>
                    <Text style={styles.Text1}>{item.name}</Text>
                    <Text>{item.deadLine}</Text>
                    {/* <Text style={styles.Text2}>{item.deadLine}</Text> */}
                </View>
                <View style={styles.renderFlex1}>
                    <TouchableOpacity onPress={() => { completeTask(item) }}>
                        <View style={styles.IB}><Icon style={styles.Icons} name="check-circle" size={35} color="green" /></View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { deleteTask(item) }}>
                        <View style={styles.IB}><Icon style={styles.Icons} name="times-circle" size={35} color="red" /></View>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    )

    return (
        <View style={styles.Container}>
            <Text style={styles.Text}>Pending Tasks</Text>

            {/* ----------------- Add a Task ------------------------------ */}

            <Modal animationType="slide" transparent={false} visible={modalVisible}
                onRequestClose={() => { // Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.Modalcontainer}>
                    <Text style={styles.ModalHeading}>Add a new Task</Text>
                    <TextInput style={styles.ModalTextInput} placeholder='Title' onChangeText={task => { setTask(task) }} />
                    <DatePicker />
                    <View style={styles.ModalFlex}>
                        <TouchableOpacity style={styles.ModalTO} onPress={() => {
                            addToArray();
                            setRefresh(!refresh);
                        }}>
                            <Text style={styles.ModalBtnText}>Confirm</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.ModalTO} onPress={() => {
                            console.log("Cancel Pressed!");
                            setModalVisible(!modalVisible)
                        }}>
                            <Text style={styles.ModalBtnText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            {/* ------------------------------------------------------------- */}

            <FlatList data={PendingData}
                renderItem={renderItem}
                extraData={!refresh}
                style={styles.Flatlist}
            />
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button title="Add a Task" onPress={() => { setModalVisible(!modalVisible) }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        // JustifyContent: 'center',
    },
    Text: {
        fontSize: 35,
        // margin: 10
    },
    Flatlist: {
        width: '100%',
    },
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
    renderFlex1: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    Icons: {
        alignSelf: "center",
        margin: 5,
        // color: "green"
    },

    // ---------- Modal Addtask --------------------------------------------

    Modalcontainer: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        // backgroundColor: 'pink'
    },
    ModalHeading: {
        fontSize: 35,
        margin: 20
    },
    ModalTextInput: {
        alignSelf: 'flex-start',
        padding: 10,
        marginTop: 10,
        marginBottom: 10,
        // paddingLeft: 10,
        width: '100%',
        borderWidth: 2,
        borderRadius: 5,
        fontSize: 20,
    },
    ModalFlex: {

        width: '100%',
        margin: 10,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-evenly',
        // padding: 10,
    },
    ModalTO: {
        width: '50%',
        padding: 10,
        margin: 10,
        backgroundColor: 'skyblue',
        borderWidth: 2,
        borderRadius: 5,
        alignItems: 'center'

    },
    ModalBtnText: {
        fontSize: 20,
        // margin: 10
    },

})  