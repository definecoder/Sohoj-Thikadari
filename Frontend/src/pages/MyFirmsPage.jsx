// TODO : ADD BG
import './HomePageCSS.css';

import BasicButton from "../components/BasicButton"
import landingLogo from "../assets/appLogo.png"
import InputTextField from '../components/InputTextField';
import PasswordField from '../components/PasswordField';
import LeftNavBar from '../components/LeftNavbar';

function MyFirmsPage() {        

    return (
      <>
        <div className='homepageCanvas'>
            <LeftNavBar curPage = "firms" />
            <div className='rightCanvas'>sdaf</div>
        </div>    
      </>
    )
  }

  export default MyFirmsPage