import { Routes } from "../../services/api/Endpoints";
import { privateGateway } from "../../services/api/PrivateGateway";
import { Vehicles } from "./TempData";

export const getVehicles = async () => {
    return Vehicles;
    try {
        const response = await privateGateway.get(Routes.nearbyParking);
        console.log(response.data);
        // return response.data;
    } catch (error) {
		console.error("API error:", error);
        return Vehicles;
    }
};

export const addVehicle = async (data: AddVehicles) => {
    try {
        const response = await privateGateway.post(Routes.nearbyParking, data);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("API error:", error);
        return Vehicles;
    }
};

export const removeVehicle = async (id:string) => {
    try {
        const response = await privateGateway.delete(Routes.nearbyParking + "/" + id + "/");
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("API error:", error);
        return Vehicles;
    }
};
