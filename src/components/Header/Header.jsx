import LucyProfile from './LucyProfile.jsx';
import KyouProfile from './KyouProfile.jsx';
import MonaProfile from './MonaProfile.jsx'
export default function Header(){
    
    return(
        <header id="hero" className="grid border-b sm:grid-cols-3 z-0">
            <LucyProfile />
            <KyouProfile />
            <MonaProfile />
        </header>
    )
}