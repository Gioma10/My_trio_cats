import ProgressSkills from "./ProgressSkills";

export default function SingleCat({cat, name, rotate, textColor}){
    return (
        <div className='flex flex-col gap-12 p-8 sm:p-12 lg:p-20 border rounded-xl justify-center items-center bg-[#3A3A3A]'>
            <h2 className={`text-4xl md:text-6xl filterFont ${textColor}`}>{name}</h2>        
            <div className="grid gap-8 md:grid-cols-2">
                <div className="flex justify-center">
                    <img src={cat} alt="Foto " className={`w-44 sm:w-52 lg:w-80 ${rotate}`} />
                </div>
                <div className='flex justify-center items-center'>
                    <ProgressSkills cat={name}/>
                </div>
            </div>
        </div>
    )
}