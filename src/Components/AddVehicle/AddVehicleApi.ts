import toast from "react-hot-toast";
import { supabase } from "../../App";

export const getVehicles = async () => {
    let { data: vehicles, error } = await supabase
        .from("vehicles")
        .select("*")
        // Filters
        .eq("user_id", localStorage.getItem("userId"));
    if (error) {
        toast.error(error.message);
    } else {
        return vehicles;
    }
};

export const addVehicle = async (data1: AddVehicles) => {
    const { data, error } = await supabase
        .from("vehicles")
        .insert([
            {
                user_id: localStorage.getItem("userId"),
                vehicle_number: data1.vehicleNumber,
                model: data1.model,
                owner: data1.owner,
            },
        ])
        .select();
    if (error) {
        toast.error(error.message);
    } else {
        return data;
    }
};

export const removeVehicle = async (id: string) => {
    const { error } = await supabase
        .from("vehicles")
        .delete()
        .eq("id", id);
	if (error) {
		toast.error(error.message);
	}
};
