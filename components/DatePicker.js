import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';

const DatePicker = ({ dateInput }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [reminderDateInput, setReminderDateInput] = useState('');

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    hideDatePicker();

    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);

    const dateInMillisec = date.getTime();

    dateInput(dateInMillisec);

    setReminderDateInput(moment(dateInMillisec).format('MMMM Do YYYY'));
  };

  return (
    <TouchableOpacity onPress={showDatePicker}>
      <View style={styles.datePickerBtnContainer}>
        <Text style={styles.datePickerBtn}>{reminderDateInput || '__ /__'}</Text>
      </View>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </TouchableOpacity>
  );
};

export default DatePicker;

const styles = StyleSheet.create({
  datePickerBtnContainer: {
    width: 220,
    marginLeft: 20,
  },

  datePickerBtn: {
    color: 'gray',
    fontSize: 14,
  },
});
