import styles from './Successpage.module.css'
import { HeaderNav } from "../Navbar/HeaderNav";
import { Navbar } from "../Navbar/Navbar";
type Props = {}

export const Successpage = (_props: Props) => {
  return (
    <div className={styles.SuccessWrapper}>
      {" "}
      <HeaderNav title="Successpage" />
      
      <Navbar />
    </div>
  );
}