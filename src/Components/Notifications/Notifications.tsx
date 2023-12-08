import { HeaderNav } from "../Navbar/HeaderNav";
import { Navbar } from "../Navbar/Navbar";
import styles from './Notifications.module.css'

type Props = {}

export const Notifications = (_props: Props) => {
  const data = [
    {
      title: "Notification 1",
      description: "This is the first notification.",
    },
    {
      title: "Notification 2",
      description: "This is the second notification.",
    },
    {
      title: "Payment",
      description: "jksbvchjsefbvfwbewhvbffwburvu",
    },
    {
      title: "Payment",
      description: "jksbvchjsefbvfwbewhvbffwburvu",
    },
    {
      title: "Payment",
      description: "jksbvchjsefbvfwbewhvbffwburvu",
    },
    {
      title: "Payment",
      description: "jksbvchjsefbvfwbewhvbffwburvu",
    },
    {
      title: "Payment",
      description: "jksbvchjsefbvfwbewhvbffwburvu",
    },
    {
      title: "Payment",
      description: "jksbvchjsefbvfwbewhvbffwburvu",
    },
    {
      title: "Payment",
      description: "jksbvchjsefbvfwbewhvbffwburvu",
    },
  ];
  return (
    <div className={styles.NotificationWrapper}>
      {" "}
      <HeaderNav title="Notifications" />
      <div className={styles.Notifications}>
        {data.map(({ title, description }) => (
          <div className={styles.SingleNoti}>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        ))}
      </div>
      <Navbar />
    </div>
  );
}