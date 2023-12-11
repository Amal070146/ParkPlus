import { useState } from "react";
import { HeaderNav } from "../Navbar/HeaderNav";
import { Navbar } from "../Navbar/Navbar";
import styles from "./QRScanner.module.css";
import { QrReader } from "react-qr-reader";

type Props = {};

export const QRScanner = (_props: Props) => {
  const [count, setCount] = useState(false);
  const [scanResult, setScanResult] = useState("");

  const handleScan = (data: string | null) => {
    if (data) {
      setScanResult(data);
    }
  };

  const handleError = (error: any) => {
    console.error(error);
  };

  const trigger = () => {
    setCount(!count);
  };

  return (
    <div className={styles.QRscannerWrapper}>
      <HeaderNav title="Scanner" />
      <div className={styles.Details}>
        <button onClick={trigger}>{count ? "Stop" : "Scanner"}</button>
        {count && (
          <QrReader
            onError={handleError}
            onScan={handleScan}
            
          />
        )}
        {scanResult && <p>Scanned Result: {scanResult}</p>}
      </div>
      <Navbar />
    </div>
  );
};
