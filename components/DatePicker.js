import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';

const DatePicker = ({ dateInput }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

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

    // const dateFormatted = moment(date).format('MMMM Do');

    // const dateParsedToNum = date.toString();
    dateInput(dateInMillisec);
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
