import Lucy from '../assets/image/lucy_profile.png'
import Kyou from '../assets/image/kyou_profile.png'
import Mona from '../assets/image/mona_profile.png'

export default function Header(){
    return(
        <header id="hero" className="hero grid gap-4 grid-cols-3">
            <div className="cat h-full flex flex-col justify-center items-center gap-4 col-start-1 bg-[#808080]">
                <img src={Lucy} alt="Foto Lucy" className='w-80' />
                <p className='text-6xl text-[#575757]'>Lucy</p>
            </div>
            <div className="cat h-full flex flex-col justify-center items-center gap-4 col-start-2 bg-[#F2B13B]">
                <img src={Kyou} alt="Foto Kyou" className='w-80 rotate-[30deg]' />
                <p className='text-6xl text-[#A87F34]'>Kyou</p>
            </div>
            <div className="cat h-full flex flex-col justify-center items-center gap-4 col-start-3 bg-[#987654]">
                <img src={Mona} alt="Foto Mona" className='w-80 rotate-[-25deg]' />
                <p className='text-6xl text-[#694F36]'>Mona</p>
            </div>
        </header>
    )
}