import * as Notifications from 'expo-notifications';
// import ModalListPopup from './ModalListPopup';
import firebase from '../firebase';

// Receives date info from DateTimePicker & sends notification
export default async function SetReminderNotification(config) {
  const timeIntervals = {
    day: 24 * 60 * 60,
    week: 7 * 24 * 60 * 60,
  };

  // console.warn('A data sent from DateTimePicker!', dateInputInString);

  allowsNotificationsAsync();
  requestPermissionsAsync();

  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: false,
    }),
  });

  const timeLeftInSec = (new Date(config.notificationDate).getTime() - Date.now()) / 1000;
  // console.warn(timeLeftInSec)

  const identifier = await Notifications.scheduleNotificationAsync({
    content: {
      title: config.name,
      body: config.reminderItem,
    },
    trigger: {
      seconds: config.repeat
        ? config.selectedInterval * timeIntervals[config.selectedPeriod]
        : timeLeftInSec,
      repeats: config.repeat,
    },
  });

  // await Notifications.cancelScheduledNotificationAsync(identifier);
  console.log(await Notifications.getAllScheduledNotificationsAsync());
  const notifications = await Notifications.getAllScheduledNotificationsAsync();
  console.log(await notifications);
  const userplantsRef = firebase.firestore().collection('plants').doc(config.plantId);

  userplantsRef.update({
    'custom.notifications': notifications,
  });

  // ModalListPopup(notifications);

  // console.warn(identifier);

  // Notifications.dismissAllNotificationsAsync();

  // Notifications.cancelAllScheduledNotificationsAsync();
}

// Fetching information about notifications-related permissions
async function allowsNotificationsAsync() {
  const settings = await Notifications.getPermissionsAsync();
  return (
    settings.granted || settings.ios?.status === Notifications.IosAuthorizationStatus.PROVISIONAL
  );
}

async function requestPermissionsAsync() {
  return await Notifications.requestPermissionsAsync({
    ios: {
      allowAlert: true,
      allowBadge: true,
      allowSound: true,
      allowAnnouncements: true,
    },
  });
}
