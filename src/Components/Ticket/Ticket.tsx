import { HeaderNav } from "../Navbar/HeaderNav";
import { Navbar } from "../Navbar/Navbar";
import styles from './Ticket.module.css'

type Props = {};

export const Ticket = (_props: Props) => {
  return (
    <div className={styles.TicketWrapper}>
      {" "}
      <HeaderNav title="Ticket" />

      <Navbar />
    </div>
  );
};
