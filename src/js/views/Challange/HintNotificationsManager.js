import { requestPermission } from "../../utils/notifications";
import { LIFE_LINE_1_TIME, LIFE_LINE_2_TIME, HINT_TIME } from "../../constants/notifications";

export default class HintNotificationsManager {
  constructor(notifications, unlockLifeLine) {
    this.notifications = notifications;
    this.unlockLifeLine = unlockLifeLine;

    this.hintTimer = null;
    this.lifeLineTimer = null;

    this.notificationIndex = 0;

    const notificationsShuffled = [...notifications];

    for (let i = notificationsShuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [notificationsShuffled[i],
        notificationsShuffled[j]] = [notificationsShuffled[j],
        notificationsShuffled[i]];
    }

    this.notificationsShuffled = notificationsShuffled;
  }

  sendHintNotification = (time = HINT_TIME) => {
    this.hintTimer = setTimeout(() => {
      const options = {
        body: this.notificationsShuffled[this.notificationIndex],
        icon: "/avatar.png",
      };

      this.notificationIndex++;

      new Notification("Hi there!", options);

      if (this.notificationIndex < this.notificationsShuffled.length) {
        this.sendHintNotification(time * 2);
      }
    }, 1000 * time);
  }

  startHints() {
    requestPermission()
      .then((result) => {
        if (result === "granted") {
          this.sendHintNotification();
        }
      });

    this.lifeLineTimer = setTimeout(() => {
      this.unlockLifeLine();

      new Notification("Odblokowałeś 1. koło ratunkowe!");

      this.lifeLineTimer = setTimeout(() => {
        this.unlockLifeLine();

        new Notification("Odblokowałeś 2. koło ratunkowe!");
      }, 1000 * (LIFE_LINE_2_TIME - LIFE_LINE_1_TIME));
    }, 1000 * LIFE_LINE_1_TIME);
  }

  clearTimeouts() {
    clearTimeout(this.hintTimer);
    clearTimeout(this.lifeLineTimer);
  }
}