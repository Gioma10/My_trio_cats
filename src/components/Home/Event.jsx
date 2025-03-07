import { motion } from "motion/react"
import { scaleUp } from "../../animations/transition"

export default function Event({direction, time, h3, p}){
    return (
        <>
        {direction === 'left' ? 
            <motion.div 
                {...scaleUp(1,0)}
                className="flex gap-2 items-center w-full text-white">
                <div className="w-1/2 text-left sm:text-right">
                    <p>{time}</p>
                    <h3 className="text-xs sm:text-base md:text-xl font-semibold">{h3}</h3>
                    <p className=" smallest-size-p text-xs md:text-sm italic">{p}</p>
                </div>
                <div className="w-1/12 flex justify-center">
                    <div className="w-6 h-6 bg-white rounded-full"></div>
                </div>
                <div className="w-1/2"></div>
            </motion.div>
        :
            <motion.div 
                {...scaleUp(1,0)}
                className="flex gap-2 items-center w-full text-white">
                    <div className="w-1/2"></div>
                    <div className="w-1/12 flex justify-center">
                        <div className="w-6 h-6 bg-white rounded-full"></div>
                    </div>
                    <div className="w-1/2 text-right sm:text-left">
                        <p>{time}</p>
                        <h3 className="text-xs sm:text-base md:text-xl font-semibold">{h3}</h3>
                        <p className="smallest-size-p text-xs md:text-sm italic">{p}</p>
                    </div>
            </motion.div>
        }
        
        </>
    )
}