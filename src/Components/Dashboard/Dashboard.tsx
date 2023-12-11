import { useEffect, useState } from "react";
import { Navbar } from "../Navbar/Navbar";
import { HeaderNav } from "../Navbar/HeaderNav";
import styles from "./Dashboard.module.css";
import { ArrowLeftsvg, Dirctionsvg } from "./svg";
import { Map, Marker } from "pigeon-maps";
import toast from "react-hot-toast";
import { getNearbyParking } from "./DashboardApis";

export const Dashboard = () => {
    const [location, setLocation] = useState<LocationState>({
        latitude: null,
        longitude: null,
    });

    useEffect(() => {
        if (!navigator.geolocation) {
            setLocation((prevState) => ({
                ...prevState,
                error: "Geolocation is not supported by your browser.",
            }));
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                setLocation({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                });
                console.log(location);
            },
            () => {
                setLocation((prevState) => ({
                    ...prevState,
                    error: "Unable to retrieve your location.",
                }));
            }
        );
    }, [2000]);

    const [data, setData] = useState<NearbyParkings[]>([]);

    const handleFetchDetails = async () => {
        try {
            const response = await getNearbyParking(location);
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

    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = data.length; 
    const handleLeftArrowClick = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    const handleRightArrowClick = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };

    return (
        <div className={styles.DashboardWrapper}>
            <HeaderNav title="Dashboard" />
            <div className={styles.dasboardSliderWrapper}>
                <div
                    className={styles.LeftArrow}
                    onClick={handleLeftArrowClick}
                >
                    <ArrowLeftsvg />
                </div>
                <div className={styles.CardsWrapper}>
                    {data.map((item) => (
                        <div
                            className={styles.IndividualCards}
                            style={{
                                transform: `translateX(-${
                                    currentSlide * 100
                                }%)`,
                            }}
                        >
                            <img src={item.image} width={250} height={150} alt="Parking space image" />
                            <div className={styles.content}>
                                <div>
                                    <h4>{item.name}</h4>
                                    <div className={styles.RateWrap}>
                                        <p>Pay : {item.rate}/hr </p>
                                        <p>
											{" "}Available :
                                            {item.capacity.available}/
                                            {item.capacity.total}
                                        </p>
                                    </div>
                                </div>
                                <a
                                    href={`https://maps.google.com/?q=${item.latitude},${item.longitude}`}
                                >
                                    <Dirctionsvg />
                                </a>
                            </div>
                        </div>
                    ))}
                    <div
                        className={styles.IndividualCards}
                        style={{
                            transform: `translateX(-${currentSlide * 100}%)`,
                        }}
                    >
                        Slide 2
                    </div>
                    <div
                        className={styles.IndividualCards}
                        style={{
                            transform: `translateX(-${currentSlide * 100}%)`,
                        }}
                    >
                        Slide 3
                    </div>
                </div>
                <div
                    className={styles.RightArrow}
                    onClick={handleRightArrowClick}
                >
                    <ArrowLeftsvg />
                </div>
            </div>
            <div className={styles.MApWrapper}>
                {location.error ? (
                    <p>Error: {location.error}</p>
                ) : (
                    location.latitude &&
                    location.longitude && (
                        <Map
                            height={300}
                            defaultCenter={[
                                location.latitude || 0,
                                location.longitude || 0,
                            ]}
                            defaultZoom={15}
                        >
                            <Marker
                                color="blue"
                                onClick={() =>
                                    window.open(
                                        `https://maps.google.com/?q=${location.latitude},${location.longitude}`,
                                        "_blank"
                                    )
                                }
                                width={50}
                                anchor={[
                                    location.latitude || 0,
                                    location.longitude || 0,
                                ]}
                            />
                            {data &&
                                data.map((parking) => (
                                    <Marker
                                        color={`${
                                            parking.booked ? "red" : "grey"
                                        }`}
                                        onClick={() =>
                                            window.open(
                                                `https://maps.google.com/?q=${parking.latitude},${parking.longitude}`,
                                                "_blank"
                                            )
                                        }
                                        width={50}
                                        anchor={[
                                            parking.latitude || 0,
                                            parking.longitude || 0,
                                        ]}
                                    />
                                ))}
                        </Map>
                    )
                )}
            </div>
            <a href="/schedule">Book Slot</a>
            <Navbar />
        </div>
    );
};
