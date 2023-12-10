import { HeaderNav } from "../Navbar/HeaderNav";
import { Navbar } from "../Navbar/Navbar";
import styles from "./Ticket.module.css";
import qr from "./assets/qr.png";

type Props = {};

export const Ticket = (_props: Props) => {
  return (
    <div className={styles.TicketWrapper}>
      {" "}
      <HeaderNav title="Ticket" />
      <div className={styles.InnerData}>
        <img className={styles.qrcode} src={qr} alt="" />
        <div className={styles.Details}>
          <h2>Details : </h2>
          <div>
            <p>Vehicle No: KL08AP1212</p>
            <p>Vehicle Model:</p>
            <p> Vehicle Owner:</p> <p>Date: </p>
            <p>Time:</p> <p>Duration:2hrs</p>
          </div>
        </div>
        <div className={styles.ButtonWrapper}>
          <button>Download</button>
          <button>Share</button>
        </div>
      </div>
      <Navbar />
    </div>
  );
};
