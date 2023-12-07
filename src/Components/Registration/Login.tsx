import styles from './register.module.css'
import image from './assets/image.png'

type Props = {}

export const Login = (props: Props) => {
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
        <button>Sign In</button>
      </div>
      <p>Not a member? <a href="/signup">Register Now!</a></p>
    </div>
  );
}