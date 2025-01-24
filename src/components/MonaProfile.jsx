import Mona from '../assets/image/mona_profile.png'
import { TiArrowDownOutline } from "react-icons/ti";
import { useState } from 'react';

export default function MonaProfile(){
    const [descriptionActive, setDescriptionActive]= useState(false);
    
        function handleDesc(){
            setDescriptionActive(prevActive => !prevActive)
        }

    let classDesc= ' border-white w-2/3 text-center text-white';

    if(descriptionActive){
        classDesc= 'bg-white w-2/3 text-center text-[#694F36] rounded-lg shadow-lg p-5';
    }
    return (
        <div className="cat group h-full flex sm:flex-col justify-center items-center gap-4 sm:col-start-3 bg-[#987654]">
            <img src={Mona} alt="Foto Mona" className='w-24 sm:w-52 md:w-80 rotate-[-25deg]' />
            <p className=' text-lg sm:text-4xl md:text-6xl text-[#694F36]'>Mona</p>
            <div className={classDesc}>
                <p className={descriptionActive ? 'smallest-p sm:text-sm lg:text-base' : 'hidden'}>Sono la cucciolina, cambio continuamente pensiero su quello che voglio fare amo giocare, fare parkour e essere sculacciata!!!</p>
                <button className='text-2xl' onClick={handleDesc}>{!descriptionActive ? <TiArrowDownOutline className='group-hover:animate-bounce' /> : <TiArrowDownOutline className='rotate-180'/>}</button>
            </div>
        </div>
    )
}