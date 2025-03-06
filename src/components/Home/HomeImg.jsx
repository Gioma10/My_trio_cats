import { Link, useLoaderData } from 'react-router-dom'
import { TiArrowRightOutline } from "react-icons/ti";
import { motion } from 'motion/react';


export default function HomeImg(){
    const photos= useLoaderData()
    
    // Prendi solo le ultime 3 foto
    const lastThreePhotos = photos.slice(-4);

    return (
        <div className='py-20 px-5 text-white'>
            <div className='flex flex-col justify-center text-center py-10 px-5 rounded-lg gap-4 border bg-[#3A3A3A]'>
                <h2 className='text-4xl md:text-6xl'>Le Ultime Foto</h2>
                <div className=' p-5 sm:p-10 grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-8'>
                    {lastThreePhotos.map((photo)=>{
                        return (
                            <div 
                                key={photo.id}
                                style={{backgroundImage:`url(${photo.img})`}}
                                className='smallest-h h-32 sm:h-44 lg:h-56 bg-center border bg-cover bg-no-repeat rounded-lg shadow-lg group'  >

                            </div>
                        )
                    })}
                </div>
                <Link
                    to={"/galleria"} 
                    className='flex gap-1 cursor-pointer justify-center items-start text-base sm:text-lg md:text-xl'>
                    <motion.p>
                        vedi tutte
                    </motion.p>
                    
                    <TiArrowRightOutline />
                </Link>
            </div>
        </div>
    )
}