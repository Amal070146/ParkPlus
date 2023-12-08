import { HeaderNav } from "../Navbar/HeaderNav";
import { Navbar } from "../Navbar/Navbar";
import styles from './Report.module.css'

type Props = {};

export const Report = (_props: Props) => {
  return (
    <div className={styles.ReportWrapper}>
      {" "}
      <HeaderNav title="Report" />
      <Navbar />
    </div>
  );
};
