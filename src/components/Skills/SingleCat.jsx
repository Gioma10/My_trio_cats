export default function SingleCat({cat, name, bgColor, rotate, textColor}){
    return (
        <div className={`h-full flex flex-col gap-12 justify-center items-center ${bgColor}`}>
            <h2 className={`text-6xl filterFont ${textColor}`}>{name}</h2>        
            <div className="grid grid-cols-2 con">
                <img src={cat} alt="Foto " className={`w-24 sm:w-52 md:w-80 ${rotate}`} />
                <div className='flex justify-center items-center'>
                    skills...
                </div>
            </div>
        </div>
    )
}