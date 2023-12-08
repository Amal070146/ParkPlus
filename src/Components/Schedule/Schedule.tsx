import { HeaderNav } from "../Navbar/HeaderNav";
import { Navbar } from "../Navbar/Navbar";
import styles from "./Schedule.module.css";
import { useNavigate } from "react-router-dom";

import { useState } from "react";
import {
  CalendarComponent,
  ChangedEventArgs,
} from "@syncfusion/ej2-react-calendars";

import "./calender.css";
import { RightArrowsvg, Searchsvg } from "./svg";
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

  const [startTime, setStartTime] = useState<string>("");
  const [endTime, setEndTime] = useState<string>("");
  const [timeError, setTimeError] = useState<string>("");

  const roundToNearest30Min = (time: Date) => {
    const minutes = time.getMinutes();
    const isUpperHalf = minutes >= 30;
    const nearestHalfHour = isUpperHalf ? 30 : 0;
    return new Date(time.setMinutes(nearestHalfHour, 0, 0));
  };

  const validateAndRoundTime = (start: string, end: string) => {
    if (start && end) {
      let startTime = new Date(`01/01/2000 ${start}`);
      let endTime = new Date(`01/01/2000 ${end}`);
      let diff = (endTime.getTime() - startTime.getTime()) / (1000 * 60);

      if (diff % 30 !== 0) {
        // Round the times to the nearest 30 minutes if necessary
        startTime = roundToNearest30Min(startTime);
        endTime = roundToNearest30Min(endTime);
        setStartTime(startTime.toTimeString().substring(0, 5)); // Update state with rounded times
        setEndTime(endTime.toTimeString().substring(0, 5));
      }

      // Recalculate the difference
      diff = (endTime.getTime() - startTime.getTime()) / (1000 * 60);
      if (diff < 30) {
        setTimeError("Start and end time must be at least 30 minutes apart.");
      } else {
        setTimeError("");
      }
    }
  };

  const handleStartTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartTime(e.target.value);
    validateAndRoundTime(e.target.value, endTime);
  };

  const handleEndTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEndTime(e.target.value);
    validateAndRoundTime(startTime, e.target.value);
  };


   const [location, setLocation] = useState("");
 const navigate = useNavigate();

 const handleButtonClick = () => {
   navigate("/searchloaction", { state: { location } });
 };

 const addon = [
   {
     checked: true,
     name: "Car wash",
   },
   {
     checked: false,
     name: "Car clean",
   },
   {
     checked: true,
     name: "Car wash",
   },
   {
     checked: false,
     name: "Car clean",
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
        <div className={styles.TimeSelectWrapper}>
          <h2>3.Select Time</h2>
          <div className={styles.inputofTime}>
            <input
              className={styles.StartTime}
              type="time"
              value={startTime}
              placeholder="7:30"
              onChange={handleStartTimeChange}
            />
            <input
              className={styles.EndTime}
              type="time"
              value={endTime}
              placeholder="7:30"
              onChange={handleEndTimeChange}
            />
          </div>
        </div>
        <div>
          <h2>4.Select Location</h2>
          <div className={styles.locationContainer}>
            <Searchsvg />
            <input
              type="text"
              placeholder="Search Your Parking locations"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <button onClick={handleButtonClick}>
              <RightArrowsvg />
            </button>
          </div>
        </div>
        <div>
          <h2>5.Add-On</h2>
          <div className={styles.AddonContainer}>
            {addon.map(({ name, checked }, index) => (
              <div className={styles.addOnContainer} key={index}>
                <input
                  type="checkbox"
                  id={`checkbox-${index}`}
                  checked={checked}
                />
                <label htmlFor={`checkbox-${index}`}>{name}</label>
              </div>
            ))}
          </div>
        </div>
        <button type="submit">Book</button>
      </div>
      <Navbar />
    </div>
  );
};
