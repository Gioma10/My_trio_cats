import Dormire from '../assets/image/dormire.png'
import Mangiare from '../assets/image/mangiare.png'
import Giocare from '../assets/image/giocare.png'

export default function Habits(){

    const habitsArr= [Dormire, Mangiare, Giocare]
    return (
        <div className=''>
            <div className="grid grid-cols-3 w-full items-center py-20">
                <div className="bg-[#3A3A3A] text-white flex row-start-1 col-span-2 flex-col border-y border-r items-center justify-center rounded-r-lg py-10 px-5">
                    <h2 className="text-4xl">Le nostre abitudini</h2>
                    <p>Questa e' la nostra routine, sembra povera e montona ma a noi piace cosi'</p>
                </div>
            </div>
            <div className="flex gap-10 mt-20 ">
                {habitsArr.map((habit, index)=>{
                    return (
                        <div className='px-10' key={index}>
                            <img src={habit} alt="routine" className='w-full' />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}