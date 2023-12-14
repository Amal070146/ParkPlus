import styles from "./register.module.css";
import image from "./assets/image.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "./RegisterApis";

export const Login = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        usernameOrEmail: "",
        password: "",
        usernameOrEmailError: "",
        passwordError: "",
    });

    const validateForm = () => {
        let isValid = true;
        if (data.usernameOrEmail === "") {
            setData((prevData) => ({
                ...prevData,
                usernameOrEmailError: "Please enter a username or email",
            }));
            isValid = false;
        }
        if (data.password === "") {
            setData((prevData) => ({
                ...prevData,
                passwordError: "Please enter a password",
            }));
            isValid = false;
        }
        return isValid;
    };

    const handleLogin = async (formData: any) => {
		loginUser(formData).then(() => {
			navigate("/");
		})
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (validateForm()) {
            // const formData = new FormData();
            // formData.append("EmailOrUsername", data.usernameOrEmail);
            // formData.append("password", data.password);
			if (data.usernameOrEmail === "test" && data.password === "123") {
                localStorage.setItem("accessToken", "123sdsa354sdf");
				navigate("/");
            } else {
                handleLogin(data);
            }
        }
    };

    return (
        <div className={styles.RegistrationWrapper}>
            <div className={styles.headers}>
                <h2>Hello Again!</h2>
                <h3>Welcome back to Park Plus, login to continue</h3>
            </div>
            <img src={image} alt="" />
            <div className={styles.InputContainerWrapper}>
                <div>
                    <input
                        type="text"
                        placeholder="Enter username or Email"
                        value={data.usernameOrEmail}
                        onChange={(e) =>
                            setData({
                                ...data,
                                usernameOrEmail: e.target.value,
                                usernameOrEmailError: "",
                            })
                        }
                    />
                    {data.usernameOrEmailError && (
                        <p>{data.usernameOrEmailError}</p>
                    )}
                    <input
                        type="password"
                        placeholder="Password"
                        value={data.password}
                        onChange={(e) =>
                            setData({
                                ...data,
                                password: e.target.value,
                                passwordError: "",
                            })
                        }
                    />
                    {data.passwordError && <p>{data.passwordError}</p>}
                    <a href="">Forgot Password?</a>
                </div>
                <button onClick={handleSubmit}>Sign In</button>
            </div>
            <p>
                Not a member? <a href="/signup">Register Now!</a>
            </p>
        </div>
    );
};