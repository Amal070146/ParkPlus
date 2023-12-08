import { HeaderNav } from "../Navbar/HeaderNav";
import { Navbar } from "../Navbar/Navbar";
import styles from "./Profile.module.css";

type Props = {};

export const Profile = (_props: Props) => {
  return (
    <div className={styles.ProfileWrapper}>
      {" "}
      <HeaderNav title="Profile" />
      <Navbar />
    </div>
  );
};
