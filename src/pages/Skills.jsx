import SingleCat from "../components/Skills/SingleCat";
import Lucy from '../assets/image/lucy_profile.png'
import Kyou from '../assets/image/kyou_profile.png'
import Mona from '../assets/image/mona_profile.png'

import { TiArrowLeftOutline } from "react-icons/ti";
import { TiArrowRightOutline } from "react-icons/ti";
import { useState } from "react";
import { slideLeft, slideRight } from "../animations/transition.js";

export default function Skills (){
    const [activeCat, setActiveCat]= useState(0)
    const [isLeft,setIsLeft]= useState(undefined)

    function handleChangeCat(value){
        if(value === '-'){
            setIsLeft(false)
            setActiveCat((prevActiveCat)=> {
                if(prevActiveCat=== 0){
                    return 2
                }
                return prevActiveCat - 1
            })
        } else if(value === '+'){
            setIsLeft(true)
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
                <SingleCat name='Lucy' cat={Lucy} animation={isLeft ? {...slideLeft(1,0)} : {...slideRight(1,0)}} /> 
            }
            {activeCat === 1 && 
                <SingleCat name='Kyou' cat={Kyou} rotate='rotate-[30deg]' animation={isLeft ? {...slideLeft(1,0)} : {...slideRight(1,0)}}/> 
            }
            {activeCat === 2 && 
                <SingleCat name='Mona' cat={Mona} rotate='rotate-[-25deg]' animation={isLeft ? {...slideLeft(1,0)} : {...slideRight(1,0)}}/> 
            }
            <button 
                onClick={()=>handleChangeCat('-')}
                className="absolute top-1/2 left-0 text-2xl md:text-4xl p-5 hover:text-gray-400">
                <TiArrowLeftOutline />
            </button>
            <button 
                onClick={()=>handleChangeCat('+')}
                className="absolute top-1/2 right-0 text-2xl md:text-4xl p-5 hover:text-gray-400">
                <TiArrowRightOutline />
            </button>
        </div>
    )
}