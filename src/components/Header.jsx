import LucyProfile from './LucyProfile.jsx';
import KyouProfile from './KyouProfile.jsx';
import MonaProfile from './MonaProfile.jsx'
export default function Header(){
    
    return(
        <header id="hero" className="hero grid gap-4 sm:grid-cols-3 z-0">
            <LucyProfile />
            <KyouProfile />
            <MonaProfile />
        </header>
    )
}