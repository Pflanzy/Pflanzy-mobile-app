import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import * as Notifications from 'expo-notifications';
import { MaterialIcons, Entypo, Ionicons } from '@expo/vector-icons';
import Modal from 'react-native-modal';
import firebase from '../firebase';
import Colors from '../constants/Colors';
import PflanzyOpacity from './PflanzyOpacity';

const ModalListPopup = ({ notifications, plantId }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const deleteNotificationHandler = (notification) => {
    Notifications.cancelScheduledNotificationAsync(notification.identifier).then(() => {
      firebase
        .firestore()
        .collection('plants')
        .doc(plantId)
        .update({
          'custom.notifications': firebase.firestore.FieldValue.arrayRemove(notification),
        });
    });
  };

  return (
    <View>
      <PflanzyOpacity
        onPress={() => setModalOpen(true)}
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginLeft: 10,
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
              <Text style={styles.header}>Notifications</Text>
            </View>

            {notifications &&
              notifications.map((item) => {
                return (
                  <View
                    key={item.identifier}
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      paddingHorizontal: 10,
                    }}>
                    <View style={styles.headerAlign}>
                      <MaterialIcons
                        name="notifications-active"
                        size={18}
                        color={Colors.tintColor}
                      />
                      <Text
                        style={
                          styles.mainObjBody
                        }>{`${item?.content?.title}: ${item?.content?.body}`}</Text>
                    </View>
                    <TouchableOpacity
                      key="touch2"
                      color="orange"
                      title="Remove "
                      style={{}}
                      onPress={() => deleteNotificationHandler(item)}>
                      <Entypo name="cross" size={30} color="orangered" style={styles.removeIcon} />
                    </TouchableOpacity>
                  </View>
                );
              })}
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
  },

  mainObjBody: {
    fontSize: 16,
    paddingLeft: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerAlign: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  removeIcon: {
    marginLeft: 10,
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
