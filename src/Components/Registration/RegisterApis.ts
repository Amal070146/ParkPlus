import toast from "react-hot-toast";
import { supabase } from "../../App";
// import { Routes } from "../../services/api/Endpoints";
// import { privateGateway } from "../../services/api/PrivateGateway";

export const registerUser = async (data1: any) => {
    try {
        let { data, error } = await supabase.auth.signUp({
            email: data1.email,
            password: data1.password,
        });
        if (error) {
            toast.error(error.message);
        } else {
            toast.success("Registration successful");
            return data;
        }
    } catch (error: any) {
        console.error("Registration API error:", error.response.data);
        throw error.response.data;
    }
};

export const loginUser = async (data1: any) => {
    try {
        let { data, error } = await supabase.auth.signInWithPassword({
            email: data1.usernameOrEmail,
            password: data1.password,
        });
        if (error) {
            toast.error(error.message);
        } else {
            localStorage.setItem(
                "accessToken",
                data.session?.access_token as string
            );
			localStorage.setItem(
				"userId",
				data.user?.id as string
			)
            return data;
        }
    } catch (error) {
        console.error("Registration API error:", error);
        throw error;
    }
};
