import toast from "react-hot-toast";
import { supabase } from "../../App";

export const getNearbyParking = async (location: LocationState) => {
    if (location.latitude && location.longitude) {
        let { data: parking, error } = await supabase
            .from("parking")
            .select("*")
            .gte("latitude", location.latitude - 0.1)
            .lte("latitude", location.latitude + 0.1)
            .gte("longitude", location.longitude - 0.1)
            .lte("longitude", location.longitude + 0.1);
        if (error) {
            toast.error(error.message);
            throw error;
        } else {
            return parking;
        }
    } else {
        let { data: parking, error } = await supabase
            .from("parking")
            .select("*");
        if (error) {
            toast.error(error.message);
            throw error;
        } else {
            return parking;
        }
    }
};
