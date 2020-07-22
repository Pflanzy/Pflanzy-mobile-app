import * as Notifications from 'expo-notifications';

export default function SetReminderNotification(dateInfo) {
  console.warn('A data sent from DateTimePicker!', dateInfo);
  console.warn('A data formatted into milliseconds', Date.parse(dateInfo));
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: false,
    }),
  });

  Notifications.scheduleNotificationAsync({
    content: {
      title: 'Water time!',
      body: "I'm so thirsty🌵...",
    },
    trigger: {
      seconds: 30,
      // repeats: true,
    },
  });

  Notifications.dismissAllNotificationsAsync();

  // Notifications.cancelAllScheduledNotificationsAsync();
}
