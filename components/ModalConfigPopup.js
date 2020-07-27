import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Switch, TextInput } from 'react-native';
import { MaterialCommunityIcons, Fontisto, AntDesign } from '@expo/vector-icons';
import Modal from 'react-native-modal';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../constants/Colors';
import PflanzyOpacity from './PflanzyOpacity';
import DateTimePicker from './DateTimePicker';

const ModalConfigPopup = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isEnabled, setSwitchEnabled] = useState(false);
  const toggleSwitch = () => setSwitchEnabled((previousState) => !previousState);

  const [reminderItem, setReminderItem] = useState('');

  const NeuMorph = ({ children }) => {
    return (
      <View style={styles.topShadow}>
        <View style={styles.bottomShadow}>{children}</View>
      </View>
    );
  };

  return (
    <View>
      <PflanzyOpacity onPress={() => setModalOpen(true)}>
        <NeuMorph>
          <View style={{ marginBottom: 25, marginTop: 10 }}>
            <LinearGradient
              colors={['#004e57', '#027885', '#004e57']}
              start={[0.0, 0.0]}
              end={[1.0, 1.0]}
              style={{ width: 240, borderRadius: 17, padding: 10, elevation: 3 }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 16,
                  color: Colors.defaultWhite,
                  fontWeight: '600',
                }}>
                Set Reminder
              </Text>
            </LinearGradient>
          </View>
        </NeuMorph>
      </PflanzyOpacity>

      <Modal
        isVisible={modalOpen}
        onBackdropPress={() => setModalOpen(false)}
        backdropTransitionOutTiming={40}>
        <View style={styles.modalContent}>
          <View style={styles.headerOptions}>
            <TouchableOpacity onPress={() => setModalOpen(false)}>
              <Text>Cancel</Text>
            </TouchableOpacity>
            <Text>New Reminder</Text>
            <TouchableOpacity onPress={() => setModalOpen(false)}>
              <Text style={styles.doneTextColor}>Done</Text>
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
            <DateTimePicker />
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
  topShadow: {
    shadowOffset: {
      width: -2,
      height: -2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowColor: '#d0d1c5',
  },

  bottomShadow: {
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    shadowColor: '#3d3c3b',
  },

  modalContent: {
    backgroundColor: 'white',
    height: 280,
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
    borderRadius: 11,
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

  doneTextColor: {
    color: Colors.tintColor,
  },
});
