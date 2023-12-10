import styles from "./Successpage.module.css";
import { HeaderNav } from "../Navbar/HeaderNav";
import { Navbar } from "../Navbar/Navbar";
import image from "./assets/successimage.png";
import { useNavigate } from "react-router-dom";
type Props = {};

export const Successpage = (_props: Props) => {
   const navigate = useNavigate();
   const handleSubmit = ()=>{
    navigate("/ticket");
   }
  return (
    <div className={styles.SuccessWrapper}>
      {" "}
      <HeaderNav title="Successpage" />
      <div className={styles.DivSection}>
        <div className={styles.ImageWrapper}>
          <img src={image} alt="" />
          <div>
            <h2>Pickup Scheduled Successfully</h2>
            <p>An associate will get in touch with you soon.</p>
          </div>
        </div>
        <button onClick={handleSubmit}>View Ticket</button>
      </div>
      <Navbar />
    </div>
  );
};
