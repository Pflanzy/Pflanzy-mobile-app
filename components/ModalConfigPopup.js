import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Switch,
  TextInput,
  Picker,
  Platform,
} from 'react-native';
import { MaterialCommunityIcons, Fontisto, AntDesign } from '@expo/vector-icons';
import Modal from 'react-native-modal';
import { LinearGradient } from 'expo-linear-gradient';
import { useSelector } from 'react-redux';
import Colors from '../constants/Colors';
import PflanzyOpacity from './PflanzyOpacity';
import DateTimePicker from './DateTimePicker';
import SetReminderNotification from './SetReminderNotification';

const ModalConfigPopup = ({ plant }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isEnabled, setSwitchEnabled] = useState(false);
  const [oneTimeDate, setOneTimeDate] = useState(null);
  const [selectedInterval, setSelectedInterval] = useState('1');
  const [selectedPeriod, setSelectedPeriod] = useState('day');
  const toggleSwitch = () => setSwitchEnabled((previousState) => !previousState);

  const [reminderItem, setReminderItem] = useState('');

  const NeuMorph = ({ children }) => {
    return (
      <View style={styles.topShadow}>
        <View style={styles.bottomShadow}>{children}</View>
      </View>
    );
  };
  const onTimeSet = (date) => {
    setOneTimeDate(date);
  };

  return (
    <View>
      <PflanzyOpacity onPress={() => setModalOpen(true)}>
        <NeuMorph>
          <View style={{ marginBottom: 25, marginTop: 10 }}>
            <LinearGradient
              colors={[Colors.darkGreen, Colors.darkGreen, Colors.darkGreen]}
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
        style={{
          // height: '100%',
          display: 'flex',
          justifyContent: 'flex-start',
          width: '93%',
          position: 'absolute',
          top: 100,
          alignSelf: 'center',
          backgroundColor: Colors.defaultWhite,
          borderRadius: 10,
          // padding: 20,
          height: `${isEnabled && Platform.OS === 'ios' ? '70%' : 'auto'}`,
        }}
        isVisible={modalOpen}
        onBackdropPress={() => setModalOpen(false)}
        backdropTransitionOutTiming={40}>
        <View style={{ padding: 20 }}>
          <View style={styles.headerOptions}>
            <TouchableOpacity onPress={() => setModalOpen(false)}>
              <Text>Cancel</Text>
            </TouchableOpacity>
            <Text style={{ fontSize: 16, fontWeight: '500' }}>New Reminder</Text>
            <TouchableOpacity
              onPress={() => {
                SetReminderNotification({
                  repeat: isEnabled,
                  notificationDate: oneTimeDate,
                  selectedInterval,
                  selectedPeriod,
                });
                setModalOpen(false);
              }}>
              <Text style={styles.doneTextColor}>Done</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.modalRows}>
            <MaterialCommunityIcons name="flower-poppy" size={18} color={Colors.tintColor} />
            <Text style={styles.modalFields}>{plant?.commonName}</Text>
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
          {!isEnabled && (
            <View style={styles.modalRows}>
              <AntDesign name="calendar" size={18} color={Colors.tintColor} />
              <DateTimePicker onTimeSet={onTimeSet} />
            </View>
          )}
          <View style={[styles.repeater, styles.modalRows]}>
            {isEnabled && (
              <View>
                <View style={{ flexDirection: 'row' }}>
                  <AntDesign name="calendar" size={18} color="#d1cdca" />
                  <Text
                    style={{
                      marginLeft: 20,
                      marginTop: Platform.OS === 'ios' ? 3 : 0,
                      color: '#d1cdca',
                    }}>
                    __ /__ /__ : __ :
                  </Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Picker
                    selectedValue={selectedInterval}
                    style={{ height: 50, width: 100 }}
                    onValueChange={(value) => setSelectedInterval(value)}>
                    <Picker.Item label="1" value="1" />
                    <Picker.Item label="2" value="2" />
                    <Picker.Item label="3" value="3" />
                    <Picker.Item label="4" value="4" />
                    <Picker.Item label="5" value="5" />
                    <Picker.Item label="6" value="6" />
                  </Picker>
                  <Picker
                    selectedValue={selectedPeriod}
                    style={{ height: 50, width: 100 }}
                    onValueChange={(value) => setSelectedPeriod(value)}>
                    <Picker.Item label="Day" value="day" />
                    <Picker.Item label="Week" value="week" />
                  </Picker>
                </View>
              </View>
            )}
            {/* <View style={styles.repeatInputSnippet}>
              <Fontisto name="redo" size={20} color={Colors.tintColor} />
              <Text style={styles.modalFields}>Every ... days</Text>
            </View> */}
          </View>
          <View
            style={{
              position: 'absolute',
              right: 15,
              top: Platform.OS === 'ios' ? 250 : 268,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={{ marginRight: 10 }}>Repeat</Text>
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
    shadowColor: Colors.topShadow,
  },

  bottomShadow: {
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    shadowColor: Colors.shadowColor,
  },

  // modalContent: {
  //   backgroundColor: 'white',
  //   height: `${isEnabled && Platform.OS === 'ios' ? '75%' : 'auto'}`,
  //   borderRadius: 10,
  //   padding: 20,
  // },

  headerOptions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 30,
  },

  modalRows: {
    flexDirection: 'row',
    paddingVertical: 8,
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center',
  },

  textInputBottom: {
    paddingBottom: 0,
  },

  careOptions: {
    borderWidth: 1,
    borderColor: Colors.lightgray,
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
    fontSize: 18,
    color: Colors.darkGreen,
    fontWeight: '500',
  },

  reminderTextInput: {
    height: 30,
    borderRadius: 50,
    flex: 1,
    paddingLeft: 10,
    borderColor: Colors.lightgray,
    borderWidth: 1,
    backgroundColor: Colors.reminderBackground,
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
