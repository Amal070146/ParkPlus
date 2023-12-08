import { Routes } from "../../services/api/Endpoints";
import { privateGateway } from "../../services/api/PrivateGateway";

export const registerUser = async (data: FormData) => {
    try {
        const response: any = await privateGateway.post(Routes.register, data);
        const message = response;
        console.log(message);
        return message;
    } catch (error: any) {
        console.error("Registration API error:", error.response.data);
        throw error.response.data;
    }
};

export const loginUser = async (data: FormData) => {
    try {
        const response: any = await privateGateway.post(Routes.login, data);
        const accessToken = response.accessToken;
        localStorage.setItem("accessToken", accessToken);
        console.log(accessToken);
        return response.data;
    } catch (error) {
        console.error("Registration API error:", error);
        throw error;
    }
};
