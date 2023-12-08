import { Routes } from "../../services/api/Endpoints";
import { privateGateway } from "../../services/api/PrivateGateway";

export const registerUser = async (data: FormData) => {
    try {
        const response = await privateGateway.post(Routes.register, data);
        const accessToken = response.data.response.accessToken;
        // localStorage.setItem("accessToken", accessToken);
        console.log(accessToken);
        return response.data;
    } catch (error) {
        console.error("Registration API error:", error);
        throw error;
    }
};

export const loginUser = async (data: FormData) => {
    try {
        const response = await privateGateway.post(Routes.register, data);
        const accessToken = response.data.response.accessToken;
        // localStorage.setItem("accessToken", accessToken);
        console.log(accessToken);
        return response.data;
    } catch (error) {
        console.error("Registration API error:", error);
        throw error;
    }
};
