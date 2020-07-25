import * as Notifications from 'expo-notifications';

// Receives date info from DateTimePicker & sends notification
export default function SetReminderNotification(notificationInputInMillisec) {
  // console.warn('A data sent from DateTimePicker!', notificationInputInMillisec);

  allowsNotificationsAsync()
  requestPermissionsAsync()

  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: false,
    }),
  });

  const dateInSec = (notificationInputInMillisec - Date.now()) / 1000;

  Notifications.scheduleNotificationAsync({
    content: {
      title: 'Water time!',
      body: "I'm so thirsty🌵...",
    },
    trigger: {
      seconds: dateInSec,
      // repeats: true,
    },
  });

  Notifications.dismissAllNotificationsAsync();

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