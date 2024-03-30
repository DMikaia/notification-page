import React from "react";
import Image from "next/image";
import { NotificationInterface } from "./NotificationInterface";

// We create this props to give the component click listener possibility
interface NotificationProps {
  notification: NotificationInterface;
  onClick: () => void;
}

function Notification({ notification, onClick }: NotificationProps) {
  const {
    avatar,
    name,
    message,
    link,
    group,
    time,
    image,
    isRead,
    privateMessage,
  } = notification;

  return (
    <div
      className={`notification-box ${
        isRead ? "" : "unread-notification" // Add the unread css class if it is still unread
      } sm:sm-notification md:sm-notification lg:md-notification`}
      onClick={onClick}
    >
      <Image src={avatar} width={40} height={40} alt={`Picture of ${name}`} />
      <div className={"notification-info"}>
        <p className={"text-container"}>
          <strong className={"name"}>{name}</strong> {message}{" "}
          {/*
            Depending on the notification only one of this element
            will be shown either link or group
          */}
          {link && <strong className={"link"}>{link} </strong>}
          {group && <strong className={"group"}>{group} </strong>}
          <span className={`dot ${isRead ? "hidden" : "inline-block"}`} />
        </p>
        <div className={"time"}>{time}</div>
        {privateMessage && ( // Render message container if private message exists
          <div className="message message-color">{privateMessage}</div>
        )}
      </div>
      {image && ( // Render an image if image exists
        <Image src={image} width={90} height={90} alt="Notification Image" />
      )}
    </div>
  );
}

export default Notification;
