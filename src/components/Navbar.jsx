import { IoMdHome } from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";

export default function Navbar(){
    return (
        <nav className="fixed flex justify-center w-full text-lg">
            <div className="w-2/3 bg-white flex justify-around items-center py-2 shadow-lg rounded-b-lg">
                <p><IoMdHome size={25} /></p>
                <ul className="flex gap-8">
                    <li>Galleria</li>
                    <li>Skills</li>
                    <li>Mamma & Papa'</li>
                    <li>Contattaci</li>
                </ul>
                <p><FaInstagram size={25}/></p>
            </div>

        </nav>
    )
}