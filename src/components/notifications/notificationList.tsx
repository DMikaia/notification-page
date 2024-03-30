"use client";

import { useState } from "react";
import { notificationsData } from "./notificationData";
import Notification from "./notifcation";
import { NotificationInterface } from "./NotificationInterface";

export default function NotificationsList() {
  // Initializing the unread notifications count from notifications data
  const initialUnreadCount = notificationsData.filter(
    (notification) => !notification.isRead
  ).length;

  const [unreadCount, setUnreadCount] = useState(initialUnreadCount);

  const handleNotificationClick = (notification: NotificationInterface) => {
    if (!notification.isRead) {
      /*
        When the notification is read, we decrease the unread count
        by one and set the isRead property to true.
       */
      setUnreadCount((prevCount) => prevCount - 1);
      notification.isRead = true;
    }
  };

  // We create a map that will get every single notification components
  const [notifications, setNotifications] = useState(notificationsData);

  const handleMarkAllAsRead = () => {
    notifications.forEach((notification) => {
      notification.isRead = true;
    });

    /*
      When the mark all as read is clicked we set all the unread notification
      to read using isRead property and set the unread count to zero.
    */

    setNotifications([...notifications]);

    setUnreadCount(0);
  };

  return (
    <>
      <section className="main-container-header">
        <h1 className="main-container-title">
          Notifications
          <span className="notification-number">{unreadCount}</span>
        </h1>
        <p className="text-action" onClick={handleMarkAllAsRead}>
          Mark all as read
        </p>
      </section>

      <div className="notification-container">
        {/*
          Display every single notification data from the
          notificationData using map
        */}
        {notificationsData.map((notification) => (
          <Notification
            key={notification.name + notification.time}
            notification={notification}
            onClick={() => handleNotificationClick(notification)}
          />
        ))}
      </div>
    </>
  );
}
