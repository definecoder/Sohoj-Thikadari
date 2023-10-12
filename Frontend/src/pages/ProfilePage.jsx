// TODO : ADD BG
import './HomePageCSS.css';

import BasicButton from "../components/BasicButton"
import landingLogo from "../assets/appLogo.png"
import InputTextField from '../components/InputTextField';
import PasswordField from '../components/PasswordField';
import LeftNavBar from '../components/LeftNavbar';

function ProfilePage() {        

    return (
      <>
        <div className='homepageCanvas'>
            <LeftNavBar curPage = "profile" />
            <div className='rightCanvas'>
              <div className='welcomeUser'>
                  <h2 style={{color : '#FF3D00',}}>নাম</h2>
                  <span style={{fontSize : '1.2em', fontWeight: '500'}}>মোহাম্মদ মেহরাজুল ইসলাম</span>
              </div>
              <div>
                  <h2 style={{color : 'black',}}>ফোন নম্বর</h2>
                  <span style={{fontSize : '2em', fontWeight: '700', color : '#FF3D00'}}>০১৭৬৪৬৫৩১১২</span>
              </div>
              <div>
                  <h2 style={{color : 'black',}}>ইমেইল</h2>
                  <span style={{fontSize : '2em', fontWeight: '700', color : '#FF3D00'}}>mehraj74@student.sust</span>
              </div>              
            </div>
        </div>    
      </>
    )
  }

  export default ProfilePage