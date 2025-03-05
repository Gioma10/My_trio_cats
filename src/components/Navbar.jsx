import { IoMdHome } from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosClose } from "react-icons/io";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar(){
    const[activeHamb, setActiveHamb]= useState(false)

    function handleHamburger(){
        setActiveHamb(prevHamb => !prevHamb)
    }

    const navLinks= [
        {title: <IoMdHome size={30}/>, path:'/'},
        {title: 'Galleria', path:'/galleria'},
        {title: 'Skills', path:'/skills'},
        {title: 'Mamma & Papa', path:'/mamma&papa'},
    ]
    return (
        <nav className="fixed flex justify-center w-full text-xs sm:text-sm md:text-lg z-10">
            <div className="flex items-end justify-center gap-8 py-3 px-10 rounded-lg mt-1 border-white border bg-[#3A3A3A] text-white">                    {navLinks.map((link, index)=>{
                    return (
                        <NavLink 
                            className={({isActive})=> isActive ? 'border-b-2 border-b-white' : ''} 
                            key={index} 
                            to={link.path}>
                            {link.title}
                        </NavLink>
                    )
                })}
            </div>
        </nav>
    )
}