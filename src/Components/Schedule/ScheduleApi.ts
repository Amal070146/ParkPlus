import { Routes } from "../../services/api/Endpoints";
import { privateGateway } from "../../services/api/PrivateGateway";

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