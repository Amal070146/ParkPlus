import styles from "./Navbar.module.css";
import { Notificationsvg, Profilesvg } from "./svg";
import { useNavigate } from "react-router-dom";

type Props = {
  title: string;
};

export const HeaderNav = ({ title }: Props) => {
  const navigate = useNavigate();

  const navigateTo = (value: string) => {
    navigate(value);
  };

  return (
    <div className={styles.HeaderNavWrapper}>
      <h2>{title}</h2>
      <div>
        <button onClick={() => navigateTo("/notification")}>
          <Notificationsvg />
        </button>
        <button onClick={() => navigateTo("/profile")}>
          <Profilesvg />
        </button>
      </div>
    </div>
  );
};
