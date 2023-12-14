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
import { SearchLocations } from "./Components/Schedule/SearchLocations";
import { Toaster } from "react-hot-toast";
import { lightTheme, Provider } from "@adobe/react-spectrum";
import AddVehicle from "./Components/AddVehicle/AddVehicle";
import { AddParkings } from "./Components/AddParkings/AddParkings";
import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
    "https://wzdlguhfgjhdlxzaxwne.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind6ZGxndWhmZ2poZGx4emF4d25lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI1NzE4NDQsImV4cCI6MjAxODE0Nzg0NH0.L5DHtqu-uCJzOTMk-oXNm5tqk_kAzZu19Zl6BJWEQ20"
);

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
            element: <PrivateRoutes children={<Dashboard />} />,
        },
        {
            path: "/schedule",
            element: <PrivateRoutes children={<Schedule />} />,
        },
        {
            path: "/wallet",
            element: <PrivateRoutes children={<Wallet />} />,
        },
        {
            path: "/successpage",
            element: <PrivateRoutes children={<Successpage />} />,
        },
        {
            path: "/ticket",
            element: <PrivateRoutes children={<Ticket />} />,
        },
        {
            path: "/bookings",
            element: <PrivateRoutes children={<Bookings />} />,
        },
        {
            path: "/profile",
            element: <PrivateRoutes children={<Profile />} />,
        },
        {
            path: "/editprofile",
            element: <PrivateRoutes children={<EditProfile />} />,
        },
        {
            path: "/report",
            element: <PrivateRoutes children={<Report />} />,
        },
        {
            path: "/support",
            element: <PrivateRoutes children={<Support />} />,
        },
        {
            path: "/contactus",
            element: <PrivateRoutes children={<ContactUs />} />,
        },
        {
            path: "/delete",
            element: <PrivateRoutes children={<DeleteSuccess />} />,
        },
        {
            path: "/qrscanner",
            element: <PrivateRoutes children={<QRScanner />} />,
        },
        {
            path: "/notification",
            element: <PrivateRoutes children={<Notifications />} />,
        },
        {
            path: "/searchloaction",
            element: <PrivateRoutes children={<SearchLocations />} />,
        },
        {
            path: "/vehicles",
            element: <PrivateRoutes children={<AddVehicle />} />,
        },
        {
            path: "/addparkings",
            element: <PrivateRoutes children={<AddParkings />} />,
        },
    ]);
    return (
        <>
            <Provider colorScheme="light" theme={lightTheme}>
                <RouterProvider router={router} />
                <Toaster position="bottom-center" reverseOrder={true} />
            </Provider>
        </>
    );
}
export default App;
