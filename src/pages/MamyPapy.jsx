import Mamy from '../assets/image/mamaEpapa/mamy.png'
import Papy from '../assets/image/mamaEpapa/papi.png'
import Profile from '../components/mama&papa/Profile'


export default function MamyPapy(){
    return (
        <div className="flex flex-col md:flex-row justify-enter items-center h-screen relative gap-10 px-5 py-16">
            <Profile img={Papy} name={`Papa'`}/>
            <Profile img={Mamy} name={`Mamma`}/>
        </div>
    )
}