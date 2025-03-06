export default function Event({direction, h3, p}){
    return (
        <>
        {direction === 'left' ? 
            <div className="flex items-center w-full text-white">
                <div className="w-1/2 text-right">
                    <h3 className="text-lg font-semibold">{h3}</h3>
                    <p className="text-sm italic">{p}</p>
                </div>
                <div className="w-1/12 flex justify-center">
                    <div className="w-6 h-6 bg-white rounded-full"></div>
                </div>
                <div className="w-1/2"></div>
            </div>
        :
            <div className="flex items-center w-full text-white">
                <div className="w-1/2"></div>
                <div className="w-1/12 flex justify-center">
                    <div className="w-6 h-6 bg-white rounded-full"></div>
                </div>
                <div className="w-1/2 text-left">
                    <h3 className="text-lg font-semibold">{h3}</h3>
                    <p className="text-sm italic">{p}</p>
                </div>
            </div>
        }
        
        </>
    )
}