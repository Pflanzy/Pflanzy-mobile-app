import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import SetReminderNotification from './SetReminderNotification';

const DatePicker = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn('A date has been picked: ', date);
    const dateParsedToNum = date.toString();
    SetReminderNotification(dateParsedToNum);

    hideDatePicker();
  };

  return (
    <TouchableOpacity onPress={showDatePicker}>
      <View style={styles.datePickerBtnContainer}>
        <Text style={styles.datePickerBtn}>__ /__</Text>
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
    color: 'lightgray',
    fontSize: 16,
  },
});
