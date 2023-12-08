import styles from "./Successpage.module.css";
import { HeaderNav } from "../Navbar/HeaderNav";
import { Navbar } from "../Navbar/Navbar";
import image from "./assets/successimage.png";
type Props = {};

export const Successpage = (_props: Props) => {
  return (
    <div className={styles.SuccessWrapper}>
      {" "}
      <HeaderNav title="Successpage" />
      <div className={styles.DivSection}>
        <div className={styles.ImageWrapper}>
          <img src={image} alt="" />
          <div>
            <h3>Pickup Scheduled Successfully</h3>
            <p>An associate will get in touch with you soon.</p>
          </div>
        </div>
        <button>View Ticket</button>
      </div>
      <Navbar />
    </div>
  );
};
