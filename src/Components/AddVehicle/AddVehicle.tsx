import { useEffect, useState } from "react";
import styles from "./AddVehicles.module.css";
import toast from "react-hot-toast";
import { addVehicle, getVehicles, removeVehicle } from "./AddVehicleApi";
import { HeaderNav } from "../Navbar/HeaderNav";
import { Navbar } from "../Navbar/Navbar";

const AddVehicle = () => {
    const [data, setData] = useState<Vehicles[]>([]);
    const [isOpen, setIsOpen] = useState(false);

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
    }, []);

    const [newVehicle, setNewVehicle] = useState<AddVehicles>({
        model: "",
        vehicleNumber: "",
        owner: "",
    });

    const handleAddVehicle = async (vehicle: AddVehicles) => {
        setIsOpen(false);
        if (data.length >= 5) {
            toast.error("Maximum number of vehicles reached");
            return;
        } else {
            const response = await addVehicle(vehicle);
            console.log(response);
            if (response) {
                toast.success("Vehicle added successfully");
                handleFetchDetails();
            }
        }
    };

    const handleRemoveVehicle = async (id: string) => {
        try {
            await removeVehicle(id).then(() => {
                toast.success("Vehicle removed");
				handleFetchDetails();
            });
        } catch (error) {
            toast.error("Something went wrong, failed to remove vehicle");
        }
    };

    return (
        <div className={styles.vehicleWrapper}>
            <HeaderNav title={"Add Vehicles"} />
            <div className={styles.vehicleCardsWrapper}>
                {data.map((vehicle) => (
                    <div className={styles.vehicleCards}>
                        <span
                            className={styles.delete}
                            onClick={() => handleRemoveVehicle(vehicle.id)}
                        >
                            x
                        </span>
                        <span>{vehicle.model}</span>
                        <span>{vehicle.vehicle_number}</span>
                        <span>{vehicle.owner}</span>
                    </div>
                ))}
                <div
                    className={styles.vehicleCards}
                    onClick={() => {
                        if (data.length >= 5) {
                            toast.error("Cannot add more than 5 vehicles");
                        } else {
                            setIsOpen(true);
                        }
                    }}
                >
                    <p>+</p>
                    <p>Add Vehicle</p>
                </div>
            </div>
            {isOpen && (
                <div>
                    <div className={styles.modalForm}>
                        <h2>Add Vehicle</h2>
                        <div>
                            <input
                                type="text"
                                placeholder="Enter Vehicle Name"
                                onChange={(e) =>
                                    setNewVehicle({
                                        ...newVehicle,
                                        model: e.target.value,
                                    })
                                }
                            />
                            <input
                                type="text"
                                placeholder="Enter Registration Number"
                                onChange={(e) =>
                                    setNewVehicle({
                                        ...newVehicle,
                                        vehicleNumber: e.target.value,
                                    })
                                }
                            />
                            <input
                                type="text"
                                placeholder="Enter Owner Name"
                                onChange={(e) =>
                                    setNewVehicle({
                                        ...newVehicle,
                                        owner: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <button
                            onClick={() => {
                                handleAddVehicle(newVehicle);
                            }}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            )}
            <Navbar />
        </div>
    );
};

export default AddVehicle;
