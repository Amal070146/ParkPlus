import { HeaderNav } from '../Navbar/HeaderNav'
import { Navbar } from '../Navbar/Navbar';
import styles from './AddParkings.module.css'

type Props = {}

export const AddParkings = (_props: Props) => {
  return (
    <div className={styles.AddParkingsWrapper}>
      <HeaderNav title={"Add Parkings"} />
      <Navbar />
    </div>
  );
}