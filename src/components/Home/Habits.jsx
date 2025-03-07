import { motion } from "motion/react";
import Timeline from "./Timeline";
import { slideLeft, slideRight } from "../../animations/transition";

export default function Habits(){


    return (
        <div className='h-screen flex flex-col gap-10 bg-[#3A3A3A] mx-5 my-10 rounded-xl border overflow-hidden'> 
            <div className=" text-white flex row-start-1 col-span-2 flex-col items-center justify-center rounded-xl py-10 px-5">
                <motion.h2
                    {...slideRight(1,0)} 
                    className="text-4xl md:text-6xl text-center">
                        Le abitudini
                </motion.h2>
                <motion.p 
                    {...slideLeft(1,0)} 
                    className="filterFont smallest-size text-xs md:text-base">
                        Questa e' la nostra routine, sembra povera e montona ma a noi piace cosi'
                </motion.p>
            </div>
            <Timeline />
        </div>
    )
}