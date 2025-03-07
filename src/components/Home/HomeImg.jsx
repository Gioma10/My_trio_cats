import { Link, useLoaderData } from 'react-router-dom'
import { TiArrowRightOutline } from "react-icons/ti";
import { motion } from 'motion/react';
import { slideLeft, slideRight } from '../../animations/transition';


export default function HomeImg(){
    const photos= useLoaderData()
    
    // Prendi solo le ultime 3 foto
    const lastThreePhotos = photos.slice(-4);

    return (
        <div className='py-20 px-5 text-white'>
            <div className='flex flex-col justify-center text-center py-10 px-5 rounded-lg gap-4 border bg-[#3A3A3A]'>
                <motion.h2 
                    {...slideRight(1,0)}
                    className='text-4xl md:text-6xl'>
                        Le Ultime Foto
                </motion.h2>
                <motion.div 
                    variants={containerVariants}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: false, amount: 0.5 }}
                    className=' p-5 sm:p-10 grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-8'>
                        {lastThreePhotos.map((photo)=>{
                            return (
                                <motion.div 
                                    variants={itemVariants}
                                    key={photo.id}
                                    style={{backgroundImage:`url(${photo.img})`}}
                                    className='smallest-h h-32 sm:h-44 lg:h-56 bg-center border bg-cover bg-no-repeat rounded-lg shadow-lg group'  >
                                </motion.div>
                            )
                        })}
                </motion.div>
                <motion.div
                    {...slideLeft(1,0)}>
                    <Link
                        to={"/galleria"} 
                        className='flex gap-2 cursor-pointer justify-center items-start text-base sm:text-lg md:text-xl hover:text-gray-400'>
                            <p>vedi tutte</p>
                            <TiArrowRightOutline />
                    </Link>
                </motion.div>
            </div>
        </div>
    )
}

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Ritardo tra un'animazione e l'altra
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100,} },
  };