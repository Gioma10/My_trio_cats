import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function RootLayout({path}){
    return(
        <>
            <Navbar path={path}/>
            <main>
                <Outlet />
            </main>
        </>
    )
}