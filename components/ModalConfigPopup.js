import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Switch, TextInput } from 'react-native';
import { MaterialCommunityIcons, FontAwesome5, Fontisto, AntDesign } from '@expo/vector-icons';
import Modal from 'react-native-modal';
import Colors from '../constants/Colors';
import DatePicker from './DatePicker';
import TimePicker from './TimePicker';
import SetReminderNotification from './SetReminderNotification';

const ModalConfigPopup = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isEnabled, setSwitchEnabled] = useState(false);
  const toggleSwitch = () => setSwitchEnabled((previousState) => !previousState);

  const [reminderItem, setReminderItem] = useState('');
  const [reminderDateInput, setReminderDateInput] = useState();
  const [reminderTimeInput, setReminderTimeInput] = useState();

  const dateRetriever = (data) => setReminderDateInput(data);
  const timeRetriever = (data) => setReminderTimeInput(data);

  const sumMilliSec = reminderDateInput + reminderTimeInput;

  SetReminderNotification(sumMilliSec || '');

  return (
    <View>
      <TouchableOpacity onPress={() => setModalOpen(true)}>
        <Text
          style={{
            marginBottom: 30,
            paddingHorizontal: 20,
            paddingVertical: 10,
            backgroundColor: 'orangered',
            borderRadius: 50,
            color: 'white',
          }}>
          TEST REMINDER MODAL LAUNCHER!
        </Text>
      </TouchableOpacity>

      <Modal
        isVisible={modalOpen}
        onBackdropPress={() => setModalOpen(false)}
        backdropTransitionOutTiming={40}>
        <View style={styles.modalContent}>
          <View style={styles.headerOptions}>
            <TouchableOpacity style={styles.cancelDoneText} onPress={() => setModalOpen(false)}>
              <Text>Cancel</Text>
            </TouchableOpacity>
            <Text>New Reminder</Text>
            <TouchableOpacity style={styles.cancelDoneText} onPress={() => setModalOpen(false)}>
              <Text>Done</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.modalRows}>
            <MaterialCommunityIcons name="flower-poppy" size={18} color={Colors.tintColor} />
            <Text style={styles.modalFields}>Some Mysterious Wild Life...</Text>
          </View>
          <View style={[styles.modalRows, styles.textInputBottom]}>
            <MaterialCommunityIcons name="bell-outline" size={18} color={Colors.tintColor} />
            <TextInput
              style={[styles.modalFields, styles.reminderTextInput]}
              placeholder="Remind me to..."
              value={reminderItem}
              editable={false}
            />
          </View>
          <View style={[styles.modalRows, styles.careBtnAlign]}>
            <TouchableOpacity
              onPress={() => {
                setReminderItem('Water');
              }}>
              <Text style={styles.careOptions}>Water</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setReminderItem('Fertilize');
              }}>
              <Text style={styles.careOptions}>Fertilize</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setReminderItem('Repot');
              }}>
              <Text style={styles.careOptions}>Repot</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.modalRows}>
            <AntDesign name="calendar" size={18} color={Colors.tintColor} />
            <DatePicker
              dateInput={(data) => {
                dateRetriever(data);
              }}
            />
          </View>
          <View style={styles.modalRows}>
            <FontAwesome5 name="clock" size={18} color={Colors.tintColor} />
            <TimePicker
              timeInput={(data) => {
                timeRetriever(data);
              }}
            />
          </View>
          <View style={[styles.repeater, styles.modalRows]}>
            <View style={styles.repeatInputSnippet}>
              <Fontisto name="redo" size={20} color={Colors.tintColor} />
              <Text style={styles.modalFields}>Every ... days</Text>
            </View>
            <Switch onValueChange={toggleSwitch} value={isEnabled} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalConfigPopup;

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: 'white',
    height: 320,
    borderRadius: 10,
    padding: 20,
  },

  headerOptions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 30,
  },

  modalRows: {
    flexDirection: 'row',
    paddingBottom: 8,
    marginBottom: 8,
    alignItems: 'center',
  },

  textInputBottom: {
    paddingBottom: 0,
  },

  careOptions: {
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 4,
    fontSize: 12,
  },

  careBtnAlign: {
    justifyContent: 'space-around',
    marginLeft: 36,
  },

  modalFields: {
    marginLeft: 20,
  },

  reminderTextInput: {
    height: 30,
    borderRadius: 50,
    flex: 1,
    paddingLeft: 10,
    borderColor: 'lightgray',
    borderWidth: 1,
    backgroundColor: '#f9f9f9',
  },

  repeater: {
    justifyContent: 'space-between',
  },

  repeatInputSnippet: {
    flexDirection: 'row',
  },

  cancelDoneText: {
    color: 'gray',
  },
});
