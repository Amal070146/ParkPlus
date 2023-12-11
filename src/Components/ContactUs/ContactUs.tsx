import { HeaderNav } from "../Navbar/HeaderNav";
import { Navbar } from "../Navbar/Navbar";
import styles from './ContactUs.module.css'
import image from './image.png'

export const ContactUs = () => {
  return (
    <div className={styles.ContactUSWrapper}>
      <HeaderNav title={"Conatct Us"} />
      <div className={styles.DetailWrapper}>
        <h2>Send Message</h2>
        <img src={image} alt="" />
        <input type="text" placeholder="Name"/>
        <input type="text" placeholder="Email"/>
        <textarea name="" id="" placeholder="Message"></textarea>
        <button>Submit</button>
      </div>
      <Navbar />
    </div>
  );
};
