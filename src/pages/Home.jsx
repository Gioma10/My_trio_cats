import Habits from '../components/Habits.jsx'
import Header from '../components/Header/Header.jsx'
import HomeImg from '../components/HomeImg.jsx'
import Services from '../components/Services.jsx'


export default function Home(){
    
    return (
        <>
            <Header />
            <HomeImg/>
            <Habits />
            <Services />
        </>
    )
}