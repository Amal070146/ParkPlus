import { HeaderNav } from '../Navbar/HeaderNav';
import { Navbar } from '../Navbar/Navbar';
import styles from './QRScanner.module.css'

type Props = {}

export const QRScanner = (_props: Props) => {
  return (
    <div className={styles.QRscannerWrapper}> 
      {" "}
      <HeaderNav title="Scanner" />
      <button>Scanner</button>
      <Navbar />
    </div>
  );
}