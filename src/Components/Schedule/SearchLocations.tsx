import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Schedule.module.css";
import { HeaderNav } from "../Navbar/HeaderNav";
import { RightArrowsvg, Searchsvg } from "./svg";
type Props = {};

export const SearchLocations = (_props: Props) => {
  const location = useLocation();
  const { location: searchQuery } = location.state || {};
  const data = [
    {
      image:
        "https://imgs.search.brave.com/gpjzVANMwjTB939eCXVwr8A8havI2Qd_tFtL9nm22_s/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE0/NDQ3MDM2ODY5ODEt/YTNhYmJjNGQ0ZmUz/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4T0h4OGNH/bGpkSFZ5Wlh4bGJu/d3dmSHd3Zkh4OE1B/PT0",
      name: "Thrissur parking",
      amountperhalfhr: "30",
      freespace: 5,
      totalspace: 50,
    },
    {
      image:
        "https://imgs.search.brave.com/gpjzVANMwjTB939eCXVwr8A8havI2Qd_tFtL9nm22_s/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE0/NDQ3MDM2ODY5ODEt/YTNhYmJjNGQ0ZmUz/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4T0h4OGNH/bGpkSFZ5Wlh4bGJu/d3dmSHd3Zkh4OE1B/PT0",
      name: "Thrissur parking",
      amountperhalfhr: "30",
      freespace: 5,
      totalspace: 50,
    },
    {
      image:
        "https://imgs.search.brave.com/gpjzVANMwjTB939eCXVwr8A8havI2Qd_tFtL9nm22_s/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE0/NDQ3MDM2ODY5ODEt/YTNhYmJjNGQ0ZmUz/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4T0h4OGNH/bGpkSFZ5Wlh4bGJu/d3dmSHd3Zkh4OE1B/PT0",
      name: "Thrissur parking",
      amountperhalfhr: "30",
      freespace: 5,
      totalspace: 50,
    },
    {
      image:
        "https://imgs.search.brave.com/gpjzVANMwjTB939eCXVwr8A8havI2Qd_tFtL9nm22_s/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE0/NDQ3MDM2ODY5ODEt/YTNhYmJjNGQ0ZmUz/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4T0h4OGNH/bGpkSFZ5Wlh4bGJu/d3dmSHd3Zkh4OE1B/PT0",
      name: "Thrissur parking",
      amountperhalfhr: "30",
      freespace: 5,
      totalspace: 50,
    },
    {
      image:
        "https://imgs.search.brave.com/gpjzVANMwjTB939eCXVwr8A8havI2Qd_tFtL9nm22_s/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE0/NDQ3MDM2ODY5ODEt/YTNhYmJjNGQ0ZmUz/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4T0h4OGNH/bGpkSFZ5Wlh4bGJu/d3dmSHd3Zkh4OE1B/PT0",
      name: "Thrissur parking",
      amountperhalfhr: "30",
      freespace: 5,
      totalspace: 50,
    },
  ];
  const navigate = useNavigate();
  const navigateToDashboard = () => {
    navigate("/schedule");
  };
  return (
    <div className={styles.SearchLocationWrapper}>
      <HeaderNav title="Select Locations" />

      <p>Searching for: {searchQuery}</p>
      <div className={styles.locationContainer}>
        <Searchsvg />
        <input type="text" placeholder="Search Nearest locations" />
        <button>
          <RightArrowsvg />
        </button>
      </div>
      <div className={styles.dataSetWrapper}>
        {data.map(({ image, name, amountperhalfhr, freespace, totalspace }) => (
          <button className={styles.DataSet}>
            <img src={image} alt={name} />
            <h4>{name}</h4>
            <p>{amountperhalfhr}Rs / 30 m</p>
            <p>
              {freespace}/{totalspace} slots
            </p>
          </button>
        ))}
      </div>
      <button onClick={navigateToDashboard}>Done</button>
    </div>
  );
};
