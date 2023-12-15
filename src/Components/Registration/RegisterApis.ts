import toast from "react-hot-toast";
import { supabase } from "../../App";
// import { Routes } from "../../services/api/Endpoints";
// import { privateGateway } from "../../services/api/PrivateGateway";

export const registerUser = async (data1: any) => {
    try {
        let { data, error } = await supabase.auth.signUp({
            email: data1.email,
            password: data1.password,
		})
        if (error) {
            toast.error(error.message);
        } else {
			handleDisplayName(data1.username, data.user?.id as string);
            toast.success("Registration successful");
			localStorage.setItem(
				"userId", data.user?.id as string
			)
			localStorage.setItem(
				"user", JSON.stringify(data.session)
			)
			localStorage.setItem(
				"accessToken", data.session?.access_token as string
			)
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
			localStorage.setItem("user", JSON.stringify(data.session));
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

const handleDisplayName = async (username: string, userId: string) => {
	const { data, error } = await supabase
        .from("profiles")
        .upsert({
            user_id: userId,
            name: username,
        });
    if (error) {
        toast.error(error.message);
        throw error;
    } else {
		console.log(data);
    }
}


