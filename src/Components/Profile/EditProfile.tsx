import { useNavigate } from "react-router";
import { HeaderNav } from "../Navbar/HeaderNav";
import { Navbar } from "../Navbar/Navbar";
import styles from "./Profile.module.css";

type Props = {};

export const EditProfile = (_props: Props) => {
  const navigate = useNavigate();
  const HandleSubmit = () => {
    navigate("/profile");
  };
  return (
    <div className={styles.EditProfileWrapper}>
      {" "}
      <HeaderNav title="EditProfile" />
      <div className={styles.DetailSection}>
        <div>
          {" "}
          <div>
            <h2>Change Name</h2>
            <input type="text" placeholder="Enter Name" />
          </div>
          <div>
            <h2>Change Email</h2>
            <input type="text" placeholder="Enter Email" />
          </div>
          <div>
            <h2>Change Password</h2>
            <input type="text" placeholder="Enter Old Password" />
            <input type="text" placeholder="Enter New Password" />
            <input type="text" placeholder="Enter Confirm Password" />
          </div>
        </div>
        <button onClick={HandleSubmit}>Update</button>
      </div>
      <Navbar />
    </div>
  );
};
