import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';

const TimePicker = ({ timeInput }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (time) => {
    hideDatePicker();

    const timeFormatted = moment(time).format('h:mm');

    // const timeObj = new Date(time);
    // const timeInMillisec = timeObj.getTime();
    // const difInMillisec = timeInMillisec - Date.now();
    // const dateParsedToNum = time.toString();
    timeInput(timeFormatted);
  };

  return (
    <TouchableOpacity onPress={showDatePicker}>
      <View style={styles.timePickerBtnContainer}>
        <Text style={styles.timePickerBtn}>__ : __</Text>
      </View>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="time"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </TouchableOpacity>
  );
};

export default TimePicker;

const styles = StyleSheet.create({
  timePickerBtnContainer: {
    width: 220,
    marginLeft: 20,
  },

  timePickerBtn: {
    color: 'lightgray',
    fontSize: 16,
  },
});
