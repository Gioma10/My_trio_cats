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
        <div className="h-screen relative">
            {activeCat === 0 && 
                <SingleCat name='Lucy' cat={Lucy} bgColor='bg-[#808080]' rotate='' textColor='text-[#575757]'/> 
            }
            {activeCat === 1 && 
                <SingleCat name='Kyou' cat={Kyou} bgColor='bg-[#F2B13B]' rotate='rotate-[30deg]' textColor='text-[#A87F34]'/> 
            }
            {activeCat === 2 && 
                <SingleCat name='Mona' cat={Mona} bgColor='bg-[#987654]' rotate='rotate-[-25deg]' textColor='text-[#694F36]'/> 
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