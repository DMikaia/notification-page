export interface NotificationInterface {
  avatar: string; // URL of the avatar image
  name: string; // Name of the person who sent the notification
  message: string; // Content of the notification message
  privateMessage?: string; // Content of the private message
  link?: string; //  ***Link associated with the notification (e.g., post URL) // ***
  group?: string; // ***Group name mentioned in the notification
  time: string; // Time the notification was received (e.g., "1m ago")
  image?: string; // ***URL of an image associated with the notification // ***
  isRead?: boolean; // flag to indicate if the notification has been read
}

// *** : Optional data for the notification
