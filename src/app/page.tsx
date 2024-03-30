import NotificationsList from "@/components/notifications/notificationList";

export default function Home() {
  return (
    <main className="main main-color sm:sm-main md:sm-main  lg:md-main">
      <div className="main-container sm:sm-main-container md:sm-main-container lg:md-main-container">
        <NotificationsList></NotificationsList>
      </div>
    </main>
  );
}
