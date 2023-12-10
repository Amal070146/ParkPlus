import { HeaderNav } from "../Navbar/HeaderNav";
import { Navbar } from "../Navbar/Navbar";
import styles from "./Wallet.module.css";
import coin from "./coin.png";
type Props = {};

export const Wallet = (_props: Props) => {
  return (
    <div className={styles.WalletWrapper}>
      <HeaderNav title="Wallet" />
      <div className={styles.DetailsWrapper}>
        <div className={styles.CardsWrapper}>
          <div>
            <img src={coin} alt="" />
          </div>
          <div>
            <div>
              <h2>BALANCE</h2>
              <h1>1352</h1>
            </div>
            <img src={coin} alt="" />
          </div>
        </div>
        <button>Add Amount</button>
        <div className={styles.transactionWrapper}>
          <h2>Your Transaction</h2>
        </div>
      </div>
      <Navbar />
    </div>
  );
};
