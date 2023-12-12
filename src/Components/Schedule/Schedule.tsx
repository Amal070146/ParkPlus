import { HeaderNav } from "../Navbar/HeaderNav";
import { Navbar } from "../Navbar/Navbar";
import styles from "./Schedule.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { RightArrowsvg, Searchsvg } from "./svg";
import { CalendarDate } from "@internationalized/date";
import { Calendar } from "@react-spectrum/calendar";
import Modal from "../../utils/Modal/Modal";
import toast from "react-hot-toast";
import { getVehicles } from "../AddVehicle/AddVehicleApi";
import { ParkingSchedule } from "./ScheduleApi";

export const Schedule = () => {
    const [startTime, setStartTime] = useState<string>("");
    const [endTime, setEndTime] = useState<string>("");
    const [timeError, setTimeError] = useState<string>("");

    const roundToNearest30Min = (time: Date) => {
        console.log(timeError);
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
                setTimeError(
                    "Start and end time must be at least 30 minutes apart."
                );
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
    const [selectedDate, setSelectedDate] = useState(
        new CalendarDate(2023, 1, 1)
    );
    const [formData, setFormData] = useState<Schedule>({
      startTime: "",
      endTime: "",
      vehicle: "",
      location: "",
    });

   
    const [data, setData] = useState<Vehicles[]>([]);

    const handleFetchDetails = async () => {
        try {
            const response = await getVehicles();
            if (response) {
                setData(response);
                console.log(data);
            }
        } catch (error) {
            toast.error("Something went wrong, failed to load data");
        }
    };

    useEffect(() => {
        handleFetchDetails();
    }, [data]);


    const handleAddVehicle = () => {
        navigate("/vehicles");
    };


    const handleVehicleSelect = (id: string) => {
      setFormData(prev => ({
        ...prev,
        vehicle:id
      }))
    }

    const validateForm = (e: Schedule) => {
      let errors: { [key: string]: string } = {};
      if (!e.vehicle) {
          errors.vehicle = "Vehicle is required";
      }
      if (!e.startTime  ) {
          errors.StartTime = "Starttime is required";
      }
      if (!e.location) {
          errors.location = "Location is required";
      }
      if (!e.endTime) {
          errors.endTime = "Endtime is required";
      }
  if (!selectedDate ) {
          errors.selectedDate = "Date is required";
      } 
      {
          Object.keys(errors).length > 0
              ? toast.error(Object.values(errors).join("\n"))
              : null;
      }
      return Object.keys(errors).length > 0 ? false : true;
  };

    const handleSubmitSchedule = (event: any) => {
      event.preventDefault();
      if (validateForm(formData)) {
          const data = new FormData();
          data.append("startTime", formData.startTime);
          data.append("endTime", formData.endTime);
          data.append("vehicle", formData.vehicle);
          data.append("location", formData.location);
          if (selectedDate) {
              data.append("data", selectedDate.toString());
          }

          toast.promise(ParkingSchedule( data), {
              loading: "Loading...",
              success: response => {
                  console.log("Parking successfully scheduled:", response);
                  return <b>Parking successfully scheduled!</b>;
              },
              error: error => {
                  console.error("Failed to login:", error);
                  return <b>Failed!</b>;
              }
          });
      }
  };
    return (
      <div className={styles.ScheduleWrapper}>
        {" "}
        <HeaderNav title="Schedule" />
        <div className={styles.formWrapper}>
          <div className={styles.selectVehicle}>
            <h2>1.Select Vehicle</h2>
            <div className={styles.AddVechileCardWrap}>
              {data.map((vehicle, index) => (
                <>
                  <div key={index} onClick={() => handleVehicleSelect(vehicle.id)}>
                    <p>{vehicle.model}</p>
                    <p>{vehicle.vehicleNumber}</p>
                    <p>{vehicle.owner}</p>
                  </div>
                  
                </>
              ))}
              <button className={styles.addbutton} onClick={() => handleAddVehicle()}>
                <p>+</p>
                <h4>Add Vehicle</h4>
              </button>
             
            </div>
          </div>
          <div className={styles.calendarWrapper}>
            <h2>2.Select Date</h2>

            <div className={styles.calendar}>
              <Calendar value={selectedDate} onChange={setSelectedDate} />
              {/* <div>
                            <button onClick={goToPreviousMonth}>
                                Previous
                            </button>{" "}
                            <button onClick={goToNextMonth}>Next</button>
                        </div> */}
              <label id="date_label">
                Selected Value: {selectedDate.toString()}
              </label>
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
          <button type="submit" onClick={handleSubmitSchedule}>
            Schedule
          </button>
        </div>
        <Navbar />
      </div>
    );
};
