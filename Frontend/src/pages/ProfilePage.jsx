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
            <div className='rightCanvas'>sdaf</div>
        </div>    
      </>
    )
  }

  export default ProfilePage