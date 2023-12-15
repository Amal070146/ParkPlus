import toast from "react-hot-toast";
import { supabase } from "../../App";
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

export const getLocations = async (location: string) => {
    let { data: parking, error } = await supabase
        .from("parking")
        .select("*")
        .ilike("location", location + "%");
	if (error) {
		toast.error(error.message)
		throw error
	} else {
		return parking
	}
};