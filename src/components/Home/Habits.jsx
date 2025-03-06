import Timeline from "./Timeline";

export default function Habits(){


    return (
        <div className='h-screen flex flex-col gap-10 bg-[#3A3A3A] mx-5 my-10 rounded-xl border overflow-hidden'> 
            <div className=" text-white flex row-start-1 col-span-2 flex-col items-center justify-center rounded-xl py-10 px-5">
                <h2 className="text-4xl md:text-6xl text-center">Le abitudini</h2>
                <p className="filterFont smallest-size text-xs md:text-base">Questa e' la nostra routine, sembra povera e montona ma a noi piace cosi'</p>
            </div>
            <Timeline />
        </div>
    )
}