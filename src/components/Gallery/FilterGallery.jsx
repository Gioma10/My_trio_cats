
export default function FilterGallery({handleSelectBtn, selectBtn}){
    let classBtn = " bg-white px-4 py-2 rounded-lg border-black border-2";
    let classBtnL = " bg-[#808080] text-[#575757] px-4 py-2 rounded-lg border-black border-2";
    let classBtnK = " bg-[#F2B13B] text-[#A87F34] px-4 py-2 rounded-lg border-black border-2";
    let classBtnM = " bg-[#987654] text-[#694F36] px-4 py-2 rounded-lg border-black border-2";
    

    return (
        <div className="pt-20 flex justify-center items-center gap-10">
            <button onClick={()=>handleSelectBtn('lucy')} className={selectBtn.lucy ?  classBtnL : classBtn}>Lucy</button>
            <button onClick={()=>handleSelectBtn('kyou')} className={selectBtn.kyou ? classBtnK : classBtn}>Kyou</button>
            <button onClick={()=>handleSelectBtn('mona')} className={selectBtn.mona ? classBtnM : classBtn}>Mona</button>
        </div>
    )
}