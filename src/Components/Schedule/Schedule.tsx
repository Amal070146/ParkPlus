import { HeaderNav } from "../Navbar/HeaderNav";
import { Navbar } from "../Navbar/Navbar";
import styles from "./Schedule.module.css";

type Props = {};

export const Schedule = (_props: Props) => {
  const data = [
    {
      vechilename: "Toyota",
      regno: "KL-08-BK-0222",
      owner: "Amal C P",
    },
    {
      vechilename: "Toyota",
      regno: "KL-08-BK-0222",
      owner: "Amal C P",
    },
    {
      vechilename: "Toyota",
      regno: "KL-08-BK-0222",
      owner: "Amal C P",
    },
    {
      vechilename: "Toyota",
      regno: "KL-08-BK-0222",
      owner: "Amal C P",
    },
    {
      vechilename: "Toyota",
      regno: "KL-08-BK-0222",
      owner: "Amal C P",
    },
  ];
  return (
    <div className={styles.ScheduleWrapper}>
      {" "}
      <HeaderNav title="Schedule" />
      <div className={styles.formWrapper}>
        <div className={styles.selectVehicle}>
          <h2>1.Select Vehicle</h2>
          <div className={styles.AddVechileCardWrap}>
            {data.map(({ vechilename, regno, owner }, i) => (
              <button key={i}>
                <p>{vechilename}</p>
                <p>{regno}</p>
                <p>{owner}</p>
              </button>
            ))}
            <button>
              <p>+</p>
              <p>Add Vehicle</p>
            </button>
          </div>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <Navbar />
    </div>
  );
};
