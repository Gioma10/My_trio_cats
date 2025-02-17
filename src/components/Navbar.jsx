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
        {title: 'Galleria', path:'/galleria'},
        {title: 'Skills', path:'/skills'},
        {title: 'Mamma & Papa', path:'/mamma&papa'},
        {title: 'Contattci', path:'/contattaci'},
    ]
    return (
        <nav className="fixed flex justify-center w-full text-xs sm:text-sm md:text-lg z-10">
            <div className="hidden sm:w-5/6 md:w-4/5 lg:w-2/3 bg-white sm:flex justify-around items-center py-2 shadow-lg rounded-b-lg">
                <NavLink to={"/"} className=" text-xl sm:text-2xl md:text-4xl text-center"><IoMdHome /></NavLink>
                <div className="flex gap-8">
                    {navLinks.map((link)=>{
                        return (
                            <NavLink key={link.title} to={link.path}>
                                {link.title}
                            </NavLink>
                        )
                    })}
                </div>
                <p className="text-xl"><FaInstagram/></p>
            </div>
            <div className="sm:hidden w-full bg-white shadow-lg">
                <button className="text-4xl p-2" onClick={handleHamburger}> {!activeHamb ? <RxHamburgerMenu/> : <IoIosClose />}</button>
                {activeHamb && (
                    <div className="bg-black text-white">
                        <div className="flex flex-col gap-4 p-5 justify-center items-center w-full z-10">
                            {navLinks.map((link)=>{
                                return (
                                    <NavLink key={link.title} to={link.path}>
                                        {link.title}
                                    </NavLink>
                                )
                            })}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}