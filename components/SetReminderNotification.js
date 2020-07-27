import * as Notifications from 'expo-notifications';

// Receives date info from DateTimePicker & sends notification
export default function SetReminderNotification(config) {
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

  Notifications.scheduleNotificationAsync({
    content: {
      title: 'Water time!',
      body: "I'm so thirsty🌵...",
    },
    trigger: {
      seconds: config.repeat
        ? config.selectedInterval * timeIntervals[config.selectedPeriod]
        : timeLeftInSec,
      repeats: config.repeat,
    },
  });

  Notifications.getAllScheduledNotificationsAsync().then((notifications) =>
    console.log(notifications)
  );

  Notifications.dismissAllNotificationsAsync();

  Notifications.cancelAllScheduledNotificationsAsync();
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
