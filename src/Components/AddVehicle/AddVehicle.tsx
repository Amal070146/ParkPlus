import { useEffect, useState } from "react";
import styles from "./AddVehicles.module.css";
import toast from "react-hot-toast";
import { addVehicle, getVehicles, removeVehicle } from "./AddVehicleApi";
type Props = {};

const AddVehicle = (_props: Props) => {
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
    }, [data]);

    const [newVehicle, setNewVehicle] = useState<AddVehicles>({
        model: "",
        vehicleNumber: "",
        owner: "",
    });

    const handleAddVehicle = async (vehicle: AddVehicles) => {
        try {
			setIsOpen(false)
            const response = await addVehicle(vehicle);
            if (response) {
                toast.success("Vehicle added successfully");
            }
        } catch (error) {
            toast.error("Something went wrong, failed to add vehicle");
        }
    };
    
	const handleRemoveVehicle = async (id:string) => {
        try {
            const response = await removeVehicle(id);
            if (response) {
                toast.success("Vehicle removed");
            }
        } catch (error) {
            toast.error("Something went wrong, failed to remove vehicle");
        }
    };

    return (
        <div className={styles.vehicleWrapper}>
            <h1>Vehicles</h1>
            <div className={styles.vehicleCardsWrapper}>
                {data.map((vehicle) => (
                    <div className={styles.vehicleCards}>
                        <span className={styles.delete} onClick={() => handleRemoveVehicle(vehicle.id)}>x</span>
                        <span>{vehicle.model}</span>
                        <span>{vehicle.vehicleNumber}</span>
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
                        <button onClick={() => {handleAddVehicle(newVehicle)}}>
                            Submit
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AddVehicle;
