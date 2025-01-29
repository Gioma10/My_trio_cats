import { useState } from "react";

export default function FilterGallery(){
    const [pressBtn, setPressBtn]=useState({
        lucy: false,
        kyou: false,
        mona: false,
    })

    function handlePressBtn(identifer){
        setPressBtn(prevBtn => {
            return {
                ...prevBtn,
                [identifer]: !prevBtn[identifer],
            }
        })
        
    }
    // console.log(pressBtn);

    
    let classBtn = " bg-white px-4 py-2 rounded-lg border-black border-2";
    let classBtnL = " bg-[#808080] text-[#575757] px-4 py-2 rounded-lg border-black border-2";
    let classBtnK = " bg-[#F2B13B] text-[#A87F34] px-4 py-2 rounded-lg border-black border-2";
    let classBtnM = " bg-[#987654] text-[#694F36] px-4 py-2 rounded-lg border-black border-2";
    

    return (
        <div className="pt-20 flex justify-center items-center gap-10">
            <button onClick={()=>handlePressBtn('lucy')} className={pressBtn.lucy ?  classBtnL : classBtn}>Lucy</button>
            <button onClick={()=>handlePressBtn('kyou')} className={pressBtn.kyou ? classBtnK : classBtn}>Kyou</button>
            <button onClick={()=>handlePressBtn('mona')} className={pressBtn.mona ? classBtnM : classBtn}>Mona</button>
        </div>
    )
}