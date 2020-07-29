import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'redux';
import { MaterialIcons, Fontisto, AntDesign, Entypo, Ionicons } from '@expo/vector-icons';
import Modal from 'react-native-modal';
import useSelector from 'react-redux';
import Colors from '../constants/Colors';
import PflanzyOpacity from './PflanzyOpacity';
// import DateTimePicker from './DateTimePicker';
// import SetReminderNotification from './SetReminderNotification';

const ModalListPopup = ({ notifications }) => {
  const [modalOpen, setModalOpen] = useState(false);

  console.log(notifications);
  return (
    <View>
      <PflanzyOpacity
        onPress={() => setModalOpen(true)}
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginLeft: 10,
          // position: 'absolute',
          // left: 0,
          // top: 0,
          // width: 50,
          // height: 50,
          // zIndex: 1,
        }}>
        {/* <Text style={{ fontSize: 14, color: 'white' }}>Manage Notifications</Text> */}
        <Ionicons name="ios-settings" size={30} color="white" />
      </PflanzyOpacity>

      <Modal
        isVisible={modalOpen}
        onBackdropPress={() => setModalOpen(false)}
        backdropTransitionOutTiming={40}>
        <View style={styles.modalContent}>
          <PflanzyOpacity style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
            <Entypo
              onPress={() => setModalOpen(false)}
              name="cross"
              size={24}
              color={Colors.tintColor}
            />
          </PflanzyOpacity>
          <View style={styles.mainContent}>
            <View style={styles.headerAlign}>
              {/* <Ionicons name="ios-settings" size={18} color={Colors.tintColor} /> */}
              <Text style={styles.header}>Manage Each Plant:</Text>
            </View>
            <View style={styles.headerAlign}>
              <MaterialIcons name="notifications-active" size={18} color={Colors.tintColor} />
              <Text style={styles.mainObjBody}>something: other things</Text>
              <Entypo name="cross" size={22} color="orangered" style={styles.removeIcon} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalListPopup;

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },

  mainContent: {
    padding: 10,
  },

  header: {
    fontSize: 16,
    color: Colors.tintColor,
    paddingLeft: 8,
  },

  mainObjBody: {
    fontSize: 16,
    paddingLeft: 12,
  },

  headerAlign: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },

  removeIcon: {
    marginLeft: 10,
    paddingTop: 4,
  },

  //   modalRows: {
  //     flexDirection: 'row',
  //     paddingVertical: 8,
  //     marginTop: 10,
  //     marginBottom: 10,
  //     alignItems: 'center',
  //   },

  //   textInputBottom: {
  //     paddingBottom: 0,
  //   },

  //   careOptions: {
  //     borderWidth: 1,
  //     borderColor: 'lightgray',
  //     borderRadius: 11,
  //     paddingHorizontal: 20,
  //     paddingVertical: 4,
  //     fontSize: 12,
  //   },

  //   careBtnAlign: {
  //     justifyContent: 'space-around',
  //     marginLeft: 36,
  //   },

  //   modalFields: {
  //     marginLeft: 20,
  //     fontSize: 18,
  //     color: Colors.darkGreen,
  //     fontWeight: '500',
  //   },

  //   reminderTextInput: {
  //     height: 30,
  //     borderRadius: 50,
  //     flex: 1,
  //     paddingLeft: 10,
  //     borderColor: 'lightgray',
  //     borderWidth: 1,
  //     backgroundColor: '#f9f9f9',
  //   },

  //   repeater: {
  //     justifyContent: 'space-between',
  //   },

  //   repeatInputSnippet: {
  //     flexDirection: 'row',
  //   },

  //   doneTextColor: {
  //     color: Colors.tintColor,
  //   },
});
