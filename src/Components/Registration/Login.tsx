import styles from './register.module.css'
import image from './assets/image.png'
import { useNavigate } from "react-router-dom";
type Props = {}

export const Login = (_props: Props) => {
   const navigate = useNavigate();
   const navigateToDashboard = () => {
     navigate("/");
   };
  return (
    <div className={styles.RegistrationWrapper}>
      <div className={styles.headers}>
        <h2>Hello Again!</h2>
        <h3>Welcome back to Park Plus, login to continue</h3>
      </div>
      <img src={image} alt="" />
      <div className={styles.InputContainerWrapper}>
        <div>
          <input type="text" placeholder="Enter username or Email" />
          <input type="text" placeholder="Password" />
          <a href="">Forgot Password?</a>
        </div>
        <button onClick={navigateToDashboard}>Sign In</button>
      </div>
      <p>
        Not a member? <a href="/signup">Register Now!</a>
      </p>
    </div>
  );
}