import styles from "./Navbar.module.css";
import { Bookingssvg, Dashboardsvg, QRsvg, Walletsvg } from "./svg";

export const Navbar = () => {
  return (
    <div className={styles.NavbarWrapper}>
      <a href="/">
        <Dashboardsvg />
      </a>
      <a href="/bookings">
        <Bookingssvg />
      </a>
      <a href="/wallet">
        <Walletsvg />
      </a>
      <a href="/qrscanner">
        <QRsvg />
      </a>
    </div>
  );
};
