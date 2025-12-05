import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar.jsx";
import API from "../components/API.jsx";

export default function Layout() {
    return (
        <>
            <NavBar />
            <API />
            <main>
                <Outlet />
            </main>
            {/* <Footer /> */}
        </>
    )
}