export default function Event({direction, h3, p}){
    return (
        <>
        {direction === 'left' ? 
            <div class="flex items-center w-full text-white">
                <div class="w-1/2 text-right">
                    <h3 class="text-lg font-semibold">{h3}</h3>
                    <p className="text-sm italic">{p}</p>
                </div>
                <div class="w-1/12 flex justify-center">
                    <div class="w-6 h-6 bg-white rounded-full"></div>
                </div>
                <div class="w-1/2"></div>
            </div>
        :
            <div class="flex items-center w-full text-white">
                <div class="w-1/2"></div>
                <div class="w-1/12 flex justify-center">
                    <div class="w-6 h-6 bg-white rounded-full"></div>
                </div>
                <div class="w-1/2 text-left">
                    <h3 class="text-lg font-semibold">{h3}</h3>
                    <p className="text-sm italic">{p}</p>
                </div>
            </div>
        }
        
        </>
    )
}