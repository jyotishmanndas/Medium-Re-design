import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export function Layout() {
    return (
        <div className="relative w-full bg-background overflow-x-hidden">
            <Navbar />
            <Outlet />
            {/* <main className="flex-1">{<Outlet />}</main> */}
            {/* <Footer /> */}
        </div>
    )
}