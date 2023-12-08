import { HeaderNav } from "../Navbar/HeaderNav";
import { Navbar } from "../Navbar/Navbar";
import styles from './Bookings.module.css'

type Props = {};

export const Bookings = (props: Props) => {
  return (
    <div className={styles.BookingWrapper}>
      {" "}
      <HeaderNav title="Bookings" />
      <Navbar />
    </div>
  );
};
