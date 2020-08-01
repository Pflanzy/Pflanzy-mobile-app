import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as Notifications from 'expo-notifications';
import { MaterialIcons, Entypo, Ionicons, AntDesign } from '@expo/vector-icons';
import Modal from 'react-native-modal';
import moment from 'moment';
import { removeNotificationFb } from '../firebase';
import Colors from '../constants/Colors';
import PflanzyOpacity from './PflanzyOpacity';

const ModalListPopup = ({ notifications, plantId }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const deleteNotificationHandler = (notification) => {
    Notifications.cancelScheduledNotificationAsync(notification.identifier).then(() => {
      removeNotificationFb(notification, plantId);
    });
  };
  const now = moment();

  return (
    <View>
      <PflanzyOpacity
        onPress={() => setModalOpen(true)}
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginLeft: 10,
          width: '100%',
        }}>
        <AntDesign
          style={styles.renameIcon}
          name="clockcircle"
          size={30}
          color={Colors.defaultWhite}
        />
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
            <Text style={styles.header}>Notifications</Text>

            {notifications &&
              notifications.map((item) => {
                console.log(moment(now).add(6546, 'seconds').fromNow());
                return (
                  <View
                    key={item.identifier}
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginVertical: 5,
                      padding: 10,
                      paddingLeft: 40,
                      height: 60,
                      borderWidth: 1,
                      borderColor: Colors.transparent,
                      borderRadius: 11,
                      color: Colors.defaultBlack,
                      backgroundColor: Colors.defaultWhite,
                    }}>
                    <MaterialIcons
                      name="notifications-active"
                      size={30}
                      color={Colors.tintColor}
                      style={{ position: 'absolute', left: 5, top: 14 }}
                    />
                    <View style={styles.headerAlign}>
                      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                        {item?.content?.title}
                      </Text>
                      <Text>
                        {`${item?.content?.body} ${moment(now)
                          .add(item?.trigger?.seconds, 'seconds')
                          .fromNow()}`}
                      </Text>
                    </View>
                    <View style={{}}>
                      <TouchableOpacity
                        key="touch2"
                        color="orange"
                        title="Remove "
                        style={{ zIndex: 1 }}
                        onPress={() => {
                          deleteNotificationHandler(item);
                        }}>
                        <AntDesign
                          style={styles.removeIcon}
                          name="closecircle"
                          size={35}
                          color={Colors.cancelColor}
                        />
                      </TouchableOpacity>
                    </View>
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
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 15,
    flexDirection: 'column',
    width: '90%',
    position: 'absolute',
    top: '30%',
    alignSelf: 'center',
    backgroundColor: Colors.renameModalBg,
  },

  mainContent: {},

  header: {
    fontSize: 25,
    fontWeight: 'bold',
    color: Colors.tintColor,
    alignSelf: 'center',
    marginBottom: 10,
  },

  mainObjBody: {
    fontSize: 16,
    flex: 1,
    textAlign: 'left',
  },

  headerAlign: {
    justifyContent: 'center',
    flexDirection: 'column',
    padding: 3,
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
