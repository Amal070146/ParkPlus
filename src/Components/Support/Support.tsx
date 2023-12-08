import { HeaderNav } from "../Navbar/HeaderNav";
import { Navbar } from "../Navbar/Navbar";
import styles from './Support.module.css'
type Props = {};

export const Support = (_props: Props) => {
  return (
    <div className={styles.SupportWrapper}>
      {" "}
      <HeaderNav title="Support" />
      <Navbar />
    </div>
  );
};
