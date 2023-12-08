import { HeaderNav } from "../Navbar/HeaderNav";
import { Navbar } from "../Navbar/Navbar";
import styles from "./Schedule.module.css";

import { useState } from "react";
import {
  CalendarComponent,
  ChangedEventArgs,
} from "@syncfusion/ej2-react-calendars";

import "./calender.css";
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

  const [currentDate, setCurrentDate] = useState(new Date());

  const goToNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const goToPreviousMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };
  const onDateChange = (args: ChangedEventArgs): void => {
    setCurrentDate(args.value || new Date());
  };
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
            <button className={styles.addbutton}>
              <p>+</p>
              <h4>Add Vehicle</h4>
            </button>
          </div>
        </div>
        <div>
          <h2>2.Select Date</h2>
          <div className="control-pane">
            <div className="control-section">
              <div
                className="calendar-control-section"
                style={{
                  overflow: "auto",
                  display: "flex",
                  flexDirection: "column",
                  gap: "5px",
                }}
              >
                <CalendarComponent
                  value={currentDate}
                  change={onDateChange}
                ></CalendarComponent>
                <div>
                  <button onClick={goToPreviousMonth}>Previous</button>{" "}
                  <button onClick={goToNextMonth}>Next</button>
                </div>
                <label id="date_label">
                  Selected Value: {currentDate.toLocaleDateString()}
                </label>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2>3.Select Time</h2>
          <div>
            <input className={styles.StartTime} type="text" name="" id="" />
            <input className={styles.EndTime} type="text" name="" id="" />
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
      <Navbar />
    </div>
  );
};
