import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import PflanzyOpacity from './PflanzyOpacity';
import Colors from '../constants/Colors';
import SetReminderNotification from './SetReminderNotification';

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
    const dateParsedToNum = date.toString();
    SetReminderNotification(dateParsedToNum);

    hideDatePicker();
  };

  const NeuMorph = ({ children }) => {
    return (
      <View style={styles.topShadow}>
        <View style={styles.bottomShadow}>{children}</View>
      </View>
    );
  };

  return (
    <PflanzyOpacity onPress={showDatePicker}>
      {/* <Button title="Set reminder" onPress={showDatePicker} /> */}
      <NeuMorph>
        <View style={styles.datePickerBtnContainer}>
          <LinearGradient
            colors={['#004e57', '#008080', '#004e57']}
            start={[0.0, 0.0]}
            end={[1.0, 1.0]}
            style={{ width: 240, borderRadius: 17, padding: 10 }}>
            <Text style={styles.datePickerBtn}>Set reminder</Text>
          </LinearGradient>
        </View>
      </NeuMorph>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="datetime"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </PflanzyOpacity>
  );
};

export default DateTimePicker;

const styles = StyleSheet.create({
  datePickerBtnContainer: {
    marginBottom: 30,
  },

  datePickerBtn: {
    textAlign: 'center',
    fontSize: 16,
    color: Colors.defaultWhite,
    fontWeight: '600',
  },
  topShadow: {
    shadowOffset: {
      width: -2,
      height: -2,
    },
    shadowOpacity: 1,
    shadowRadius: 3,
    shadowColor: '#d0d1c5',
  },

  bottomShadow: {
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 3,
    shadowColor: '#909188',
    // #54544f
    // #909188
  },
});
