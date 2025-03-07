import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import FilterGallery from "../components/Gallery/FilterGallery";
import PhotoCard from "../components/Gallery/PhotoCard";

import {slideUp} from '../animations/transition';


export default function Gallery(){
    const [pressBtn, setPressBtn]=useState({
             lucy: true,
             kyou: true,
             mona: true,
         })
    const [loading, setLoading] = useState(true);
    const photos= useLoaderData(); 

    useEffect(() => {
        if (photos.length > 0) {
            setLoading(false); // Disattiva il loading quando i dati sono pronti
        }
    }, [photos]);

    function handlePressBtn(identifer){
        setPressBtn(prevBtn => {
            return {
                ...prevBtn,
                [identifer]: !prevBtn[identifer],
            }
        })
    }
    // console.log(pressBtn);

    

    return(
        <>
            
                <FilterGallery handleSelectBtn={handlePressBtn} selectBtn={pressBtn}/>
                {loading && (
                    <motion.div 
                        animate={{opacity:[1,0, 1]}}
                        transition={{duration:2 , repeat: Infinity,}}
                        className="flex justify-center items-center mt-72 ">
                            <p className="text-lg font-semibold">Caricamento immagini...</p>
                    </motion.div> )
                } 
                { (!pressBtn.lucy && !pressBtn.kyou && !pressBtn.mona) ? 
                    <div className="flex justify-center items-center h-screen">
                        <p className="text-xs sm:text-base md:text-lg text-white bg-[#3A3A3A] border-white border rounded-xl p-5 font-semibold">
                            Seleziona un gatto cliccando il bottone in alto 
                        </p>
                    </div>
                :
                    <motion.div 
                        key={JSON.stringify(pressBtn)}
                        {...slideUp(1,0)}
                        className='my-10 rounded-lg grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 px-10 min-h-screen'>
                            {photos.map((photo)=>{
                                return (
                                    <PhotoCard 
                                        key={photo.id} 
                                        cat={photo.firstCat} 
                                        cat2={photo.secondCat} 
                                        cat3={photo.thirdCat} 
                                        img={photo.img} 
                                        whoActive= {pressBtn}
                                    />   
                                )
                            })}
                    </motion.div>
                }
        </>
    )
}

// Loader function 
export const photosLoader = async ()=>{
    const res= await fetch('http://localhost:4000/gallery');
    return res.json();
}

// console.log(photosLoader());
