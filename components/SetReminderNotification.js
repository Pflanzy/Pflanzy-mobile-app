import * as Notifications from 'expo-notifications';

// Receives date info from DateTimePicker & sends notification
export default function SetReminderNotification(dateInfo) {
  console.warn('A data sent from DateTimePicker!', dateInfo);

  allowsNotificationsAsync()
  requestPermissionsAsync()

  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: false,
    }),
  });

  console.warn('A data formatted into milliseconds', Date.parse(dateInfo));
  const dateInSec = (Date.parse(dateInfo) - Date.now()) / 1000;

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