import toast from "react-hot-toast";
import { supabase } from "../../App";

export const ParkingSchedule = async (
    start: string,
    end: string,
    vehicle: string,
    parking: string,
    date: string
) => {
    const { data, error } = await supabase
        .from("bookings")
        .insert([
            {
                user_id: localStorage.getItem("userId"),
                parking_id: parking,
                vehicle_id: vehicle,
                date: date,
                time_start: start,
                time_end: end,
            },
        ])
        .select();
    if (error) {
        toast.error(error.message);
        throw error;
    } else {
        return data;
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