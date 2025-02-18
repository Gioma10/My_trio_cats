import ProgressSkills from "./ProgressSkills";

export default function SingleCat({cat, name, bgColor, rotate, textColor}){
    return (
        <div className={`h-full flex flex-col gap-12 justify-center items-center ${bgColor}`}>
            <h2 className={`text-4xl md:text-6xl filterFont ${textColor}`}>{name}</h2>        
            <div className="grid gap-8 md:grid-cols-2">
                <div className="flex justify-center">
                    <img src={cat} alt="Foto " className={` w-40 md:w-80 ${rotate}`} />
                </div>
                <div className='flex justify-center items-center'>
                    <ProgressSkills cat={name}/>
                </div>
            </div>
        </div>
    )
}