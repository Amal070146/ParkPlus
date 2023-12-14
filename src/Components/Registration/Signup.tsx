import styles from "./register.module.css";
import image from "./assets/image.png";
import { useNavigate } from "react-router-dom";
import {
    // JSXElementConstructor,
    // ReactElement,
    // ReactNode,
    // ReactPortal,
    useState,
} from "react";
import { registerUser } from "./RegisterApis";
// import { JSX } from "react/jsx-runtime";

export const Signup = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        username: "",
        usernameError: "",
        email: "",
        emailError: "",
        password: "",
        passwordError: "",
        password2: "",
        password2Error: "",
    });

    const validateForm = () => {
        let isValid = true;
        if (data.username === "") {
            setData((prevData) => ({
                ...prevData,
                usernameError: "Please enter a username",
            }));
            isValid = false;
        }
        if (data.email === "") {
            setData((prevData) => ({
                ...prevData,
                emailError: "Please enter an email",
            }));
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            setData((prevData) => ({
                ...prevData,
                emailError: "Please enter a valid email",
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
        if (data.password !== data.password2) {
            setData((prevData) => ({
                ...prevData,
                password2Error: "Passwords do not match",
            }));
            isValid = false;
        }
        return isValid;
    };

	const handleRegistration = async (formData: any) => {
		await registerUser(formData).then(() => {
			navigate("/login");
		})
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault(); 
        if (validateForm()) {
			// const formData = new FormData();
			// formData.append("username", data.username);
			// formData.append("email", data.email);
			// formData.append("password", data.password);
			handleRegistration(data);
        }
    };

    return (
        <div className={styles.RegistrationWrapper}>
            <div className={styles.headers}>
                <h2>Lets Get Started!</h2>
                <h3>Welcome to Park Plus, sign up to continue.</h3>
            </div>
            <img src={image} alt="" />
            <div className={styles.InputContainerWrapper}>
                <div>
                    <input
                        type="text"
                        placeholder="Enter username"
                        value={data.username}
                        onChange={(e) =>
                            setData({
                                ...data,
                                username: e.target.value,
                                usernameError: "",
                            })
                        }
                    />
                    {data.usernameError && <p>{data.usernameError}</p>}
                    <input
                        type="email"
                        placeholder="Enter Email"
                        value={data.email}
                        onChange={(e) =>
                            setData({
                                ...data,
                                email: e.target.value,
                                emailError: "",
                            })
                        }
                    />
                    {data.emailError && <p>{data.emailError}</p>}
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
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        value={data.password2}
                        onChange={(e) =>
                            setData({
                                ...data,
                                password2: e.target.value,
                                password2Error: "",
                            })
                        }
                    />
                    {data.password2Error && <p>{data.password2Error}</p>}
                </div>
                <button onClick={handleSubmit}>Sign Up</button>
            </div>
            <p>
                Already Registered? <a href="/login">Continue to Login!</a>
            </p>
        </div>
    );
};