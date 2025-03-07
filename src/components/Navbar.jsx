import { motion } from "motion/react";
import { IoMdHome } from "react-icons/io";
import { NavLink, useLocation } from "react-router-dom";
import { slideDown } from "../animations/transition";

export default function Navbar(){
    const location= useLocation()

    const navLinks= [
        {title: <IoMdHome size={30}/>, path:'/'},
        {title: 'Galleria', path:'/galleria'},
        {title: 'Skills', path:'/skills'},
        {title: 'Mamma & Papa', path:'/mamma&papa'},
    ]
    return (
        <motion.nav 
            key={location.pathname}
            {...slideDown(1,0)}
            className="fixed flex items-center justify-center w-full text-xs sm:text-sm md:text-lg z-10">
                <div className="flex items-center justify-center gap-4 sm:gap-8 py-1 md:py-3 px-5 md:px-10 rounded-lg mt-1 border-white border bg-[#3A3A3A] text-white">                    {navLinks.map((link, index)=>{
                        return (
                            <NavLink 
                                className={({isActive})=> isActive ? 'border-b-2 border-b-white' : 'hover:text-gray-400'} 
                                key={index} 
                                to={link.path}>
                                {link.title}
                            </NavLink>
                        )
                    })}
                </div>
        </motion.nav>
    )
}