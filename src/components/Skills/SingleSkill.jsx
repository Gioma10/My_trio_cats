import { motion } from "motion/react"

export default function SingleSkill({title, percentage}){
    return (
        <div>
            <p>{title}</p>
            <div className="overflow-x-hidden w-44 lg:w-52 h-1 md:h-2 border rounded-lg lg:h-3">
                <motion.div
                    initial={{width: '0%'}}
                    whileInView={{width: percentage}}
                    transition={{duration: 1}}
                    className="border bg-white rounded-lg h-3"/>
            </div>
        </div>
    )
}