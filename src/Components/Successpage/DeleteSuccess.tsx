import { HeaderNav } from "../Navbar/HeaderNav";
import { Navbar } from "../Navbar/Navbar";
import styles from "./Successpage.module.css";
import image from "./assets/deleteimage.png";
type Props = {};

export const DeleteSuccess = (_props: Props) => {
  return (
    <div className={styles.DeleteSuccessWrapper}>
      {" "}
      <HeaderNav title="DeleteSuccess" />
      <div className={styles.DivSection}>
        <div className={styles.ImageWrapper}>
          <img src={image} alt="" />
          <div>
            <h2>Are you sure ?</h2>
            <p>
              You are about to permanently delete your account, are you okay
              with that ?
            </p>
          </div>
        </div>
        <button>Delete</button>
      </div>
      <Navbar />
    </div>
  );
};
