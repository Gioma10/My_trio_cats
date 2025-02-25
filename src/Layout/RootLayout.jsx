import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/Navbar";

export default function RootLayout(){
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // Resetta lo scroll all'inizio della pagina
    }, [location.pathname]); // Si attiva ogni volta che cambia la route
    return(
        <div>
            <Navbar/>
            <main>
                <Outlet />
            </main>
        </div>
    )
}