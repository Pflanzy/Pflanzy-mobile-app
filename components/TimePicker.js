import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';

const TimePicker = ({ timeInput }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [reminderTimeInput, setReminderTimeInput] = useState('');

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (time) => {
    hideDatePicker();

    const now = new Date();
    now.setHours(0);
    now.setMinutes(0);
    now.setSeconds(0);
    now.setMilliseconds(0);

    const timeOnlyInMillisec = time - now;
    // console.warn(timeOnlyInMillisec);

    timeInput(timeOnlyInMillisec);

    setReminderTimeInput(moment(time).format('h:mm a'));
  };

  return (
    <TouchableOpacity onPress={showDatePicker}>
      <View style={styles.timePickerBtnContainer}>
        <Text style={styles.timePickerBtn}>{reminderTimeInput || '__ : __'}</Text>
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
    color: 'gray',
    fontSize: 14,
  },
});
