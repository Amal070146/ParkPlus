import { HeaderNav } from '../Navbar/HeaderNav';
import { Navbar } from '../Navbar/Navbar';
import styles from './Profile.module.css'

type Props = {}

export const EditProfile = (_props: Props) => {
  return (
    <div className={styles.EditProfileWrapper}>
      {" "}
      <HeaderNav title="EditProfile" />
      <Navbar />
    </div>
  );
}