import { useEffect, useState } from "react";
import styles from "./AddVehicles.module.css";
import toast from "react-hot-toast";
import { getVehicles } from "./AddVehicleApi";
type Props = {};

const AddVehicle = (_props: Props) => {
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

    return (
        <div className={styles.vehicleWrapper}>
            <h1>Vehicles</h1>
            <div className={styles.vehicleCardsWrapper}>
				{data.map((vehicle) => (
					<div className={styles.vehicleCards}>
						<span>{vehicle.model}</span>
						<span>{vehicle.vehicleNumber}</span>
						<span>{vehicle.owner}</span>
					</div>
				))}
            </div>
        </div>
    );
};

export default AddVehicle;
