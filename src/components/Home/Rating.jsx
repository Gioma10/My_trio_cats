import { FaStar } from "react-icons/fa6";

export default function Rating({number}){
    return (
        <div className="flex">
            {[...Array(5)].map((_, i)=>{
                return  <FaStar key={i} className={i < number ? "text-yellow-400" : "text-gray-300"} />
            })}
        </div>
    )
}