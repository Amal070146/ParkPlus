import { Routes } from "../../services/api/Endpoints";
import { privateGateway } from "../../services/api/PrivateGateway";
import { NearbyParkings } from "../Dashboard/tempData";

export const ParkingSchedule = async (data: FormData) => {
    try {
        const response = await privateGateway.post(Routes.nearbyParking, data);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("API error:", error);
        return "error"
    }
};

export const getLocations = async (location: string) => {
    try {
        const response = await privateGateway.post(Routes.nearbyParking, {
			location: location
		});
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("API error:", error);
        return NearbyParkings;
    }
};