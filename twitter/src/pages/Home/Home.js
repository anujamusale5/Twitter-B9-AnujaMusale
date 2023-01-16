import './Home.css';
import HomeOption from '../../components/HomeOption/HomeOption'; 
import Loginoption from '../../components/Loginoption/Loginoption';
import Feed from '../../components/Feed/Feed'; 

function Home()
{
    return(
        <div className='homeContainer'>
            <div className='leftContainer'>
                <HomeOption/>
            </div>
            <div className='centerContainer'>
                <Feed/>
            </div>
            <div className='rightContainer'>
                <Loginoption/>
            </div>
        </div>
    );
}
export default Home;