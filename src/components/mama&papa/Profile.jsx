import { motion } from 'motion/react'
import { scaleUp } from '../../animations/transition'

export default function Profile({img, name, animation}){

    const p1= `Sono il papa', gioco, coccolo, do da mangiare ai miei cuccioli e interpreto il genitore`
    const p2= `Sono la mamma, mi occupo della loro cura, sono severa e interpreto il genitore` 

    const paragraph = name === `Papa'` ? p1 : p2

    return (
        <motion.div 
            {...animation}
            className='border-white border p-5 rounded-xl flex flex-col items-center justify-center gap-5 md:gap-10 bg-[#3A3A3A] text-white'>
                <h2 className='text-4xl'>{name}</h2>
                <div className='relative w-48 md:w-60 flex justify-center overflow-hidden'>
                    <motion.img 
                        initial={{y:180}} 
                        animate={{y:0}} 
                        transition={{duration:1, delay: 1}} 
                        className='w-32 md:w-40' src={img} alt="photo profile" />   
                    <motion.div
                        initial={{width:'0%'}}
                        animate={{width:'100%'}}
                        transition={{duration: 1}}
                        className='bg-white h-0.5 absolute bottom-0' />         
                </div>
                <div className='text-xs md:text-sm lg:text-base text-center w-full h-16 md:h-32'>
                    <motion.p
                        {...scaleUp(1,2)}> 
                            {paragraph}
                            <span className='text-xl lg:text-2xl'> {name === `Papa'` ? 'buono' : 'cattivo' } </span>
                        </motion.p>
                </div>
        </motion.div>
    )
}
