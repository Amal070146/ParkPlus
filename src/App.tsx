import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./Components/Registration/Login";
import { Signup } from "./Components/Registration/Signup";
import { Dashboard } from "./Components/Dashboard/Dashboard";
import { Schedule } from "./Components/Schedule/Schedule";
import { Wallet } from "./Components/Wallet/Wallet";
import { Successpage } from "./Components/Successpage/Successpage";
import { Ticket } from "./Components/Ticket/Ticket";
import { Profile } from "./Components/Profile/Profile";
import { EditProfile } from "./Components/Profile/EditProfile";
import { Bookings } from "./Components/Bookings/Bookings";
import { Report } from "./Components/Report/Report";
import { Support } from "./Components/Support/Support";
import { ContactUs } from "./Components/ContactUs/ContactUs";
import { DeleteSuccess } from "./Components/Successpage/DeleteSuccess";
import { QRScanner } from "./Components/QRScanner/QRScanner";
import { Notifications } from "./Components/Notifications/Notifications";
import PrivateRoutes from "./services/PrivateRoutes";
import { Toaster } from "react-hot-toast";
function App() {
    const router = createBrowserRouter([
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/signup",
            element: <Signup />,
        },
        {
            path: "/",
            element: <Dashboard />,
        },
        {
            path: "/schedule",
            element: <Schedule />,
        },
        {
            path: "/wallet",
            element: <Wallet />,
        },
        {
            path: "/successpage",
            element: <Successpage />,
        },
        {
            path: "/ticket",
            element: <Ticket />,
        },
        {
            path: "/bookings",
            element: <Bookings />,
        },
        {
            path: "/profile",
            element: <Profile />,
        },
        {
            path: "/editprofile",
            element: <EditProfile />,
        },
        {
            path: "/report",
            element: <Report />,
        },
        {
            path: "/support",
            element: <Support />,
        },
        {
            path: "/contactus",
            element: <ContactUs />,
        },
        {
            path: "/delete",
            element: <DeleteSuccess />,
        },
        {
            path: "/qrscanner",
            element: <QRScanner />,
        },
        {
            path: "/notification",
            element: <Notifications />,
        },
    ]);
    return (
        <>
            <RouterProvider router={router} />
            <Toaster position="bottom-center" reverseOrder={true} />
        </>
    );
}
export default App;
