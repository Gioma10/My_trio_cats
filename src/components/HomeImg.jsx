import { Link, useLoaderData } from 'react-router-dom'
import { TiArrowRightOutline } from "react-icons/ti";
import { motion } from 'motion/react';


export default function HomeImg(){
    const photos= useLoaderData()
    
    // Prendi solo le ultime 3 foto
    const lastThreePhotos = photos.slice(-4);

    return (
        <div className='flex flex-col justify-center text-center gap-4 py-20'>
            <h2 className='text-4xl'>Le Nostre Ultime Foto</h2>
            <div className=' p-10 rounded-lg grid grid-cols-4 gap-8'>
                {lastThreePhotos.map((photo)=>{
                    return (
                        <div 
                            key={photo.id}
                            style={{backgroundImage:`url(${photo.img})`}}
                            className='h-72 bg-center bg-cover bg-no-repeat rounded-lg shadow-lg group'  >

                        </div>
                    )
                })}
            </div>
            <Link
                to={"/galleria"} 
                className='flex gap-1 cursor-pointer justify-center items-start text-2xl'>
                <motion.p>
                    vedi tutte
                </motion.p>
                
                <TiArrowRightOutline />
            </Link>
        </div>
    )
}