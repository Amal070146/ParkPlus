import styles from "./register.module.css";
import image from "./assets/image.png";
type Props = {};

export const Signup = (props: Props) => {
  return (
    <div className={styles.RegistrationWrapper}>
      <div className={styles.headers}>
        <h2>Lets Get Started!</h2>
        <h3>Welcome to Park Plus signup to continue.</h3>
      </div>
      <img src={image} alt="" />
      <div className={styles.InputContainerWrapper}>
        <div>
          <input type="text" placeholder="Enter username" />
          <input type="text" placeholder="Enter Email" />
          <input type="text" placeholder="Password" />
          <input type="text" placeholder="Confirm Password" />
          <a href="">Forgot Password?</a>
        </div>
        <button>Sign Up</button>
      </div>
      <p>
       Already Registered? <a href="/">Continue to Login!</a>
      </p>
    </div>
  );
};
