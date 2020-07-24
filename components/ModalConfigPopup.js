import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Switch, TextInput } from 'react-native';
import {
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome5,
  Fontisto,
  AntDesign,
} from '@expo/vector-icons';
import Modal from 'react-native-modal';
import Colors from '../constants/Colors';
import DatePicker from './DatePicker';
import TimePicker from './TimePicker';

const ModalConfigPopup = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isEnabled, setSwitchEnabled] = useState(false);
  const toggleSwitch = () => setSwitchEnabled((previousState) => !previousState);

  return (
    <View>
      <View>
        <MaterialIcons
          name="add-alert"
          size={24}
          color="green"
          onPress={() => setModalOpen(true)}
        />
      </View>

      <Modal
        isVisible={modalOpen}
        onBackdropPress={() => setModalOpen(false)}
        backdropTransitionOutTiming={100}>
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
            />
          </View>
          <View style={[styles.modalRows, styles.careBtnAlign]}>
            <Text style={styles.careOptions}>Water</Text>
            <Text style={styles.careOptions}>Fertilize</Text>
            <Text style={styles.careOptions}>Repot</Text>
          </View>
          <View style={styles.modalRows}>
            <AntDesign name="calendar" size={18} color={Colors.tintColor} />
            <DatePicker />
            {/* <Text style={styles.modalFields}>{new Date().toLocaleDateString()}</Text> */}
          </View>
          <View style={styles.modalRows}>
            <FontAwesome5 name="clock" size={18} color={Colors.tintColor} />
            <TimePicker />
            {/* <Text style={styles.modalFields}>{new Date().toLocaleTimeString()}</Text> */}
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
