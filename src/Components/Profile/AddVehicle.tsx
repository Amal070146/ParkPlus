import { HeaderNav } from "../Navbar/HeaderNav";
import { Navbar } from "../Navbar/Navbar";
import styles from "./Profile.module.css";

type Props = {};

export const AddVehicle = (_props: Props) => {
  const data = [
    {
      name: "toyota",
      owner: "Amal",
      number: "KL-08-BK-0909",
    },
    {
      name: "toyota",
      owner: "Amal",
      number: "KL-08-BK-0909",
    },
    {
      name: "toyota",
      owner: "Amal",
      number: "KL-08-BK-0909",
    },
    {
      name: "toyota",
      owner: "Amal",
      number: "KL-08-BK-0909",
    },
    {
      name: "toyota",
      owner: "Amal",
      number: "KL-08-BK-0909",
    },
    {
      name: "toyota",
      owner: "Amal",
      number: "KL-08-BK-0909",
    },
  ];
  return (
    <div className={styles.AddVehicleWrapper}>
      <HeaderNav title={"Add Vehicles"} />
      <div className={styles.Details}>
        {data.map(({ name, owner, number }) => {
          return (
            <div>
              <p>{name}</p>
              <p>{number}</p>
              <p>{owner}</p>
            </div>
          );
        })}
        <div className={styles.adding}>
            <p>+</p>
            <p>Add Vehicle</p>
        </div>
      </div>

      <Navbar />
    </div>
  );
};
