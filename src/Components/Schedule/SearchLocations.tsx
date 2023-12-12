import { useNavigate } from "react-router-dom";
import styles from "./Schedule.module.css";
import { HeaderNav } from "../Navbar/HeaderNav";
import { RightArrowsvg, Searchsvg } from "./svg";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getLocations } from "./ScheduleApi";

export const SearchLocations = () => {
    const [data, setData] = useState<NearbyParkings[]>([]);
    const [location, setLocation] = useState("");

    const handleFetchDetails = async () => {
        try {
            const response = await getLocations(location);
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

    const navigate = useNavigate();

    return (
        <div className={styles.SearchLocationWrapper}>
            <HeaderNav title="Select Locations" />
            <div className={styles.locationContainer}>
                <Searchsvg />
                <input
                    type="text"
                    placeholder="Search Nearest locations"
                    onChange={(e) => setLocation(e.target.value)}
                />
                <button onClick={handleFetchDetails}>
                    <RightArrowsvg />
                </button>
            </div>
            <div className={styles.dataSetWrapper}>
                {data &&
                    data.map((parking) => (
                        <button
                            className={styles.DataSet}
                            onClick={() => {
                                localStorage.setItem(
                                    "parking",
                                    JSON.stringify(parking)
                                );
                            }}
                        >
                            <img src={parking.image} alt={parking.name} />
                            <h4>{parking.name}</h4>
                            <p>{parking.rate / 2}Rs / 30 m</p>
                            {parking.capacity && (
                                <p>
                                    {parking.capacity.available}/
                                    {parking.capacity.total} slots
                                </p>
                            )}
                        </button>
                    ))}
            </div>
            <button onClick={() => navigate("/schedule")}>Done</button>
        </div>
    );
};