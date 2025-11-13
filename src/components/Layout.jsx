import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import CustomCursor from "./CustomCursor";

export function Layout() {
    return (
        <div className="relative w-full bg-background overflow-x-hidden">
            <CustomCursor />
            <Navbar />
            <Outlet />
            {/* <main className="flex-1">{<Outlet />}</main> */}
            {/* <Footer /> */}
        </div>
    )
}