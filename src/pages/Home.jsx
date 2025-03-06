import Comments from '../components/Home/Comments.jsx'
import Habits from '../components/Home/Habits.jsx'
import Header from '../components/Header/Header.jsx'
import HomeImg from '../components/Home/HomeImg.jsx'


export default function Home(){
    
    return (
        <>
            <Header />
            <HomeImg/>
            <Habits />
            <Comments/>
        </>
    )
}