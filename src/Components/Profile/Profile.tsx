import { HeaderNav } from "../Navbar/HeaderNav";
import { Navbar } from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import styles from "./Profile.module.css";
import {
    Settingssvg,
    Locationsvg,
    Mailsvg,
    Supportsvg,
    Deletesvg,
    Logoutsvg,
    RightArrowsvg,
    Reportsvg,
    Parkingsvg,
} from "./svg";
import { supabase } from "../../App";
import toast from "react-hot-toast";

type Props = {};

export const Profile = (_props: Props) => {
    const navigate = useNavigate();
    const ButtonSubmit = (path: string) => () => {
        navigate(path);
    };

    const handleLogout = async () => {
        let { error } = await supabase.auth.signOut();
        if (error) {
            toast.error(error.message);
        } else {
			toast.success("Logged out successfully");
            localStorage.removeItem("accessToken");
            navigate("/login");
        }
    };

    return (
        <div className={styles.ProfileWrapper}>
            {" "}
            <HeaderNav title="Profile" />
            <div className={styles.DetailWrapper}>
                <div className={styles.HeadingSection}>
                    <div className={styles.Names}>
                        <div>
                            <h2>Amal C P</h2>
                            <p>(User)</p>
                        </div>
                        <p>amalcpaulson@gmail.com</p>
                    </div>
                    <div className={styles.coins}>
                        <div className={styles.imagecont}></div>
                        <h2>1352</h2>
                    </div>
                </div>
                <div className={styles.ButtonWrapper}>
                    <button onClick={ButtonSubmit("/editprofile")}>
                        <div>
                            <Settingssvg />
                            <h2>Edit Profile</h2>
                        </div>
                        <RightArrowsvg />
                    </button>
                    <button onClick={ButtonSubmit("/vehicles")}>
                        <div>
                            <Locationsvg />
                            <h2>Add Vehicle</h2>
                        </div>
                        <RightArrowsvg />
                    </button>
                    <button onClick={ButtonSubmit("/contactus")}>
                        <div>
                            <Mailsvg />
                            <h2>Contact Us</h2>
                        </div>
                        <RightArrowsvg />
                    </button>
                    <button onClick={ButtonSubmit("/support")}>
                        <div>
                            <Supportsvg />
                            <h2>Support</h2>
                        </div>
                        <RightArrowsvg />
                    </button>{" "}
                    <button onClick={ButtonSubmit("/report")}>
                        <div>
                            <Reportsvg />
                            <h2>Report</h2>
                        </div>
                        <RightArrowsvg />
                    </button>{" "}
                    <button onClick={ButtonSubmit("/addparkings")}>
                        <div>
                            <Parkingsvg />
                            <h2>Add Parking Area</h2>
                        </div>
                        <RightArrowsvg />
                    </button>
                    <button onClick={ButtonSubmit("/delete")}>
                        <div>
                            <Deletesvg />
                            <h2>Delete Account</h2>
                        </div>
                        <RightArrowsvg />
                    </button>
                    <button
                        onClick={() => {
                            handleLogout();
                        }}
                    >
                        <div>
                            <Logoutsvg />
                            <h2>LogOut</h2>
                        </div>
                        <RightArrowsvg />
                    </button>
                </div>
            </div>
            <Navbar />
        </div>
    );
};
