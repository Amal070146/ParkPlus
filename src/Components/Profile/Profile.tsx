import { HeaderNav } from "../Navbar/HeaderNav";
import { Navbar } from "../Navbar/Navbar";
import styles from "./Profile.module.css";
import {
  Settingssvg,
  Locationsvg,
  Mailsvg,
  Supportsvg,
  Deletesvg,
  Logoutsvg,
  RightArrowsvg,
} from "./svg";

type Props = {};

export const Profile = (_props: Props) => {
  return (
    <div className={styles.ProfileWrapper}>
      {" "}
      <HeaderNav title="Profile" />
      <div className={styles.DetailWrapper}>
        <div className={styles.HeadingSection}>
          <div className={styles.Names}>
            <div>
              <h2>Amal C P</h2>
              <p>(User)</p>
            </div>
            <p>amalcpaulson@gmail.com</p>
          </div>
          <div className={styles.coins}>
            <div className={styles.imagecont}></div>
            <h2>1352</h2>
          </div>
        </div>
        <div className={styles.ButtonWrapper}>
          <button>
            <div>
              <Settingssvg />
              <h2>Edit Profile</h2>
            </div>
            <RightArrowsvg />
          </button>
          <button>
            <div>
              <Locationsvg />
              <h2>Add Vehicle</h2>
            </div>
            <RightArrowsvg />
          </button>
          <button>
            <div>
              <Mailsvg />
              <h2>Contact Us</h2>
            </div>
            <RightArrowsvg />
          </button>
          <button>
            <div>
              <Supportsvg />
              <h2>Support</h2>
            </div>
            <RightArrowsvg />
          </button>
          <button>
            <div>
              <Deletesvg />
              <h2>Delete Account</h2>
            </div>
            <RightArrowsvg />
          </button>
          <button>
            <div>
              <Logoutsvg />
              <h2>LogOut</h2>
            </div>
            <RightArrowsvg />
          </button>
        </div>
      </div>
      <Navbar />
    </div>
  );
};
