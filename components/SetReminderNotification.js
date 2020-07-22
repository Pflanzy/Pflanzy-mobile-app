import * as Notifications from 'expo-notifications';

export default function SetReminderNotification(dateInfo) {
  console.warn('A data sent from DateTimePicker!', dateInfo);

  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: false,
    }),
  });

  // const trigger = new Date(Date.now() + 60 * 60 * 1000);
  // trigger.setMinutes(0);
  // trigger.setSeconds(0);
  // trigger.seconds = 30;
  console.warn('A data formatted into milliseconds', Date.parse(dateInfo));
  const dataIntoMillisec = Date.parse(dateInfo);
  const dateInSeconds = dataIntoMillisec / 1000;

  Notifications.scheduleNotificationAsync({
    content: {
      title: 'Water time!',
      body: "I'm so thirsty🌵...",
    },
    // trigger,
    trigger: {
      seconds: dateInSeconds + 30,
      // repeats: true,
    },
  });

  Notifications.dismissAllNotificationsAsync();

  // Notifications.cancelAllScheduledNotificationsAsync();
}
