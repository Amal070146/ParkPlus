import { HeaderNav } from "../Navbar/HeaderNav";
import { Navbar } from "../Navbar/Navbar";
import styles from "./Wallet.module.css";
type Props = {};

export const Wallet = (_props: Props) => {
  return <div className={styles.WalletWrapper}>
    <HeaderNav title="Wallet" />
    <Navbar />
  </div>;
};
