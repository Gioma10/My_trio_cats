import { Link } from "react-router-dom";

import Lucy from '../assets/image/lucy_profile.png'
import Kyou from '../assets/image/kyou_profile.png'
import Mona from '../assets/image/mona_profile.png'

export default function Footer(){
    return (
        <footer className="bg-[#3A3A3A] text-white py-8 mt-16 border-t">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-5">
                
                {/* Sezione Logo e Mini Presentazione */}
                <div className="flex gap-5">
                    <img src={Lucy} alt="Lucy" className="w-12" />
                    <img src={Kyou} alt="Kyou" className="w-12 rotate-[30deg]" />
                    <img src={Mona} alt="Mona" className="w-12 rotate-[-25deg]" />
                </div>

                {/* Navigazione Veloce */}
                <nav className="mb-6 md:mb-0">
                    <ul className="flex flex-col md:flex-row items-center gap-2 text-xs md:text-sm">
                        <li><Link to='/' className="hover:text-gray-400 md:border-e">Home</Link></li>
                        <li><Link to="/galleria" className="hover:text-gray-400 md:border-e">Galleria</Link></li>
                        <li><Link to="/skills" className="hover:text-gray-400 md:border-e">Skills</Link></li>
                        <li><Link to="/mamma&papa" className="hover:text-gray-400 ">Mamma & papa'</Link></li>
                    </ul>
                </nav>
            </div>
        
            {/* Copyright */}
            <div className="text-center text-gray-500 text-xs mt-6">
                © 2025 Gioma
            </div>
        </footer>
    )
}