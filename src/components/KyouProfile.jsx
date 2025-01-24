import Kyou from '../assets/image/kyou_profile.png'
import { TiArrowDownOutline } from "react-icons/ti";
import { useState } from 'react';

export default function KyouProfile(){
    const [descriptionActive, setDescriptionActive]= useState(false);
    
        function handleDesc(){
            setDescriptionActive(prevActive => !prevActive)
        }

    let classDesc= ' border-white w-2/3 text-center text-white';

    if(descriptionActive){
        classDesc= 'bg-white w-2/3 text-center text-[#A87F34] rounded-lg shadow-lg p-5';
    }
    return (
        <div className="cat group h-full flex sm:flex-col justify-center items-center gap-4 sm:col-start-2 bg-[#F2B13B]">
            <img src={Kyou} alt="Foto Kyou" className='w-24 sm:w-52 md:w-80 rotate-[30deg]' />
            <p className=' text-lg sm:text-4xl md:text-6xl text-[#A87F34]'>Kyou</p>
            <div className={classDesc}>
                <p className={descriptionActive ? 'smallest-p sm:text-sm lg:text-base' : 'hidden'}>Sono il principino che ama il pulito ma allo stesso tempo sono un gran mangione... Dov'e' il cibo?!.</p>
                <button className='text-2xl' onClick={handleDesc}>{!descriptionActive ? <TiArrowDownOutline className='group-hover:animate-bounce'/> : <TiArrowDownOutline className='rotate-180'/>}</button>
            </div>
        </div>
    )
}