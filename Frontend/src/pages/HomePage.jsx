// TODO : ADD BG
import './HomePageCSS.css';

import BasicButton from "../components/BasicButton"
import landingLogo from "../assets/appLogo.png"
import InputTextField from '../components/InputTextField';
import PasswordField from '../components/PasswordField';
import LeftNavBar from '../components/LeftNavbar';

function HomePage() {        

    return (
      <>
        <div className='homepageCanvas'>
            <LeftNavBar curPage = "home" />
            <div className='rightCanvas'>
              <div className='welcomeUser'>
                  <h2 style={{color : '#FF3D00',}}>স্বাগতম</h2>
                  <span style={{fontSize : '1.2em', fontWeight: '500'}}>মোহাম্মদ মেহরাজুল ইসলাম</span>
              </div>
              <div>
                  <h2 style={{color : 'black',}}>মোট প্রোগ্রাম</h2>
                  <span style={{fontSize : '2em', fontWeight: '700', color : '#FF3D00'}}>৫৬</span>
              </div>
              <div>
                  <h2 style={{color : 'black',}}>মোট কিলোমিটার</h2>
                  <span style={{fontSize : '2em', fontWeight: '700', color : '#FF3D00'}}>৫৬</span>
              </div>
              <div>
                  <h2 style={{color : 'black',}}>মোট পন্য (মেঃ টন)</h2>
                  <span style={{fontSize : '2em', fontWeight: '700', color : '#FF3D00'}}>৫৬</span>
              </div>
            </div>
        </div>    
      </>
    )
  }

  export default HomePage