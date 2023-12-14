import { HeaderNav } from "../Navbar/HeaderNav";
import { Navbar } from "../Navbar/Navbar";
import styles from "./Schedule.module.css";
import { useNavigate } from "react-router-dom";
import { ChangeEvent, useEffect, useState } from "react";
import { RightArrowsvg, Searchsvg } from "./svg";
import { CalendarDate } from "@internationalized/date";
import { Calendar } from "@react-spectrum/calendar";
import toast from "react-hot-toast";
import { getVehicles } from "../AddVehicle/AddVehicleApi";
import { ParkingSchedule } from "./ScheduleApi";
import { SearchLocations } from "./SearchLocations";

export const Schedule = () => {
    const formatTime = (date: Date) => {
        // Format the date to HH:mm without converting to UTC
        let hours = date.getHours().toString().padStart(2, "0");
        let minutes = date.getMinutes().toString().padStart(2, "0");
        return `${hours}:${minutes}`;
    };

    const currentTime = new Date();
    const defaultStartTime = new Date(currentTime.getTime());
    const defaultEndTime = new Date(defaultStartTime.getTime());
    defaultEndTime.setMinutes(defaultStartTime.getMinutes() + 30);

    const [formData, setFormData] = useState<ScheduleFormData>({
        startTime: formatTime(defaultStartTime),
        endTime: formatTime(defaultEndTime),
        timeError: "",
        location:
            JSON.parse(String(localStorage.getItem("parking"))).name || "",
        vehicle: "",
        vehicles: [],
        addon: JSON.parse(String(localStorage.getItem("parking"))).addon || [],
    });
    const currentDate = new Date();

    // Create a new CalendarDate instance using the current date
    const defaultCalendarDate = new CalendarDate(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1, // Month is 0-indexed in JavaScript Date, but 1-indexed in CalendarDate
        currentDate.getDate()
    );

    const [selectedDate, setSelectedDate] = useState(defaultCalendarDate);

    const navigate = useNavigate();

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
                startTime = roundToNearest30Min(startTime);
                endTime = roundToNearest30Min(endTime);
                setFormData((prevState) => ({
                    ...prevState,
                    startTime: startTime.toTimeString().substring(0, 5),
                    endTime: endTime.toTimeString().substring(0, 5),
                }));
            }

            diff = (endTime.getTime() - startTime.getTime()) / (1000 * 60);
            if (diff < 30) {
                setFormData((prevState) => ({
                    ...prevState,
                    timeError:
                        "Start and end time must be at least 30 minutes apart.",
                }));
            } else {
                setFormData((prevState) => ({
                    ...prevState,
                    timeError: "",
                }));
            }
        }
    };

	const [isLocation, setIsLocation] = useState(false);

    const handleStartTimeChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newStartTime = e.target.value;
        setFormData((prevState) => ({
            ...prevState,
            startTime: newStartTime,
        }));
        validateAndRoundTime(newStartTime, formData.endTime);
    };

    const handleEndTimeChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newEndTime = e.target.value;
        setFormData((prevState) => ({
            ...prevState,
            endTime: newEndTime,
        }));
        validateAndRoundTime(formData.startTime, newEndTime);
    };

    const handleVehicleSelect = (id: string) => {
        setFormData((prevState) => ({
            ...prevState,
            vehicle: id,
        }));
    };

    const handleAddVehicle = () => {
        navigate("/vehicles");
    };

    const handleFetchDetails = async () => {
        try {
            const response = await getVehicles();
            if (response) {
                setFormData((prevState) => ({
                    ...prevState,
                    vehicles: response,
                }));
            }
        } catch (error) {
            toast.error("Something went wrong, failed to load data");
        }
    };

    useEffect(() => {
        handleFetchDetails();
    }, []);

    const validateForm = (e: ScheduleFormData) => {
        let errors: { [key: string]: string } = {};
        if (!e.vehicle) {
            errors.vehicle = "Vehicle is required";
        }
        if (!e.startTime) {
            errors.StartTime = "Starttime is required";
        }
        if (!e.location) {
            errors.location = "Location is required";
        }
        if (!e.endTime) {
            errors.endTime = "Endtime is required";
        }
        if (!selectedDate) {
            errors.selectedDate = "Date is required";
        }
        {
            Object.keys(errors).length > 0
                ? toast.error(Object.values(errors).join("\n"))
                : null;
        }
        return Object.keys(errors).length > 0 ? false : true;
    };

    const handleSubmitSchedule = (event: { preventDefault: () => void }) => {
        event.preventDefault();
        if (validateForm(formData)) {
            const data = new FormData();
            data.append("startTime", formData.startTime);
            data.append("endTime", formData.endTime);
            data.append("vehicle", formData.vehicle);
            data.append("parking", JSON.parse(localStorage.getItem("parking") as string).id);
            data.append("date", selectedDate.toString());

            toast.promise(ParkingSchedule(data), {
                loading: "Loading...",
                success: (response) => {
                    console.log("Parking successfully scheduled:", response);
					navigate("/successpage");
                    return <b>Parking successfully scheduled!</b>;
                },
                error: (error) => {
                    console.error("Failed to login:", error);
                    return <b>Failed!</b>;
                },
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
                        {formData.vehicles.map((vehicle, index) => (
                            <div
                                key={index}
                                onClick={() => handleVehicleSelect(vehicle.id)}
                                className={`${
                                    formData.vehicle === vehicle.id
                                        ? styles.active
                                        : ""
                                }`}
                            >
                                <p>{vehicle.model}</p>
                                <p>{vehicle.vehicleNumber}</p>
                                <p>{vehicle.owner}</p>
                            </div>
                        ))}
                        <button
                            className={styles.addbutton}
                            onClick={() => handleAddVehicle()}
                        >
                            <p>+</p>
                            <h4>Add Vehicle</h4>
                        </button>
                    </div>
                </div>
                <div className={styles.calendarWrapper}>
                    <h2>2.Select Date</h2>

                    <div className={styles.calendar}>
                        <Calendar
                            value={selectedDate}
                            onChange={setSelectedDate}
                        />
                        {/* <label id="date_label">
                            Selected Value: {selectedDate.toString()}
                        </label> */}
                    </div>
                </div>

                <div className={styles.TimeSelectWrapper}>
                    <h2>3.Select Time</h2>
                    <div className={styles.inputofTime}>
                        <input
                            className={styles.StartTime}
                            type="time"
                            value={formData.startTime}
                            placeholder="7:30"
                            onChange={handleStartTimeChange}
                        />
                        <input
                            className={styles.EndTime}
                            type="time"
                            value={formData.endTime}
                            placeholder="7:30"
                            onChange={handleEndTimeChange}
                        />
                    </div>
                </div>
                <div>
                    <h2>4.Select Location</h2>
                    <div
                        className={styles.locationContainer}
                        onClick={() => setIsLocation(true)}
                    >
                        <Searchsvg />
                        <input
                            type="text"
                            placeholder="Search Your Parking locations"
                            value={formData.location}
                            onChange={(e) => {
                                setFormData((prevState) => ({
                                    ...prevState,
                                    location: e.target.value,
                                }));
                            }}
                        />
                        <button>
                            <RightArrowsvg />
                        </button>
                    </div>
					{isLocation && (
						<SearchLocations />
					)}
                </div>
                {formData.addon.length > 0 && (
                    <div>
                        <h2>5.Add-On</h2>
                        <div className={styles.AddonContainer}>
                            {formData.addon.map(({ name }, index) => (
                                <div
                                    className={styles.addOnContainer}
                                    key={index}
                                >
                                    <input
                                        type="checkbox"
                                        id={`checkbox-${index}`}
                                    />
                                    <label htmlFor={`checkbox-${index}`}>
                                        {name}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                <button type="submit" onClick={handleSubmitSchedule}>
                    Schedule
                </button>
            </div>
            <Navbar />
        </div>
    );
};
