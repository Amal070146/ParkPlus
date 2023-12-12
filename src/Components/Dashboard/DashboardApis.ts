import { Routes } from "../../services/api/Endpoints";
import { privateGateway } from "../../services/api/PrivateGateway";
import { NearbyParkings } from "./tempData";

export const getNearbyParking = async (location: LocationState) => {
    try {
        const response = await privateGateway.post(Routes.nearbyParking, {
            latitude: location.latitude,
            longitude: location.longitude,
        });
        console.log(response.data);
        // return response.data;
        return NearbyParkings;
    } catch (error) {
        console.error("API error:", error);
		return NearbyParkings;
    }
};
