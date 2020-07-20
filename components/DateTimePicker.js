import React, { useState } from 'react';
import { Button, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Colors from '../constants/Colors';

const DateTimePicker = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn('A date has been picked: ', date);

    hideDatePicker();
  };

  return (
    <TouchableOpacity onPress={showDatePicker}>
      {/* <Button title="Set reminder" onPress={showDatePicker} /> */}
      <View style={styles.datePickerBtnContainer}>
        <Text style={styles.datePickerBtn}>Set reminder</Text>
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
    width: 240,
    borderRadius: 50,
    backgroundColor: Colors.tintColor,
    padding: 10,
    marginBottom: 30,
  },

  datePickerBtn: {
    textAlign: 'center',
    fontSize: 16,
    color: Colors.defaultWhite,
    fontWeight: '600',
  },
});