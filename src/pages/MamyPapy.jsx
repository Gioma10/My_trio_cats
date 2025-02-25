import Mamy from '../assets/image/mamaEpapa/mamy.png'
import Papy from '../assets/image/mamaEpapa/papi.png'
import Profile from '../components/mama&papa/Profile'


export default function MamyPapy(){
    return (
        <div className="flex flex-col sm:flex-row justify-center items-center h-screen relative">
            <Profile img={Papy} name={`Papa'`}/>
            <Profile img={Mamy} name={`Mamma`}/>
        </div>
    )
}