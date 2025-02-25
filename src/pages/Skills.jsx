import SingleCat from "../components/Skills/SingleCat";
import Lucy from '../assets/image/lucy_profile.png'
import Kyou from '../assets/image/kyou_profile.png'
import Mona from '../assets/image/mona_profile.png'

import { TiArrowLeftOutline } from "react-icons/ti";
import { TiArrowRightOutline } from "react-icons/ti";
import { useState } from "react";


export default function Skills (){
    const [activeCat, setActiveCat]= useState(0)

    function handleChangeCat(value){
        if(value === '-'){
            setActiveCat((prevActiveCat)=> {
                if(prevActiveCat=== 0){
                    return 2
                }
                return prevActiveCat - 1
            })
        } else if(value === '+'){
            setActiveCat((prevActiveCat)=> {
                if(prevActiveCat=== 2){
                    return 0
                }
                return prevActiveCat + 1
            })
        }
    }
    return (
        <div className="h-screen relative flex items-center justify-center text-white">
            {activeCat === 0 && 
                <SingleCat name='Lucy' cat={Lucy}  rotate='' textColor=''/> 
            }
            {activeCat === 1 && 
                <SingleCat name='Kyou' cat={Kyou} rotate='rotate-[30deg]'/> 
            }
            {activeCat === 2 && 
                <SingleCat name='Mona' cat={Mona} rotate='rotate-[-25deg]'/> 
            }
            <button 
                onClick={()=>handleChangeCat('-')}
                className="absolute top-1/2 left-0 text-2xl md:text-4xl p-5 hover:animate-pulse">
                <TiArrowLeftOutline />
            </button>
            <button 
                onClick={()=>handleChangeCat('+')}
                className="absolute top-1/2 right-0 text-2xl md:text-4xl p-5 hover:animate-pulse">
                <TiArrowRightOutline />
            </button>
        </div>
    )
}