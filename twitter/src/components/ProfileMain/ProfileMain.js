import './ProfileMain.css'
function ProfileMain()
{
    return(
        <div className='profile-main'>
          
            <div className='cover'>
            <a href="#">
                <img className="profile-img" src="https://pbs.twimg.com/profile_images/1330182048842199040/-TikHrvh_400x400.jpg"></img>
            </a>
            </div>
            
            <div className='follow-btn-container fw-bold float-end'>
                <button className='follow-btn'>Follow</button>
            </div>

            </div>
    )
};
export default ProfileMain;