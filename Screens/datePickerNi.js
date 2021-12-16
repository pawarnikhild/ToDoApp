import React, { useState } from "react";
import { Button, View, StatusBar, Text } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

var dateString = '';
// var selectedDate = '';
export {dateString}
// export {selectedDate}

const Example = () => {

  const [idateStringPickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    // console.log(date);
    const myJSON = JSON.stringify(date);
    dateString = myJSON.substring(1, myJSON.indexOf('T'));
    console.log("From datePicker.js: "+dateString);
    // selectedDate = new Date(dateString);
    hideDatePicker();
  };

  // const datePrinter = ()

  return (
    <View>
      <StatusBar/>
      <Button title="Show Date Picker" onPress={showDatePicker} />
      <DateTimePickerModal
        isVisible={idateStringPickerVisible}
        mode="date"
        // minimumDate={new Date()}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      {/* <Text>{dateString}</Text> */}
      {/* <Text>{selectedDate}</Text> */}
    </View>
  );
};

export default Example;
