import { Routes } from "../../services/api/Endpoints";
import { privateGateway } from "../../services/api/PrivateGateway";
import { Vehicles } from "./TempData";

export const getVehicles = async () => {
    try {
        const response = await privateGateway.get(Routes.nearbyParking);
        console.log(response.data);
        // return response.data;
    } catch (error) {
		console.error("API error:", error);
        return Vehicles;
    }
};
