import * as Notifications from 'expo-notifications';

// Receives date info from DateTimePicker & sends notification
export default function SetReminderNotification(dateInputInString) {
  // console.warn('A data sent from DateTimePicker!', dateInputInString);

  allowsNotificationsAsync()
  requestPermissionsAsync()

  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: false,
    }),
  });

  const timeLeftInSec = (new Date(dateInputInString).getTime() - Date.now()) / 1000;
  // console.warn(timeLeftInSec)

  Notifications.scheduleNotificationAsync({
    content: {
      title: 'Water time!',
      body: "I'm so thirsty🌵...",
    },
    trigger: {
      seconds: timeLeftInSec,
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