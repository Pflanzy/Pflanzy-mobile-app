import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import SetReminderNotification from './SetReminderNotification';

const DateTimePicker = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [dateInput, setDateInput] = useState('');

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    hideDatePicker();

    // console.warn('A date has been picked: ', date);
    const dateParsedToNum = date.toString();
    SetReminderNotification(dateParsedToNum);

    setDateInput(moment(date).format('MMMM Do, h:mm a'));
  };

  return (
    <TouchableOpacity onPress={showDatePicker}>
      <View style={styles.datePickerBtnContainer}>
        <Text style={styles.datePickerBtn}>{dateInput || '__ /__ /__ : __ :'}</Text>
      </View>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="datetime"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </TouchableOpacity>
  );
};

export default DateTimePicker;

const styles = StyleSheet.create({
  datePickerBtnContainer: {
    width: 220,
    marginLeft: 20,
  },

  datePickerBtn: {
    fontSize: 14,
    color: 'gray',
  },
});
