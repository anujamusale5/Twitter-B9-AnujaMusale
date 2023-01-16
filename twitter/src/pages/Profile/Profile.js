import './Profile.css';
import HomeOption from '../../components/HomeOption/HomeOption'; 
import Loginoption from '../../components/Loginoption/Loginoption';
import ProfileMain from '../../components/ProfileMain/ProfileMain';
function Profile()
{
    return(
        <div className='homeContainer'>
            <div className='leftContainer'>
                <HomeOption/>
            </div>
            <div className='centerContainer'>
                <ProfileMain/>
            </div>
            <div className='rightContainer'>
                <Loginoption/>
            </div>
        </div>
    )
};
export default Profile;